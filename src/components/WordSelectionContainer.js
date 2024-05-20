import React, { useState } from 'react';
import WordSelectionButton from './WordSelectionButton';
import './WordSelectionContainer.css';

const WordSelectionContainer = ({ rows, columns, onClick, words }) => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  const handleButtonClick = (index) => {
    if (selectedButtonIndex === index) {
      // Deselect the button if it's already selected
      onClick("-"); // Pass null to parent component to signify deselection
      setSelectedButtonIndex(null);
    } else {
      // Select the clicked button
      onClick(words[index]); // Pass the selected word to the parent component
      setSelectedButtonIndex(index);
    }
  };

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, auto)`, // Adjusted grid template columns
    gridTemplateRows: `repeat(${rows}, auto)`,
    gap: '5px',
  };

  const generateButtons = () => {
    let buttons = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const index = i + j*rows;
        let word = words[index];
        if (words.length > 21) {
          buttons.push(
            <WordSelectionButton
              key={index}
              onClick={() => handleButtonClick(index)}
              isSelected={selectedButtonIndex === index}
              style={{
                width: '220px',
                height: '20px',
                fontSize: '22px',
                paddingTop: '12px',
                paddingBottom: '12px',
                paddingLeft: '0px',
                paddingRight: '0px',
              }}
            >
              {word}
            </WordSelectionButton>
          );
        } else {
          buttons.push(
            <WordSelectionButton
              key={index}
              onClick={() => handleButtonClick(index)}
              isSelected={selectedButtonIndex === index}
              style={{
                width: '200px',
                height: '50px',
              }}
            >
              {word}
            </WordSelectionButton>
          );
        }
      }
    }
    return buttons;
  };

  return (
    <div className="general-container">
      <div className="word-selection-container" style={containerStyle}>
        {generateButtons()}
      </div>
    </div>

  );
};

export default WordSelectionContainer;

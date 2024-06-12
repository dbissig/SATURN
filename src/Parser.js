import './App.css';

function parseStyledText(text) {
  const styledParts = [];
  const regex = /(_([^_]+)_|\*([^*]+)\*|{([^}]+)}|\+([^+]+)\+|~([^~]+)~|`([^`]+)`|@([^@]+)@|([^_*{}+~;`@]+)|([_*{}+~;`@]))/g;

  if (text.includes(';')) {
    // Split the text by semicolon
    const parts = text.split(';');
    // Parse each part separately
    parts.forEach((part, index) => {
      if (index > 0) {
        // Add a marker for the beginning of the message
        styledParts.push({ boundary: 'start' });
        const parsedParts = parseStyledText(part);
        styledParts.push(...parsedParts); // Concatenate the parsed parts
        styledParts.push({ boundary: 'end' });
      }
      else {
        const parsedParts = parseStyledText(part);
        styledParts.push(...parsedParts); // Concatenate the parsed parts
      }
      // Add a marker for the end of the message
    });
  } else {
    // Process the text using the regex pattern
    let match;
    while ((match = regex.exec(text)) !== null) {
      if (match[2]) {
        const nestedParts = parseStyledText(match[2]);
        styledParts.push({ style: 'underline', content: nestedParts });
      } else if (match[3]) {
        const nestedParts = parseStyledText(match[3]);
        styledParts.push({ style: 'italic', content: nestedParts });
      } else if (match[4]) {
        const nestedParts = parseStyledText(match[4]);
        styledParts.push({ style: 'red', content: nestedParts });
      } else if (match[5]) {
        const nestedParts = parseStyledText(match[5]);
        styledParts.push({ style: 'green', content: nestedParts });
      } else if (match[6]) {
        const nestedParts = parseStyledText(match[6]);
        styledParts.push({ style: 'blue', content: nestedParts });
      } else if (match[7]) {
        const nestedParts = parseStyledText(match[7]);
        styledParts.push({ style: 'blueHighlight', content: nestedParts });
      } else if (match[8]) {
        const nestedParts = parseStyledText(match[8]);
        styledParts.push({ style: 'fadingBlueHighlight', content: nestedParts });
      } else if (match[9]) {
        styledParts.push({ style: null, content: match[9] });
      } else if (match[10]) {
        styledParts.push({ style: null, content: match[10] });
      }
    }
  }

  return styledParts;
}

function ParseInputFile(fileContent) {
  const lines = fileContent.split('\n');
  const pages = [];
  let currentPageData = {};

  lines.forEach(line => {
    line = line.trim();
    if (line === "") {
      if (Object.keys(currentPageData).length > 0) {
        pages.push({ ...currentPageData });
        currentPageData = {};
      }
    } else {
      const [key, value] = line.split(": ", 2);
      if (key && value) {
        currentPageData[key] = parseStyledText(value);
      }
    }
  });

  if (Object.keys(currentPageData).length > 0) {
    pages.push({ ...currentPageData });
  }
  return pages;
}

const ParseMeanSDFile = (input) => {
  const lines = input.split('\n').filter(line => line.includes('='));
  const data = {};

  lines.forEach(line => {
    const [key, value] = line.split(' = ').map(item => item.trim());
    if (key && value) {
      let parts = key.split('_');
      let task = parts.slice(0, -1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); // Capitalize each word and join
      let stat = parts[parts.length - 1]; // The last part is the stat

      if (!data[task]) {
        data[task] = {};
      }

      data[task][stat] = parseFloat(value);
    }
  });
  return data;
};

const ParseSaturnScoringFile = (input) => {
  const lines = input.split('\n').filter(line => !line.startsWith('#') && line.includes('=')); // Filter lines not starting with '#' and containing '='
  const data = [];

  let currentPoint = {};

  lines.forEach(line => {
    const [key, ...valueParts] = line.split('=').map(item => item.trim()); // Split key and value parts
    const value = valueParts.join('=').trim().replace(/"/g, ''); // Re-join value parts with '=', then remove double quotes
    if (key && value) {
      if (key === 'SUM_TOTAL_POINTS') {
        if (Object.keys(currentPoint).length > 0) {
          data.push(currentPoint); // Push current point to array
          currentPoint = {}; // Reset current point
        }
        currentPoint.sumTotalPoints = parseInt(value); // Set SUM_TOTAL_POINTS
      } else {
        currentPoint[key] = value; // Set other properties
      }
    }
  });

  if (Object.keys(currentPoint).length > 0) {
    data.push(currentPoint); // Push last point to array
  }
  return data;
};

export { ParseInputFile, ParseMeanSDFile, ParseSaturnScoringFile };


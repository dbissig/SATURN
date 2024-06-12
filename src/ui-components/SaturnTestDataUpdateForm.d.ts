/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SaturnTestDataUpdateFormInputValues = {
    totalPoints?: number;
    totalTime?: number;
    executiveMiniTrailsB?: number[];
    executiveStroop?: number[];
    math?: number[];
    meanPredictiveZScores?: number[];
    memoryFiveWords?: number[];
    memoryIncidental?: number[];
    motorSpeed?: number[];
    orientation?: number[];
    readingSpeed?: number[];
    simpleAttention?: number[];
    visuospatialImageCombos?: number[];
    visuospatialMiniTrailsA?: number[];
};
export declare type SaturnTestDataUpdateFormValidationValues = {
    totalPoints?: ValidationFunction<number>;
    totalTime?: ValidationFunction<number>;
    executiveMiniTrailsB?: ValidationFunction<number>;
    executiveStroop?: ValidationFunction<number>;
    math?: ValidationFunction<number>;
    meanPredictiveZScores?: ValidationFunction<number>;
    memoryFiveWords?: ValidationFunction<number>;
    memoryIncidental?: ValidationFunction<number>;
    motorSpeed?: ValidationFunction<number>;
    orientation?: ValidationFunction<number>;
    readingSpeed?: ValidationFunction<number>;
    simpleAttention?: ValidationFunction<number>;
    visuospatialImageCombos?: ValidationFunction<number>;
    visuospatialMiniTrailsA?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SaturnTestDataUpdateFormOverridesProps = {
    SaturnTestDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    totalPoints?: PrimitiveOverrideProps<TextFieldProps>;
    totalTime?: PrimitiveOverrideProps<TextFieldProps>;
    executiveMiniTrailsB?: PrimitiveOverrideProps<TextFieldProps>;
    executiveStroop?: PrimitiveOverrideProps<TextFieldProps>;
    math?: PrimitiveOverrideProps<TextFieldProps>;
    meanPredictiveZScores?: PrimitiveOverrideProps<TextFieldProps>;
    memoryFiveWords?: PrimitiveOverrideProps<TextFieldProps>;
    memoryIncidental?: PrimitiveOverrideProps<TextFieldProps>;
    motorSpeed?: PrimitiveOverrideProps<TextFieldProps>;
    orientation?: PrimitiveOverrideProps<TextFieldProps>;
    readingSpeed?: PrimitiveOverrideProps<TextFieldProps>;
    simpleAttention?: PrimitiveOverrideProps<TextFieldProps>;
    visuospatialImageCombos?: PrimitiveOverrideProps<TextFieldProps>;
    visuospatialMiniTrailsA?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SaturnTestDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: SaturnTestDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    saturnTestData?: any;
    onSubmit?: (fields: SaturnTestDataUpdateFormInputValues) => SaturnTestDataUpdateFormInputValues;
    onSuccess?: (fields: SaturnTestDataUpdateFormInputValues) => void;
    onError?: (fields: SaturnTestDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SaturnTestDataUpdateFormInputValues) => SaturnTestDataUpdateFormInputValues;
    onValidate?: SaturnTestDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SaturnTestDataUpdateForm(props: SaturnTestDataUpdateFormProps): React.ReactElement;

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type BankTransferCreateFormInputValues = {
    uuid?: string;
    source?: string;
    amount?: number;
    type?: string;
    transactionId?: string;
};
export declare type BankTransferCreateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    source?: ValidationFunction<string>;
    amount?: ValidationFunction<number>;
    type?: ValidationFunction<string>;
    transactionId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BankTransferCreateFormOverridesProps = {
    BankTransferCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    source?: PrimitiveOverrideProps<TextFieldProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    transactionId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BankTransferCreateFormProps = React.PropsWithChildren<{
    overrides?: BankTransferCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BankTransferCreateFormInputValues) => BankTransferCreateFormInputValues;
    onSuccess?: (fields: BankTransferCreateFormInputValues) => void;
    onError?: (fields: BankTransferCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BankTransferCreateFormInputValues) => BankTransferCreateFormInputValues;
    onValidate?: BankTransferCreateFormValidationValues;
} & React.CSSProperties>;
export default function BankTransferCreateForm(props: BankTransferCreateFormProps): React.ReactElement;

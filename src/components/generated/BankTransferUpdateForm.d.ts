import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BankTransfer } from "./graphql/types";
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
export declare type BankTransferUpdateFormInputValues = {
    uuid?: string;
    source?: string;
    amount?: number;
    type?: string;
    transactionId?: string;
};
export declare type BankTransferUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    source?: ValidationFunction<string>;
    amount?: ValidationFunction<number>;
    type?: ValidationFunction<string>;
    transactionId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BankTransferUpdateFormOverridesProps = {
    BankTransferUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    source?: PrimitiveOverrideProps<TextFieldProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    transactionId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BankTransferUpdateFormProps = React.PropsWithChildren<{
    overrides?: BankTransferUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bankTransfer?: BankTransfer;
    onSubmit?: (fields: BankTransferUpdateFormInputValues) => BankTransferUpdateFormInputValues;
    onSuccess?: (fields: BankTransferUpdateFormInputValues) => void;
    onError?: (fields: BankTransferUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BankTransferUpdateFormInputValues) => BankTransferUpdateFormInputValues;
    onValidate?: BankTransferUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BankTransferUpdateForm(props: BankTransferUpdateFormProps): React.ReactElement;

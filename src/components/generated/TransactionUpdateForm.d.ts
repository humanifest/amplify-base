import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Transaction } from "./graphql/types";
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
export declare type TransactionUpdateFormInputValues = {
    uuid?: string;
    source?: string;
    amount?: number;
    description?: string;
    privacyLevel?: string;
    balanceAtCompletion?: number;
    status?: string;
    requestResolvedAt?: string;
};
export declare type TransactionUpdateFormValidationValues = {
    uuid?: ValidationFunction<string>;
    source?: ValidationFunction<string>;
    amount?: ValidationFunction<number>;
    description?: ValidationFunction<string>;
    privacyLevel?: ValidationFunction<string>;
    balanceAtCompletion?: ValidationFunction<number>;
    status?: ValidationFunction<string>;
    requestResolvedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TransactionUpdateFormOverridesProps = {
    TransactionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uuid?: PrimitiveOverrideProps<TextFieldProps>;
    source?: PrimitiveOverrideProps<TextFieldProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    privacyLevel?: PrimitiveOverrideProps<SelectFieldProps>;
    balanceAtCompletion?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    requestResolvedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TransactionUpdateFormProps = React.PropsWithChildren<{
    overrides?: TransactionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    transaction?: Transaction;
    onSubmit?: (fields: TransactionUpdateFormInputValues) => TransactionUpdateFormInputValues;
    onSuccess?: (fields: TransactionUpdateFormInputValues) => void;
    onError?: (fields: TransactionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TransactionUpdateFormInputValues) => TransactionUpdateFormInputValues;
    onValidate?: TransactionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TransactionUpdateForm(props: TransactionUpdateFormProps): React.ReactElement;

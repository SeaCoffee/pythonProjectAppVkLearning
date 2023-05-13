import * as React from "react";
import { HasComponent, HasRootRef } from "../../types";
import "./FormField.css";
export declare const FormFieldMode: {
    readonly default: "default";
    readonly plain: "plain";
};
export interface FormFieldProps {
    status?: "default" | "error" | "valid";
    /**
     * Добавляет иконку слева.
     *
     * Рекомендации:
     *
     * - Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.
     * - Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.
     */
    before?: React.ReactNode;
    /**
     * Добавляет иконку справа.
     *
     * Рекомендации:
     *
     * - Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.
     * - Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.
     */
    after?: React.ReactNode;
    mode?: keyof typeof FormFieldMode;
}
interface FormFieldOwnProps extends React.AllHTMLAttributes<HTMLElement>, HasRootRef<HTMLElement>, HasComponent, FormFieldProps {
    disabled?: boolean;
}
/**
 * @see https://vkcom.github.io/VKUI/#/FormField
 */
export declare const FormField: ({ Component, status, children, getRootRef, before, after, disabled, mode, ...restProps }: FormFieldOwnProps) => JSX.Element;
export {};

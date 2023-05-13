import * as React from "react";
import { VKUIButtonProps } from "../Button/Button";
import { HasRef, HasRootRef } from "../../types";
export interface FileProps extends Omit<VKUIButtonProps, "type">, Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size">, HasRef<HTMLInputElement>, HasRootRef<HTMLElement> {
    /**
     * @deprecated Будет удалено в 5.0.0. Используйте size
     */
    controlSize?: VKUIButtonProps["size"];
}
/**
 * @see https://vkcom.github.io/VKUI/#/File
 */
export declare const File: ({ children, align, controlSize, size, mode, stretched, before, after, loading, className, style, getRef, getRootRef, appearance, ...restProps }: FileProps) => JSX.Element;

import * as React from "react";
import { HasRootRef } from "../../types";
import "./Header.css";
export interface HeaderProps extends React.HTMLAttributes<HTMLElement>, HasRootRef<HTMLElement> {
    mode?: "primary" | "secondary" | "tertiary";
    subtitle?: React.ReactNode;
    /**
     * Допускаются иконки, текст, Link
     */
    aside?: React.ReactNode;
    /**
     * Допускаются текст, Indicator
     */
    indicator?: React.ReactNode;
    multiline?: boolean;
}
/**
 * @see https://vkcom.github.io/VKUI/#/Header
 */
export declare const Header: ({ mode, children, subtitle, indicator, aside, getRootRef, multiline, ...restProps }: HeaderProps) => JSX.Element;

import * as React from "react";
import "./Gradient.css";
export interface GradientProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Тип градиента
     */
    mode?: "tint" | "white" | "black";
    /**
     * Направление градиента
     */
    to?: "top" | "bottom";
}
/**
 * @see https://vkcom.github.io/VKUI/#/Gradient
 */
export declare const Gradient: ({ mode, children, to, ...restProps }: GradientProps) => JSX.Element;

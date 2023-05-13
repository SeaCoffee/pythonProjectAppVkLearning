import * as React from "react";
import { HasRootRef } from "../../types";
import "./Card.css";
export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
    mode?: "tint" | "shadow" | "outline";
}
/**
 * @see https://vkcom.github.io/VKUI/#/Card
 */
export declare const Card: ({ mode, children, getRootRef, ...restProps }: CardProps) => JSX.Element;

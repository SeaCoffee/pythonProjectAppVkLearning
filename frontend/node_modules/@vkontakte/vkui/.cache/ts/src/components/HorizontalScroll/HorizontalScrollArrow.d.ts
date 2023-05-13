import * as React from "react";
import "./HorizontalScrollArrow.css";
export interface HorizontalScrollArrowProps {
    direction: "left" | "right";
    size?: "m" | "l";
    onClick(event: React.MouseEvent): void;
}
export declare const HorizontalScrollArrow: ({ size, direction, onClick, ...restProps }: HorizontalScrollArrowProps) => JSX.Element;

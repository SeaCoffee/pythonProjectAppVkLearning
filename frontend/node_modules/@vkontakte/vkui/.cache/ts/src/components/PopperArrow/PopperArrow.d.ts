import * as React from "react";
import "./PopperArrow.css";
export interface PopperArrowProps {
    style?: React.CSSProperties;
    attributes?: React.HTMLAttributes<HTMLDivElement> | null;
    arrowClassName?: string;
}
export declare const PopperArrow: ({ style, attributes, arrowClassName, }: PopperArrowProps) => JSX.Element;

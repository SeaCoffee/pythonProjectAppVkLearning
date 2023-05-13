import * as React from "react";
import { DraggableProps } from "../useDraggable";
import "./CellDragger.css";
declare type CellDraggerProps = DraggableProps & React.HTMLAttributes<HTMLElement>;
export declare const CellDragger: ({ onDragStart, onDragMove, onDragEnd, ...restProps }: CellDraggerProps) => JSX.Element;
export {};

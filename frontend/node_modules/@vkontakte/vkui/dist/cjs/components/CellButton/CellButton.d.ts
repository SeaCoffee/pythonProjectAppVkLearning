/// <reference types="react" />
import { SimpleCellProps } from "../SimpleCell/SimpleCell";
import "./CellButton.css";
export interface CellButtonProps extends SimpleCellProps {
    mode?: "primary" | "danger";
    centered?: boolean;
}
/**
 * @see https://vkcom.github.io/VKUI/#/CellButton
 */
export declare const CellButton: ({ centered, mode, ...restProps }: CellButtonProps) => JSX.Element;

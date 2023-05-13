/// <reference types="react" />
import { SpinnerProps } from "../Spinner/Spinner";
import "./ScreenSpinner.css";
export interface ScreenSpinnerProps extends SpinnerProps {
    state?: "loading" | "cancelable" | "done" | "error";
}
/**
 * @see https://vkcom.github.io/VKUI/#/ScreenSpinner
 */
export declare const ScreenSpinner: ({ style, className, state, size, "aria-label": ariaLabel, onClick, ...restProps }: ScreenSpinnerProps) => JSX.Element;

import * as React from "react";
import { HoverPopperProps } from "../HoverPopper/HoverPopper";
import "./TextTooltip.css";
export interface TextTooltipProps extends Omit<HoverPopperProps, "arrow" | "arrowClassName" | "content"> {
    /**
     * Текст тултипа
     */
    text?: React.ReactNode;
    /**
     * Заголовок тултипа
     */
    header?: React.ReactNode;
    /**
     * Стиль отображения подсказки
     */
    appearance?: "accent" | "neutral" | "white" | "black" | "inversion";
}
/**
 * @see https://vkcom.github.io/VKUI/#/TextTooltip
 */
export declare const TextTooltip: ({ children, text, header, appearance, ...popperProps }: TextTooltipProps) => JSX.Element;

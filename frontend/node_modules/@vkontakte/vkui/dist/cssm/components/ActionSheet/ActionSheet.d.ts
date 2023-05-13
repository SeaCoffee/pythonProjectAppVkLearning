import * as React from "react";
import { SharedDropdownProps } from "./types";
import "./ActionSheet.css";
export interface ActionSheetProps extends Pick<SharedDropdownProps, "toggleRef" | "popupDirection" | "popupOffsetDistance">, React.HTMLAttributes<HTMLDivElement> {
    header?: React.ReactNode;
    text?: React.ReactNode;
    /**
     * Закрыть попап по клику снаружи. В v5 будет обязательным.
     */
    onClose?: VoidFunction;
    /**
     * Только iOS. В v5 будет обязательным.
     */
    iosCloseItem?: React.ReactNode;
}
/**
 * @see https://vkcom.github.io/VKUI/#/ActionSheet
 */
export declare const ActionSheet: ({ children, className, header, text, style, iosCloseItem, popupDirection, popupOffsetDistance, ...restProps }: ActionSheetProps) => JSX.Element;

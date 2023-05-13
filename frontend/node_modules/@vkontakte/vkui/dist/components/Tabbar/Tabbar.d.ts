import * as React from "react";
import "./Tabbar.css";
export interface TabbarProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Флаг для показа/скрытия верхней тени (Android) или границы (iOS)
     */
    shadow?: boolean;
    /**
     * @deprecated будет удалено в 5.0.0. Используйте `mode`
     */
    itemsLayout?: "vertical" | "horizontal" | "auto";
    /**
     * Задает расположение элементов (вертикальное/горизонтальное)
     */
    mode?: "vertical" | "horizontal" | "auto";
}
/**
 * @see https://vkcom.github.io/VKUI/#/Tabbar
 */
export declare const Tabbar: ({ children, shadow, itemsLayout, mode, ...restProps }: TabbarProps) => JSX.Element;

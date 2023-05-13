import * as React from "react";
import { NavIdProps } from "../../lib/getNavId";
import "./View.css";
declare enum SwipeBackResults {
    fail = 1,
    success = 2
}
interface Scrolls {
    [index: string]: number | undefined;
}
interface ViewsScrolls {
    [index: string]: Scrolls;
}
export declare let scrollsCache: ViewsScrolls;
export interface ViewProps extends React.HTMLAttributes<HTMLElement>, NavIdProps {
    activePanel: string;
    /**
     * @deprecated будет удалено в 5.0.0. Используйте одноименное свойство у `SplitLayout`.
     *
     * Свойство для отрисовки `Alert`, `ActionSheet` и `ScreenSpinner`.
     */
    popout?: React.ReactNode;
    /**
     * @deprecated будет удалено в 5.0.0. Используйте одноименное свойство у `SplitLayout`.
     *
     * Свойство для отрисовки `ModalRoot`.
     */
    modal?: React.ReactNode;
    onTransition?(params: {
        isBack: boolean;
        from: string;
        to: string;
    }): void;
    /**
     * callback свайпа назад
     */
    onSwipeBack?(): void;
    /**
     * callback начала анимации свайпа назад.
     */
    onSwipeBackStart?(): void;
    /**
     * callback завершения анимации отмененного пользователем свайпа
     */
    onSwipeBackCancel?(): void;
    history?: string[];
}
export interface ViewState {
    animated: boolean;
    visiblePanels: string[];
    activePanel: string | null;
    isBack: boolean | undefined;
    prevPanel: string | null;
    nextPanel: string | null;
    swipingBack: boolean;
    swipeBackStartX: number;
    swipeBackShift: number;
    swipeBackNextPanel: string | null;
    swipeBackPrevPanel: string | null;
    swipeBackResult: SwipeBackResults | null;
    browserSwipe: boolean;
}
/**
 * @see https://vkcom.github.io/VKUI/#/View
 */
export declare const View: ({ popout, modal, activePanel: activePanelProp, history, nav, onTransition, onSwipeBack, onSwipeBackStart, onSwipeBackCancel: onSwipeBackCancelProp, children, ...restProps }: ViewProps) => JSX.Element;
export {};

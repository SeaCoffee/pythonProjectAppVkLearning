import * as React from "react";
import { PopperCommonProps } from "../Popper/Popper";
import "./Dropdown.css";
export interface DropdownProps extends Omit<PopperCommonProps, "arrow" | "arrowClassName"> {
    /**
     * Механика вызова всплывающего окна.
     *
     * - `"click"` – показывается/скрывается только при нажатии.
     * - `"hover"` – помимо нажатия, будет показываться/скрывается при наведении/отведении мыши.
     *
     * > ⚠️`"hover"` на тач-устройствах будет работать как `"click"`, с одним лишь нюансом, что не будет закрываться
     * > при повторном нажатии на целевой элемент. Для закрытия необходимо нажать на область вне целевого элемента
     * > и выпадающего окна.
     */
    action?: "click" | "hover";
    /**
     * Если передан, то всплывающее окно будет показан/скрыт в зависимости от значения свойства.
     */
    shown?: boolean;
    /**
     * Количество миллисекунд, после которых произойдёт показ всплывающего окна.
     *
     * > Используется только для `action="hover"` при наведении/отведении мыши.
     */
    showDelay?: number;
    /**
     * Количество миллисекунд, после которых произойдёт скрытие всплывающего окна.
     *
     * > Используется только для `action="hover"` при наведении/отведении мыши.
     */
    hideDelay?: number;
    /**
     * Содержимое всплывающего окна.
     */
    content?: React.ReactNode;
    /**
     * Целевой элемент. Всплывающее окно появится возле него.
     *
     * > ⚠️ Если это пользовательский компонент, то он должен предоставлять параметры либо `getRootRef`, либо `ref` для получения ссылки на DOM-узел.
     */
    children?: React.ReactElement;
    /**
     * Вызывается при каждом изменении видимости всплывающего окна.
     */
    onShownChange?(shown: boolean): void;
}
/**
 * @see https://vkcom.github.io/VKUI/#/Dropdown
 *
 * TODO v5.0.0 Переименовать в `Popover` (см. https://github.com/VKCOM/VKUI/issues/2523)
 */
export declare const Dropdown: ({ action, shown: shownProp, showDelay, hideDelay, offsetDistance, content, children, style, getRef, onShownChange, ...restProps }: DropdownProps) => JSX.Element;

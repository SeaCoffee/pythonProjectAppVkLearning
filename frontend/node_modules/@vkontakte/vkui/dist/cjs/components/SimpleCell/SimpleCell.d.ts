import * as React from "react";
import { HasComponent } from "../../types";
import { TappableProps } from "../Tappable/Tappable";
import "./SimpleCell.css";
export interface SimpleCellOwnProps extends HasComponent {
    /**
     * Иконка 28 или `<Avatar size={28|32|40|48|72} />`
     */
    before?: React.ReactNode;
    /**
     * @deprecated будет удалено в v5.0.0, используйте свойство rightBadge
     * Иконка 12 или `<Badge />`. Добавится справа от текста `children`.
     */
    badge?: React.ReactNode;
    /**
     * Иконка 12 или `<Badge />`. Добавится слева от текста `children`.
     */
    badgeBeforeTitle?: React.ReactNode;
    /**
     * Иконка 12 или `<Badge />`. Добавится справа от текста `children`.
     */
    badgeAfterTitle?: React.ReactNode;
    /**
     * Иконка 12. Добавится слева от текста `subtitle`.
     */
    badgeBeforeSubtitle?: React.ReactNode;
    /**
     * Иконка 12. Добавится справа от текста `subtitle`.
     */
    badgeAfterSubtitle?: React.ReactNode;
    /**
     * Контейнер для текста справа от `children`.
     */
    indicator?: React.ReactNode;
    /**
     * Дополнительная строка текста над `children`.
     */
    subhead?: React.ReactNode;
    /**
     * Дополнительная строка текста под `children`.
     */
    subtitle?: React.ReactNode;
    /**
     * Дополнительная строка текста под `children` и `subtitle`.
     */
    extraSubtitle?: React.ReactNode;
    /**
     * Иконка 24|28 или `<Switch />`. Располагается справа от `indicator`.
     */
    after?: React.ReactNode;
    /**
     * @deprecated будет удалено в v5.0.0, используйте свойство subtitle
     * Контейнер для текста под `children`.
     */
    description?: React.ReactNode;
    /**
     * Убирает анимацию нажатия
     */
    disabled?: boolean;
    /**
     * В iOS добавляет chevron справа. Передавать `true`, если предполагается переход при клике по ячейке.
     */
    expandable?: boolean;
    /**
     * Включает многострочный режим для отображения текста
     */
    multiline?: boolean;
}
export interface SimpleCellProps extends SimpleCellOwnProps, TappableProps {
}
/**
 * @see https://vkcom.github.io/VKUI/#/SimpleCell
 */
export declare const SimpleCell: React.FC<Pick<SimpleCellProps, "cite" | "data" | "form" | "label" | "slot" | "span" | "style" | "summary" | "title" | "pattern" | "value" | "children" | "alt" | "crossOrigin" | "height" | "sizes" | "src" | "srcSet" | "useMap" | "width" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDownCapture" | "onMouseEnter" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancelCapture" | "onTouchEndCapture" | "onTouchMoveCapture" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "start" | "content" | "size" | "default" | "wrap" | "open" | "after" | "multiple" | "disabled" | "list" | "step" | "onStart" | "onMove" | "onLeave" | "onEnter" | "onEnd" | "Component" | "getRootRef" | "stopPropagation" | "accept" | "acceptCharset" | "action" | "allowFullScreen" | "allowTransparency" | "as" | "async" | "autoComplete" | "autoFocus" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "classID" | "cols" | "colSpan" | "controls" | "coords" | "dateTime" | "defer" | "download" | "encType" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "high" | "href" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "max" | "maxLength" | "media" | "mediaGroup" | "method" | "min" | "minLength" | "muted" | "name" | "nonce" | "noValidate" | "optimum" | "playsInline" | "poster" | "preload" | "readOnly" | "rel" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "selected" | "shape" | "srcDoc" | "srcLang" | "target" | "type" | "wmode" | "activeEffectDelay" | "hasHover" | "hoverMode" | "hasActive" | "activeMode" | "focusVisibleMode" | "expandable" | "before" | "indicator" | "subtitle" | "multiline" | "badge" | "badgeBeforeTitle" | "badgeAfterTitle" | "badgeBeforeSubtitle" | "badgeAfterSubtitle" | "description" | "subhead" | "extraSubtitle"> & import("../AdaptivityProvider/AdaptivityContext").SizeProps>;

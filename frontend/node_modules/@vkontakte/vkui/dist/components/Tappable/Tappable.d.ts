import * as React from "react";
import { TouchProps } from "../Touch/Touch";
import { HasComponent, HasRootRef } from "../../types";
import { AdaptivityProps } from "../../hoc/withAdaptivity";
import { FocusVisibleMode } from "../FocusVisible/FocusVisible";
import "./Tappable.css";
export declare type TappableElementProps = Omit<React.AllHTMLAttributes<HTMLElement>, "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onMouseDown" | "onMouseMove" | "onMouseUp" | "onMouseLeave">;
export interface TappableProps extends TappableElementProps, HasRootRef<HTMLElement>, AdaptivityProps, HasComponent, Pick<TouchProps, "onStart" | "onEnd" | "onMove"> {
    /**
     * Длительность показа active-состояния
     */
    activeEffectDelay?: number;
    stopPropagation?: boolean;
    /**
     * Указывает, должен ли компонент реагировать на hover-состояние
     */
    hasHover?: boolean;
    /**
     * Указывает, должен ли компонент реагировать на active-состояние
     */
    hasActive?: boolean;
    /**
     * Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active
     */
    activeMode?: "opacity" | "background" | string;
    /**
     * Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover
     */
    hoverMode?: "opacity" | "background" | string;
    /**
     * Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс во время focus-visible
     */
    focusVisibleMode?: FocusVisibleMode | string;
    children?: React.ReactNode;
    onEnter?(outputEvent: MouseEvent): void;
    onLeave?(outputEvent: MouseEvent): void;
}
export interface RootComponentProps extends TouchProps {
    ref?: React.Ref<HTMLElement>;
}
export declare const ACTIVE_DELAY = 70;
export declare const ACTIVE_EFFECT_DELAY = 600;
/**
 * @see https://vkcom.github.io/VKUI/#/Tappable
 */
export declare const Tappable: React.FC<Pick<TappableProps, "cite" | "data" | "form" | "label" | "slot" | "span" | "style" | "summary" | "title" | "pattern" | "value" | "children" | "alt" | "crossOrigin" | "height" | "sizes" | "src" | "srcSet" | "useMap" | "width" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDownCapture" | "onMouseEnter" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancelCapture" | "onTouchEndCapture" | "onTouchMoveCapture" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "start" | "content" | "size" | "default" | "wrap" | "open" | "multiple" | "disabled" | "list" | "step" | "onStart" | "onMove" | "onLeave" | "onEnter" | "onEnd" | "Component" | "getRootRef" | "stopPropagation" | "accept" | "acceptCharset" | "action" | "allowFullScreen" | "allowTransparency" | "as" | "async" | "autoComplete" | "autoFocus" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "classID" | "cols" | "colSpan" | "controls" | "coords" | "dateTime" | "defer" | "download" | "encType" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "high" | "href" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "max" | "maxLength" | "media" | "mediaGroup" | "method" | "min" | "minLength" | "muted" | "name" | "nonce" | "noValidate" | "optimum" | "playsInline" | "poster" | "preload" | "readOnly" | "rel" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "selected" | "shape" | "srcDoc" | "srcLang" | "target" | "type" | "wmode" | "activeEffectDelay" | "hasHover" | "hoverMode" | "hasActive" | "activeMode" | "focusVisibleMode"> & import("../AdaptivityProvider/AdaptivityContext").SizeProps>;

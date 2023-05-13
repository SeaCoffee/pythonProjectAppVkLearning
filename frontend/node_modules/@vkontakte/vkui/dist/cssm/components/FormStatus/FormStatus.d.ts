import * as React from "react";
import "./FormStatus.css";
export interface FormStatusProps extends React.HTMLAttributes<HTMLDivElement> {
    mode?: "default" | "error";
    header?: React.ReactNode;
}
/**
 * @deprecated Этот компонент устарел и будет удален в v5.0.0. Используйте [`Banner`](#/Banner).
 * @see https://vkcom.github.io/VKUI/#/FormStatus
 */
export declare const FormStatus: ({ mode, header, children, dangerouslySetInnerHTML, ...restProps }: FormStatusProps) => JSX.Element;

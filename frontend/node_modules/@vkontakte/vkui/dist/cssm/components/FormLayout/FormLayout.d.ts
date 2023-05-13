import * as React from "react";
import { HasComponent, HasRef } from "../../types";
import "./FormLayout.css";
export declare type FormLayoutProps = React.AllHTMLAttributes<HTMLElement> & HasRef<HTMLElement> & HasComponent;
/**
 * @see https://vkcom.github.io/VKUI/#/FormLayout
 */
export declare const FormLayout: ({ children, Component, getRef, onSubmit, ...restProps }: FormLayoutProps) => JSX.Element;

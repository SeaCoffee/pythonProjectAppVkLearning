import * as React from "react";
import { VKontakteIconsBackwardsCompatibleElement } from "../../types";
export interface DropdownIconProps extends React.HTMLAttributes<VKontakteIconsBackwardsCompatibleElement> {
    opened?: boolean;
}
export declare const DropdownIcon: ({ opened, ...restProps }: DropdownIconProps) => JSX.Element;

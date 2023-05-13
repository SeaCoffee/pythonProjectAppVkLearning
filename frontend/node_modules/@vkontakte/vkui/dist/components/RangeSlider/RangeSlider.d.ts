/// <reference types="react" />
import { UniversalSliderProps } from "./UniversalSlider";
export declare type Value = [number, number];
export declare type RangeSliderProps = UniversalSliderProps<Value>;
/**
 * @see https://vkcom.github.io/VKUI/#/RangeSlider
 */
export declare const RangeSlider: ({ onChange, defaultValue, min, max, step, ...props }: RangeSliderProps) => JSX.Element;

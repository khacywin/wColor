import React from 'react';
declare type HSL = {
    h: number;
    s: number;
    l: number;
};
interface Props {
    h: number;
    s: number;
    l: number;
    change: (hsl: HSL) => void;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;

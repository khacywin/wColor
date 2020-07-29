import React from 'react';
interface Props {
    colour: string[];
    select: string;
    fnSelected: (value: string) => void;
    fnRemove: (value: string) => void;
}
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;

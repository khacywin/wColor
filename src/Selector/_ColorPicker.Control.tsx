import React, { useState, useRef, useEffect } from 'react';
import * as StyleColorPicker from './style.ColorPicker';
import _t from '../util/_t';
import { hexAToRGBA, HSLAToRGBA } from './_ColorPicker.convert';

type HSL = { h: number; s: number; l: number };
interface Props {
  h: number;
  s: number;
  l: number;
  change: (hsl: HSL) => void;
}
export default React.memo((props: Props) => {
  const [value, setValue] = useState('');
  const [focus, setFocus] = useState(false);
  const refInput: any = useRef();

  useEffect(() => {
    let { h, s, l }: HSL = props;
    if (!focus) {
      setValue(HSLAToRGBA(h, s, l, 1, true));
    }
  }, [props.h, props.s, props.l]);

  function handleChange(e: any) {
    let _value: string = e.target.value;
    let hsl: HSL = hexAToRGBA(_value, true);
    if (_value.match(/^(#[0-9a-fA-F]{6})|(#[0-9a-fA-F]{3})$/)) {
      props.change(hsl);
      refInput.current.style.borderColor = '#e9e9e9';
    } else {
      refInput.current.style.borderColor = 'red';
    }
    setValue(_value);
  }

  return (
    <StyleColorPicker.WColorPickerControl>
      <StyleColorPicker.WColorPickerControlValue color={value} />
      <label htmlFor='wColorPickerValueHEX'> HEX </label>
      <input
        ref={refInput}
        type='text'
        id='wColorPickerValueHEX'
        value={value}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={handleChange}
      />
    </StyleColorPicker.WColorPickerControl>
  );
});

import React, { useEffect, useRef, useState } from 'react';
import * as StyleColorPicker from './style.ColorPicker';

interface Props {
  h: number;
  change: (hue: number) => void;
}
export default React.memo((props: Props) => {
  const refSliderSelect: any = useRef();
  const refSliderBox: any = useRef();
  const [cSelect, setSelect] = useState(1);
  let isMousedownSlider = false;
  let widthBox = 0;

  useEffect(() => {
    // Event mouse down for circle selected
    refSliderSelect.current.addEventListener('mousedown', function () {
      isMousedownSlider = true;
    });

    // Event mouse up for circle selected
    refSliderSelect.current.addEventListener('mouseup', function () {
      if (isMousedownSlider) isMousedownSlider = false;
    });

    // Event mouse move
    refSliderBox.current.addEventListener('mousemove', handleMoveCircleSelect);

    // Event mouse leave
    refSliderBox.current.addEventListener('mouseleave', (event: any) => {
      document.addEventListener('mouseup', () => {
        if (isMousedownSlider) isMousedownSlider = false;
      });
    });

    refSliderBox.current.addEventListener('click', (e: any) =>
      handleMoveCircleSelect(e, true)
    );
  }, []);

  useEffect(() => {
    widthBox = refSliderBox.current.width.baseVal.value;

    setSelect(convertHueToPosition(props.h));
  }, [props.h]);

  function convertPositionToHue(pos: number) {
    const percent = (pos / widthBox) * 100;
    // Calculating the color
    // Max number for hue colors is 359, I find the percentage of this, from the percent variable
    // I take it away from the max number because the slider should work backwards
    return Math.round(359 - (359 / 100) * percent);
  }

  function convertHueToPosition(hue: number) {
    let percentHue = 100 - (hue / 359) * 100;
    let pos = (widthBox / 100) * percentHue - 5;
    return pos;
  }

  function handleMoveCircleSelect(e: any, isClick = false) {
    let _c = e.offsetX;
    if (isClick || isMousedownSlider) {
      props.change(convertPositionToHue(_c));
      // setSelect(_c);
    }
  }

  return (
    <StyleColorPicker.WColorPickerBar>
      <svg width='100%' height='26'>
        <defs>
          <linearGradient id='hue' x1='100%' y1='0%' x2='0%' y2='0%'>
            <stop offset='0%' stopColor='#f00'></stop>
            <stop offset='16.666%' stopColor='#ff0'></stop>
            <stop offset='33.333%' stopColor='#0f0'></stop>
            <stop offset='50%' stopColor='#0ff'></stop>
            <stop offset='66.666%' stopColor='#00f'></stop>
            <stop offset='83.333%' stopColor='#f0f'></stop>
            <stop offset='100%' stopColor='#f00'></stop>
          </linearGradient>
        </defs>
        <rect
          ref={refSliderBox}
          rx='5'
          ry='5'
          x='0'
          y='1'
          width='100%'
          height='20'
          stroke='#fff'
          strokeWidth='2'
          fill='url(#hue)'
        ></rect>
        <rect
          ref={refSliderSelect}
          width='5'
          height='22'
          stroke='#000'
          strokeWidth='2'
          fill='transparent'
          rx='5'
          ry='5'
          x={cSelect}
          y='0'
        ></rect>
      </svg>
    </StyleColorPicker.WColorPickerBar>
  );
});

import React, { useEffect, useRef, useState } from 'react';
import * as StyleColorPicker from './style.ColorPicker';

interface Props {
  h: number;
  s: number;
  l: number;
  change: (s: number, l: number) => void;
}
export default React.memo((props: Props) => {
  const refCircleSelect: any = useRef();
  const refColorPickerBox: any = useRef();
  const [cCircleSelect, setCCircleSelect] = useState([50, 50]);
  let widthBox: number = 0;
  let heightBox: number = 0;
  let isMousedown: boolean = false;

  useEffect(() => {
    // Event mouse down for circle selected
    refCircleSelect.current.addEventListener('mousedown', function () {
      isMousedown = true;
    });

    // Event mouse up for circle selected
    refCircleSelect.current.addEventListener('mouseup', function () {
      if (isMousedown) isMousedown = false;
    });

    // Event mouse move
    refColorPickerBox.current.addEventListener(
      'mousemove',
      handleMoveCircleSelect
    );

    // Event mouse leave
    refColorPickerBox.current.addEventListener('mouseleave', () => {
      document.addEventListener('mouseup', () => {
        if (isMousedown) isMousedown = false;
      });
    });

    refColorPickerBox.current.addEventListener('click', (e: any) =>
      handleMoveCircleSelect(e, true)
    );
  }, []);

  useEffect(() => {
    /**
     * set value HSL
     */
    let { s, l }: { s: number; l: number } = props;
    widthBox = refColorPickerBox.current.width.baseVal.value;
    heightBox = refColorPickerBox.current.height.baseVal.value;

    // Calculating y value
    const percentY = 100 - (l / (100 - s / 2)) * 100;
    let y = (heightBox / 100) * percentY + 14;

    // Calculating x value
    let x = (widthBox / 100) * s + 14;

    setCCircleSelect([x, y]); // set position of circle select
  }, [props.h, props.s, props.l]);

  function handleMoveCircleSelect(e: any, isClick = false) {
    // Get offset of mouse event
    if (isMousedown || isClick) {
      const _offset = [e.offsetX, e.offsetY];
      const SPercent: number = Math.round(((_offset[0] - 15) / widthBox) * 100);

      // Calculating the X and Y Percent Values
      const percentX = 100 - SPercent / 2;
      const percentY = 100 - ((_offset[1] - 15) / heightBox) * 100;

      // Calculating the LPercent
      // LPercent is the the X percentage of the of the Y percentage of the dragger
      const LPercent: number = Math.floor((percentY / 100) * percentX);

      // setCCircleSelect(_offset);
      props.change(SPercent, LPercent);
    }
  }

  return (
    <StyleColorPicker.WColorPickerTemplate>
      <svg width='100%' height='120'>
        <defs>
          <linearGradient id='saturation' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#fff'></stop>
            <stop offset='100%' stopColor={`hsl(${props.h},100%,50%)`}></stop>
          </linearGradient>
          <linearGradient id='brightness' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop offset='0%' stopColor='rgba(0,0,0,0)'></stop>
            <stop offset='100%' stopColor='#000'></stop>
          </linearGradient>
          <pattern id='pattern_config' width='100%' height='100%'>
            <rect
              x='0'
              y='0'
              width='100%'
              height='100%'
              fill='url(#saturation)'
            ></rect>
            <rect
              x='0'
              y='0'
              width='100%'
              height='100%'
              fill='url(#brightness)'
            ></rect>
          </pattern>
        </defs>
        <rect
          ref={refColorPickerBox}
          rx='5'
          ry='5'
          x='1'
          y='1'
          width='100%'
          height='100%'
          stroke='#fff'
          strokeWidth='2'
          fill='url(#pattern_config)'
        ></rect>
        <circle
          ref={refCircleSelect}
          cx={cCircleSelect[0]}
          cy={cCircleSelect[1]}
          r='5'
          stroke='white'
          strokeWidth='2'
          fill='transparent'
        />
      </svg>
    </StyleColorPicker.WColorPickerTemplate>
  );
});

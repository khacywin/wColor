import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Selector from './Selector';
import _key from './util/_key';

const MainWrap = styled.div`
  display: block;
`;

interface PropsMainValue {
  color?: string;
  height?: number;
  width?: number;
}
const MainValue = styled.div<PropsMainValue>`
  cursor: pointer;
  border-radius: 5px;
  ${(props) => `
    width: ${props.width}px;
    height: ${props.height}px;
    background-color: ${props.color};
  `}
`;

interface PropsMainSelector {
  show: boolean;
}
const MainSelector = styled.div<PropsMainSelector>`
  position: absolute;
  transform: translate(0, 5px);
  display: ${(props) => (props.show ? 'initial' : 'none')};
  z-index: 9999;
`;

interface Props {
  onChange?: (value: string) => void;
  defaultValue?: string;
  width?: number;
  height?: number;
}
export default React.memo((props: Props) => {
  const [value, setValue] = useState(props.defaultValue || '#d1d5d1');
  const [show, setShow] = useState(false);
  const refMenu: any = useRef();

  /**
   */
  function hiddenDropdownWhenClick() {
    setShow(false);
    document.removeEventListener('dblclick', handleClick);
  }

  /**
   * @param e
   */
  function handleClick(e: any) {
    let target = e.target;
    let path = e.path;
    let show = false;

    path.forEach((item: any) => {
      refMenu.current.childNodes.forEach((node: any) => {
        if (node === item) show = true;
      });
    });

    if (!show) hiddenDropdownWhenClick();
  }

  useEffect(() => {
    /**
     * TODO
     * Hidden menu when you click in out of menu
     */
    if (show) {
      document.addEventListener('dblclick', handleClick);
    }
  });

  return (
    <MainWrap>
      <input
        type='hidden'
        value={value}
        onChange={(e: any) => props.onChange(e.target.value)}
      />
      <MainValue
        color={value}
        height={props.height || 30}
        width={props.width || 30}
        onClick={() => setShow(!show)}
      />
      <MainSelector ref={refMenu} show={show}>
        <Selector fnSelected={(color: string) => setValue(color)} />
      </MainSelector>
    </MainWrap>
  );
});

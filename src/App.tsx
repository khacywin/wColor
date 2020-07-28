import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import _key from './util/_key';
import _t from './util/_t';
import Selector from './Selector';

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
  transition: all 0.1s linear;
  z-index: ${(props) => (props.show ? '999' : '-1')};
  opacity: ${(props) => (props.show ? '1' : '0')};
  transform: ${(props) => props.show ? `translate(0, 5px)` : `translate(0, -5px)`};
`;

interface Props {
  onChange: (value: string) => void;
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
    document.removeEventListener('click', handleClick);
  }

  /**
   * @param e
   */
  function handleClick(e: any) {
    let path = e.path;
    let show = false;
    
    path.forEach((item: any) => {
      if (refMenu.current.childNodes) {
        refMenu.current.childNodes.forEach((node: any) => {
          if (node === item) show = true;
        });
      }
    });

    if (!show) hiddenDropdownWhenClick();
  }

  useEffect(() => {
    /**
     * TODO
     * Hidden menu when you click in out of menu
     */
    if (show) {
      document.addEventListener('click', handleClick);
    }
  });

  function handleChange(color: string) {
    setValue(color);
    props.onChange(color);
  }

  return (
    <MainWrap>
      <MainValue
        color={value}
        height={props.height || 30}
        width={props.width || 30}
        onClick={() => setShow(!show)}
      />
      <MainSelector ref={refMenu} show={show}>
        <Selector fnSelected={handleChange} />
      </MainSelector>
    </MainWrap>
  );
});

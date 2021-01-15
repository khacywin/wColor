import React, { useState, useEffect, useRef, useMemo, RefObject } from "react";
import styled from "styled-components";
import _key from "./util/_key";
import _t from "./util/_t";
import Selector from "./Selector";

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
  transform: translate(0, -5px);
  z-index: -1;
  opacity: 0;

  ${({ show }) =>
    show &&
    `
    transform: translate(0, 5px);
    z-index: 999;
    opacity: 1;
  `};
`;

interface Props {
  onChange: (value: string) => void;
  defaultValue?: string;
  width?: number;
  height?: number;
}
function App(props: Props) {
  const [value, setValue] = useState(props.defaultValue || "#d1d5d1");
  const [show, setShow] = useState(false);
  const refMenu = useRef<HTMLDivElement>();
  const posScreen = useMemo(
    () => ({
      x: 0,
      y: 0,
      height: window.innerHeight,
      width: window.innerWidth,
    }),
    []
  );

  useEffect(() => {
    const posElement = refMenu.current.getBoundingClientRect();

    let transform = [];

    if (posElement.x < 0) {
      transform.push("translateX(100%)");
    } else if (posElement.right > posScreen.width - 10) {
      transform.push("translateX(-100%)");
    }

    if (posElement.top < 0) {
      transform.push("translateY(100%)");
    } else if (posElement.bottom > posScreen.height) {
      transform.push(`translateY(calc(-100% - ${props.height || 30}px))`);
    }

    refMenu.current.style.transform = transform.join(" ");

    return () => {};
  }, [refMenu.current, props.height]);

  /**
   */
  function hiddenDropdownWhenClick() {
    setShow(false);
    document.removeEventListener("click", handleClick);
  }

  /**
   * @param e
   */
  function handleClick(e: any) {
    let { path } = e;
    let show = false;

    path &&
      path.forEach((item: any) => {
        if (refMenu?.current?.childNodes) {
          refMenu?.current?.childNodes.forEach((node: any) => {
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
      document.addEventListener("click", handleClick);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [show]);

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
}

export default App;

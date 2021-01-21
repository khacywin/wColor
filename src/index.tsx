import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
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
  z-index: -1;
  visibility: hidden;

  ${({ show }) =>
    show &&
    `
    z-index: 999;
  `};
`;

interface Props {
  onChange: (value: string) => void;
  defaultValue?: string;
  width?: number;
  height?: number;
}
function App(props: Props) {
  const [value, setValue] = useState("#54478c");
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

  /**
   * @param e
   */
  const handleClick = useCallback(
    (e: any) => {
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
    },
    [refMenu?.current]
  );

  /**
   */
  const hiddenDropdownWhenClick = useCallback(() => {
    setShow(false);
    document.removeEventListener("click", handleClick);
  }, [handleClick]);

  const handleChange = useCallback(
    (color: string) => {
      setValue(color);
      props.onChange(color);
    },
    [props.onChange]
  );

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

  useEffect(() => {
    if (refMenu?.current?.clientHeight > 0) {
      const posElement = refMenu.current.getBoundingClientRect();
      let transform = [];
      let transformOriginY = "left";
      let transformOriginX = "top";

      if (posElement.x < 0) {
        transform.push("translateX(100%)");
        transformOriginY = "top";
      } else if (posElement.right > posScreen.width - 10) {
        transform.push("translateX(-100%)");
        transformOriginY = "bottom";
      }

      if (posElement.top < 0) {
        transform.push(`translateY(calc(100% + ${props.height || 35})`);
        transformOriginX = "left";
      } else if (posElement.bottom > posScreen.height) {
        transform.push(`translateY(calc(-100% - ${props.height || 35}px))`);
        transformOriginX = "right";
      }

      refMenu.current.style.transform = transform.join(" ");
      refMenu.current.style.visibility = "visible";
      refMenu.current.style.transformOrigin = `${transformOriginX} ${transformOriginY}`;
    }
  }, [refMenu?.current?.clientHeight, props.height]);

  useEffect(() => {
    props.defaultValue && setValue(props.defaultValue);
  }, [props.defaultValue]);

  return (
    <MainWrap>
      <MainValue
        color={value}
        height={props.height || 30}
        width={props.width || 30}
        onClick={() => setShow(!show)}
      />
      {show && (
        <MainSelector ref={refMenu} show={true}>
          <Selector fnSelected={handleChange} select={value} />
        </MainSelector>
      )}
    </MainWrap>
  );
}

export default App;

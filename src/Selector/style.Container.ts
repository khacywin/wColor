import styled, { css, keyframes } from 'styled-components';

const WColorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

interface PropsStyled {
  color: string;
  active?: boolean;
}
const KeyframesActive = keyframes`
  0%{
    transform: scale(.6);
  }
  20%{
    transform: scale(.8);
  }
  100%{
    transform: scale(1);
  }
`;
const CSSActive = css`
  &::before{
    animation: ${KeyframesActive} 0.3s linear both;
  }
`;

const KeyframesItem = keyframes`
  0%{
    transform: scale(.2);
  }
  70%{
    transform: scale(.9);
  }
  100%{
    transform: scale(.8);
  }
`;

const WColorItemWrap = styled.div`
  position: relative;
  width: 1.4em;
  height: 1.4em;
  margin: .3em;
  box-sizing: border-box;

  &:hover button{
    display: initial;
  }
  button{
    position: absolute;
    display: none;
    z-index: 100;
    top: 0;
    right: 1px;
    width: 10px;
    height: 10px;
    padding: 0;
    background-color: #fff;
    border: none;
    border-radius: 50%;
    cursor: pointer;

    &:focus{
      outline: 0;
    }


    img{
      transform: translate(0, -2px) scale(.9);
    }
  }

`;
const WColorItem = styled.div<PropsStyled>`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 0.4em;
  background-color: inherit;

  &::before{
    position: absolute;
    content: '';
    border-radius: 0.2em;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    transform: scale(0.8);
    transition: all 0.2s linear;
    background-color: ${props => props.color};
    z-index: 10;
    animation: ${KeyframesItem} 0.2s linear;
  }

  &:hover{
    &::before{
      transform: scale(0.9);
    }
  }
  
  ${
  props => props.active && CSSActive
  }
`;

export {
  WColorContainer,
  WColorItemWrap,
  WColorItem
}
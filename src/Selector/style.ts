import styled, { css, keyframes } from 'styled-components';

interface PropsTheme {
  light?: boolean;
  dark?: boolean;
}
const WColor = styled.div<PropsTheme>`
  box-sizing: border-box;
  border-radius: .5em;
  width: 15em;
  padding: .5em;
  ${props => props.dark ? `
    background-color: #1a1a1a;
    color: #fff;
  ` : `
    background-color: #fff;
    color: inherit;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.12);
  `}
`;

const WColorHeading = styled.div`
  font-size: .8em;
  text-indent: .3em;
`;

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

const WColorAdd = styled.label`
  display: block;
  width: 1.4em;
  height: 1.4em;
  padding: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;

  &::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.1;
    transform: scale(0);
    transition: transform 0.2s ease-in;
    top: 0;
    left: 0;
    border-radius: 50%;
  }

  &:hover{
    &::before{
      transform: scale(0.8);
    }
  }

  &:focus{
    outline: 0;
  }

  img{
    margin: 15%;
    width: 70%;
    height: 70%;
  }
`;

export {
  WColor,
  WColorContainer,
  WColorHeading,
  WColorItemWrap,
  WColorItem,
  WColorAdd
}
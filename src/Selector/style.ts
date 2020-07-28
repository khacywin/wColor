import styled from 'styled-components';

interface PropsTheme {
  light?: boolean;
  dark?: boolean;
}
const WColor = styled.div<PropsTheme>`
  position: relative;
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
  position: relative;
  margin-bottom: 3px;
`;

const WColorAdd = styled.button`
  display: block;
  width: 1.4em;
  height: 1.4em;
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 0;
  box-sizing: border-box;

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
      transform: scale(1);
    }
  }

  &:focus{
    outline: 0;
  }

  img{
    margin: 20%;
    width: 60%;
    height: 60%;
  }
`;

export {
  WColor,
  WColorHeading,
  WColorAdd
}
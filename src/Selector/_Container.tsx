import React from 'react';
import * as StyleContainer from './style.Container';
import _key from './../util/_key';
import icon_close from './../icons/close.svg';

interface Props {
  colour: string[];
  select: string;
  fnSelected: (value: string) => void;
  fnRemove: (value: string) => void;
}
export default React.memo((props: Props) => {
  const _keyWColor = _key();

  return (
    <StyleContainer.WColorContainer>
      {props.colour.map((color: string, key: any) => (
        <StyleContainer.WColorItemWrap key={`${_keyWColor}-${key}`}>
          <StyleContainer.WColorItem
            color={color}
            active={color === props.select}
            onClick={() => props.fnSelected(color)}
            onDoubleClick={() => props.fnRemove(color)}
          />
          {key > 9 && (
            <button onClick={() => props.fnRemove(color)} type='button'>
              <img src={icon_close} alt='w-color' />
            </button>
          )}
        </StyleContainer.WColorItemWrap>
      ))}
    </StyleContainer.WColorContainer>
  );
});

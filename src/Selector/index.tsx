import React, { useState, useEffect } from 'react';
import _t from './../_t';
import {
  WColor,
  WColorContainer,
  WColorHeading,
  WColorItemWrap,
  WColorItem,
  WColorAdd,
} from './style';
import icon_add from './../icons/add.svg';
import icon_close from './../icons/close.svg';
import _key from './../_key';
import _Add from './_Add';

interface Props {
  select?: string;
  dark?: boolean;
  fnSelected: (color: string) => void;
}
export default React.memo((props: Props) => {
  const _keyWColor = _key();
  const [value, setValue] = useState(props.select || '#54478c');
  const [colour, setColour] = useState<any[]>([]);
  const template = [
    '#54478c',
    '#2c699a',
    '#048ba8',
    '#0db39e',
    '#16db93',
    '#83e377',
    '#b9e769',
    '#efea5a',
    '#f1c453',
    '#f29e4c',
  ];

  useEffect(() => {
    let _colour = [];
    if (localStorage.getItem('colour')) {
      _colour = _colour.concat(localStorage.getItem('colour').split(','));
    }
    setColour(_colour);
  }, []);

  useEffect(() => {
    props.fnSelected(value);
  }, [value]);

  function addToLocalStorage(color: string) {
    if (localStorage.getItem('colour')) {
      let _colour = localStorage.getItem('colour');
      localStorage.setItem('colour', _colour.concat(',', color));
    } else {
      localStorage.setItem('colour', color);
    }
  }

  function addColour(color: string) {
    let _colour: any[] = [...colour, color];
    setColour(_colour);
    addToLocalStorage(color);
  }

  function removeInLocalStorage(color: string) {
    let _colour = localStorage.getItem('colour');
    _colour = _colour.replace(color, '').replace(/(,,)/, ',');
    _colour = _colour[0] === ',' ? _colour.slice(1, _colour.length) : _colour;
    _colour =
      _colour[_colour.length - 1] === ','
        ? _colour.slice(0, _colour.length - 1)
        : _colour;

    localStorage.setItem('colour', _colour);
  }

  function removeColour(color: string) {
    let _colour: string[] = [...colour].filter(
      (item: string) => item !== color
    );
    setColour(_colour);
    setValue('#54478c');
    removeInLocalStorage(color);
  }

  return (
    <WColor dark={!!props.dark}>
      <WColorHeading>{_t('Recent')}</WColorHeading>
      <WColorContainer>
        {template.map((color: string, key: any) => (
          <WColorItemWrap key={`${_keyWColor}-template-${key}`}>
            <WColorItem
              aria-label={_t('Add')}
              color={color}
              active={color === value}
              onClick={() => setValue(color)}
              onDoubleClick={() => removeColour(color)}
            />
          </WColorItemWrap>
        ))}
        {colour.map((color: string, key: any) => (
          <WColorItemWrap key={`${_keyWColor}-${key}`}>
            <WColorItem
              aria-label={_t('Add')}
              color={color}
              active={color === value}
              onClick={() => setValue(color)}
              onDoubleClick={() => removeColour(color)}
            />
            <button onClick={() => removeColour(color)} type='button'>
              <img src={icon_close} alt='w-color' />
            </button>
          </WColorItemWrap>
        ))}
        <WColorAdd htmlFor={`id-${_keyWColor}-add`}>
          <img src={icon_add} alt='w-color' />
        </WColorAdd>
        <_Add id={`id-${_keyWColor}-add`} fnAdd={addColour} />
      </WColorContainer>
    </WColor>
  );
});

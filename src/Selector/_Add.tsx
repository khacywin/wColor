import React from 'react';
import styled from 'styled-components';

const AddWrap = styled.div`
  background-color: inherit;

  input{
    height: 0;
    width: 0;
    padding: 0;
    border: 0;
    opacity: 0;
  }
`;

interface Props {
  id: string;
  fnAdd: (color: string) => void;
}
export default React.memo((props: Props) => {
  return (
    <AddWrap>
      <input type='color' id={props.id} onBlur={(e: any) => props.fnAdd(e.target.value)}/>
    </AddWrap>
  );
});

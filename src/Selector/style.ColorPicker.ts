import styled from 'styled-components';

const WColorPicker = styled.div`
  margin: 0 0 0.4em 0;
  border-bottom: 1px solid #e9e9e9;
  *{
    will-change: all;
  }
`;

const WColorPickerTemplate = styled.div``;

const WColorPickerBar = styled.div`
  margin-top: .5em;
`;

const WColorPickerControl = styled.div`
  padding: 0.3em 0;
  display: flex;
  align-items: center;

  & > label{
    flex: 0 0 40px;
    text-align: center;
    opacity: 0.6;
    font-size: 0.8em;
  }

  & > input {
    width: calc(100% - 60px);
    padding: 3px;
    border: none;
    border-bottom:1px solid #e9e9e9;

    &:focus{
      outline: 0;
    }
  }
`;

type PropPickerControlValue = {
  color: string;
}
const WColorPickerControlValue = styled.div.attrs(props => ({
  style: {
    background: props.color,
  },
}))<PropPickerControlValue>`
  flex: 0 0 20px;
  height: 20px;
  border-radius: 50%;
`;

export {
  WColorPicker,
  WColorPickerTemplate,
  WColorPickerBar,
  WColorPickerControl,
  WColorPickerControlValue,
}
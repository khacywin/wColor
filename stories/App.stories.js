import React from 'react';
import styled from 'styled-components';
import App from './../src';

const Wrap = styled.div`
  margin-top: 80vh;
  margin-left: 80vw;
`;

export default {
  title: 'App',
};

export const AppComponent = () => (
  <Wrap>
    <App onChange={(val) => console.log(val)} defaultValue='#123456'/>
  </Wrap>
);

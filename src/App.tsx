/* eslint-disable no-alert */
import React from "react";
import styled, { css } from "styled-components";
import Block from "./components/Block/Block";
import Button from "./components/Button/Button";
import Flex from "./components/Flex/Flex";
import Title from "./components/Title/Title";

function App() {
  return (
    <Flex
      justify="center"
      direction="row"
      padding="50px 20px"
      width="auto"
      background="green"
      margin=" 0 25px"
    >
      <Block title="lol" />
      <Block title="sas" />
      <Block title="sds" />
      <Block title="asa" />
    </Flex>
  );
}

export default App;

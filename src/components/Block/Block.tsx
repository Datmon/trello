import React from "react";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
import Title from "../Title/Title";

interface Props {
  title?: any;
}

const Block = ({ title }: Props) => {
  return (
    <Flex block>
      <Title blockHead>{title}</Title>
      <Button blockString>Hey</Button>
    </Flex>
  );
};

export default Block;

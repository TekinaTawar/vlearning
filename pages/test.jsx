import styled from "styled-components";
import Input from "../components/Input/Input";
import { useState } from "react";

const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
`;

const test = () => {
  const [giftCard, setGiftCard] = useState("");
  const [name, setName] = useState("");
  return (
    <Container>
      <Input name="Gift Card" value={giftCard} setValue={setGiftCard} />
      <Input name="name" value={name} setValue={setName}/>
    </Container>
  );
};

test.getLayout = (page) => page;

export default test;

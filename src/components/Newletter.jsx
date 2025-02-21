import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-style: 70px;
`;
const Description = styled.div`
  font-style: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get in touch with us</Description>
      <InputContainer>
        <Input placeholder="Enter your Email" />
        <Button>
          <SendOutlinedIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newletter;

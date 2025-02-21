import React from "react";
import styled from "styled-components"
import loginbanner from '../assets/login-bg.avif';

const Container = styled.div`
     width: 100vw;
     height: 91vh;
     background-color: rgba(0,0,0,0.1);
     background: linear-gradient(
        rgba(0,0,0,0.2),
        rgba(0,0,0,0.2)
        ),
      url(${loginbanner}),
      center;
      background-size: cover;
      display:  flex !important;
      align-items: center;
      justify-content: center;
`;
const Wrapper = styled.div`
background-color: rgba(0,0,0,0.1);
     width: 25%;
     padding: 20px;
     /* background-color: white; */
`;
const Form = styled.form`
       display: flex;
       flex-direction: column;
`;

const Title = styled.h1`
      font-size: 24px;
      font-weight: 300; 
`;
const Input = styled.input`
       flex: 1;
       min-width: 40%;
       margin: 10px 0;
       padding: 10px;
`;


const Button = styled.button`
      width: 40%;
      border: none;
      padding: 15px 20px;
      background-color: teal;
      color: white;
      cursor: pointer;
      margin-bottom: 10px;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login   = () => {
  return (
    <Container> 
    <Wrapper>
      <Title>SIGN IN</Title>   
      <Form>
         <Input placeholder="username"/>
         <Input placeholder="password"/>
         <Button>LOGIN</Button>
         <Link>DO NOT REMEMBER YOUR PASSWORD?</Link>
         <Link>CREATE A NEW ACCOUNT</Link>
      </Form>
    </Wrapper>
   </Container>
  )
}

export default  Login 
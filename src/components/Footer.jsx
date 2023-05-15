import React from "react";
import styled from "styled-components";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Description, } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Description>
          Sneaker websites are online platforms that specialize in selling
          athletic shoes, particularly sneakers, from popular brands like Nike,
          Adidas, and Puma. These websites offer customers a vast collection of
          sneakers with comprehensive information on each product, including
          materials, sizes, and colors. They may also feature reviews, ratings,
          blogs, and news sections to keep customers updated on the latest
          trends and releases. Sneaker websites provide a convenient way for
          sneaker enthusiasts to purchase footwear from the comfort of their
          homes.
        </Description>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;

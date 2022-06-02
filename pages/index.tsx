import styled from "styled-components";
import type { NextPage } from "next";
import { Button, Paper } from "@mui/material";

const BackgroundImg = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url("./images/background-image.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Menu = styled.div`
  height: 60vh;
  width: 40vw;
  border-radius: 24px;
  background-color: red;
`;

const Home: NextPage = () => {
  return (
    <BackgroundImg>
      <Menu></Menu>
    </BackgroundImg>
  );
};

export default Home;

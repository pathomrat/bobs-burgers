import styled from "styled-components";
import type { NextPage } from "next";

const BackgroundImg = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url("./images/background-image.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 100%;
`;

const Home: NextPage = () => {
  return <BackgroundImg>test</BackgroundImg>;
};

export default Home;

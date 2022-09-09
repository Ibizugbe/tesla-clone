import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <MainSection>
      <Section />
      <Section />
      <Section />
      <Section />
    </MainSection>
  );
}

export default Home;

const MainSection = styled.main`
  height: 100vh;
`;

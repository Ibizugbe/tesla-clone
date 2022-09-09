import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <SectionWrap>
      <Container>
        <h1>hello</h1>
      </Container>
    </SectionWrap>
  );
}

export default Section;

const SectionWrap = styled.section``;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: orange;
`;

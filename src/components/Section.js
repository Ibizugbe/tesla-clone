import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <SectionWrap>
      <TextContainer>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </TextContainer>
      <ButtonGroup>
        <LeftButton>Custon Order</LeftButton>
        <RightButton>Existing Inventory</RightButton>
      </ButtonGroup>
    </SectionWrap>
  );
}

export default Section;

const SectionWrap = styled.section`
  height: 100vh;
  width: 100%;
  background-image: url("/assets/model-s.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;

const LeftButton = styled.button`
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  height: 40px;
  width: 256px;
  border: 0;
  cursor: pointer;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
`;

const RightButton = styled(LeftButton)``;

import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <SectionWrap>
      <TextContainer>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </TextContainer>
      <ButtonContainer>
        <ButtonGroup>
          <Button>
            <LeftButton>Custon Order</LeftButton>
          </Button>
          <Button>
            <RightButton>Existing Inventory</RightButton>
          </Button>
        </ButtonGroup>
        <DownArrow src="./assets/down-arrow.svg" />
      </ButtonContainer>
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
  margin-bottom: 30px;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
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
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
`;

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

function Section(props) {
  const {
    title, description, backgroundImg, leftBtnText, rightBtnText,
  } = props;
  return (
    <SectionWrap bgImage={backgroundImg}>
      <TextContainer>
        <Fade bottom>
          <h1>{title}</h1>
          <p>{description}</p>
        </Fade>
      </TextContainer>
      <ButtonContainer>
        <Fade bottom big>
          <ButtonGroup>
            <Button>
              <LeftButton>{leftBtnText}</LeftButton>
            </Button>
            <Button>
              {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
            </Button>
          </ButtonGroup>
        </Fade>
        <DownArrow src="./assets/down-arrow.svg" />
      </ButtonContainer>
    </SectionWrap>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rightBtnText: PropTypes.string.isRequired,
  leftBtnText: PropTypes.string.isRequired,
  backgroundImg: PropTypes.node.isRequired,
};

const SectionWrap = styled.section`
  height: 100vh;
  width: 100%;
  background-image: ${(props) => `url("/assets/${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const TextContainer = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
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

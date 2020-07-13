import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

function slideIn(pixels) {
  const slide = keyframes`
      0% {
        width: 150%;
        transform: translate(${pixels}px);
      }
  
      90% { 
        transform: translate(0,0)
  
      }
  
      100% {
        width: 100%;
      }
    `;
  return slide;
}

const Highlight = styled.div`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "red"};
  height: 100%;
  width: 100%;
  border-radius: 100%;
  position: absolute;
  animation: ${(props) => slideIn(props.highlightStart)} 0.1s ease;
`;

const ActiveButtonHighlight = ({ backgroundColor, highlightStart }) => {
  return (
    <>
      <Highlight
        backgroundColor={backgroundColor}
        highlightStart={highlightStart}
      ></Highlight>
    </>
  );
};

export default ActiveButtonHighlight;

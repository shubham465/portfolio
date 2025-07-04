import React from 'react';
import styled from 'styled-components';

const Logo = () => {
  return (
    <StyledWrapper>
      <div className="pyramid-loader">
        <div className="wrapper">
          <span className="side side1" />
          <span className="side side2" />
          <span className="side side3" />
          <span className="side side4" />
          <span className="shadow" />
        </div>  
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .pyramid-loader {
    position: relative;
    width: 40px;
    height: 40px;
    display: block;
    transform-style: preserve-3d;
    transform: rotateX(-20deg);
  }

  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: spin 4s linear infinite;
    transform-origin: 50% 50%;
  }

  @keyframes spin {
    100% {
      transform: rotateY(360deg);
    }
  }

  .pyramid-loader .wrapper .side {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform-origin: center top;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }

  .pyramid-loader .wrapper .side1 {
    transform: rotateZ(-30deg) rotateY(90deg);
    background: conic-gradient( #2BDEAC, #F028FD, #D8CCE6, #2F2585);
  }

  .pyramid-loader .wrapper .side2 {
    transform: rotateZ(30deg) rotateY(90deg);
    background: conic-gradient( #2F2585, #D8CCE6, #F028FD, #2BDEAC);
  }

  .pyramid-loader .wrapper .side3 {
    transform: rotateX(30deg);
    background: conic-gradient( #2F2585, #D8CCE6, #F028FD, #2BDEAC);
  }

  .pyramid-loader .wrapper .side4 {
    transform: rotateX(-30deg);
    background: conic-gradient( #2BDEAC, #F028FD, #D8CCE6, #2F2585);
  }

  .pyramid-loader .wrapper .shadow {
    width: 40px;
    height: 40px;
    background: #8B5AD5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform: rotateX(90deg) translateZ(-20px);
    filter: blur(8px);
  }`;

export default Logo;

import React from "react";
import styled from "styled-components";

export const GlowingBorder = styled.div`
  background: linear-gradient(
    135deg,
    rgba(0, 255, 200, 0.5),
    rgba(0, 112, 255, 0.5),
    white
  );
  padding: 2px;
  border-radius: 1rem;
  animation: glow 5s linear infinite;
  background-size: 400% 400%;

  @keyframes glow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const GlassCard = styled.div`
  /* background: rgba(255, 255, 255); */
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  width: 100%;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.03);
  }
`;

export const ButtonStyled = styled.button`
  background: linear-gradient(90deg, #00ffc3, #007fff);
  /* color: black; */
  font-weight: bold;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: all 0.8s ease;
  &:hover {
    background: linear-gradient(90deg, #007fff, #00ffc3);
    transform: scale(1.05);
    box-shadow: 0 0 20px #00ffc3;
  }
`;

export const AnimatedUnderline = styled.div`
  width: 0%;
  height: 2px;
  background: var(--sec-bg-color);
  transition: width 0.5s ease;

  .group:hover & {
    width: 100%;
  }
`


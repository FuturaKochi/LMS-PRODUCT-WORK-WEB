import React from 'react'
import { styled,keyframes } from 'styled-components'
//loading ...........

const rotateLoader = keyframes`
  0%, 30% {
    transform: rotate(0);
  }
  70% {
    transform: rotate(120deg);
  }
  70.01%, 100% {
    transform: rotate(360deg);
  }
`;

const rotateBeforeAfter = keyframes`
  0% {
    transform: rotate(calc(var(--s, 1) * 120deg)) translate(0);
  }
  30%, 70% {
    transform: rotate(calc(var(--s, 1) * 120deg)) translate(calc(var(--s, 1) * -5px), 10px);
  }
  100% {
    transform: rotate(calc(var(--s, 1) * 120deg)) translate(0);
  }
`;

const Loader = styled.div`
  width: 50px;
  aspect-ratio: 1.154;
  position: absolute;
  top: 50vh;
  left: 50%;
  background: conic-gradient(
    from 120deg at 50% 64%,
    #0000,
    #411B66 1deg 120deg,
    #0000 121deg
  );
  animation: ${rotateLoader} 1.5s infinite cubic-bezier(0.3, 1, 0, 1);

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: inherit;
    transform-origin: 50% 66%;
    animation: ${rotateBeforeAfter} 1.5s infinite;
  }

  &::after {
    --s: -1;
  }
`; 

const Loading = () => {
  return (
   <Loader/>
  )
}

export default Loading
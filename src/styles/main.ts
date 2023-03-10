import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';

export const Container = tw.div`
  flex
  min-h-screen
  flex-col
  items-center
  justify-center
  py-2
  bg-gray-100
  w-full
  h-full
  p-3
`;

export const Main = styled.main`
  ${tw`
    flex
    w-full
    flex-1
    flex-col
    items-center
    justify-center
    p-10
    text-center
    max-w-screen-md
    h-fit
    [border-radius: 20px]
    shadow-lg
    bg-amber-600
    md:[max-height: 40vh]
    md:[flex-direction: row]
    sm:[flex-direction: column]
  `}
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  5% {
    transform: rotate(3deg);
  }
  10% {
    transform: rotate(6deg);
  }
  15% {
    transform: rotate(9deg);
  }
  20% {
    transform: rotate(12deg);
  }
  25% {
    transform: rotate(15deg);
  }
  30% {
    transform: rotate(18deg);
  }
  35% {
    transform: rotate(21deg);
  }
  40% {
    transform: rotate(24deg);
  }
  45% {
    transform: rotate(27deg);
  }
  50% {
    transform: rotate(30deg);
  }
  55% {
    transform: rotate(27deg);
  }
  60% {
    transform: rotate(24deg);
  }
  65% {
    transform: rotate(21deg);
  }
  70% {
    transform: rotate(18deg);
  }
  75% {
    transform: rotate(15deg);
  }
  80% {
    transform: rotate(12deg);
  }
  85% {
    transform: rotate(9deg);
  }
  90% {
    transform: rotate(6deg);
  }
  95% {
    transform: rotate(3deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;



export const MugContainer = styled.div`
  ${tw`
    flex-1
    [display: inline]
  `}
  rotate: -15deg;
  animation-name: ${rotateAnimation};
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  animation-iteration-count: infinite;
`

export const DetailContainer = styled.div`
  ${tw`
    flex-1
    [display: flex]
    [flex-direction: column]
    text-white
    [text-align: left]
  `}
`

export const Title = styled.h1`
  ${tw`
    text-3xl
    font-bold
    text-black
  `}
`;

export const TitleBrand = tw.a`
  text-white
`;

export const Description = tw.p`
  mt-3
  text-3xl
  [display: flex]
  [width: 100%]
`;

export const DescriptionHeader = styled.div`
  ${tw`
    flex-1
    flex-row
    justify-between
    items-center
    mb-4
  `}
`

export const DescriptionBody = styled.div`
  ${tw`
    flex-1
    flex-row
    justify-between
    items-center
    font-light
    [font-size: 0.9rem]
  `}
`

export const Details = styled.span`
  ${tw`
    ml-2
    font-bold
  `}
`

export const ControlContainer = styled.div`
  ${tw`
    flex
    w-full
    md:flex-col
    sm:flex-row
    items-center
    justify-between
    p-5
    text-center
    max-w-screen-md
    [border-radius: 20px]
    md:[max-height: 40vh]
    md:[flex-direction: row]
    sm:[flex-direction: column]
  `}
`

export const ControlButton = styled.button`
  ${tw`
    p-3
    [border-radius: 10px]
    [border: 1px solid]
    border-amber-600
    text-white
    bg-amber-600
    hover:border-amber-600
    hover:bg-gray-900
    hover:text-white
    disabled:bg-gray-300
    disabled:text-white
    disabled:[border-color: #fff]
  `}
`
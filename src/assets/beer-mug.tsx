import React, { useEffect, useState } from 'react';

interface Props {
  size: number;
  blg: number;
  ibu: number;
  alcohol: number;
}

const BeerMug = (props: Props) => {
  const [beerColor, setBeerColor] = useState<string>('#ffd30d');
  const [bubbleColor, setBubbleColor] = useState<string>('#ffdf93');
  const [beerBubbleColor, setBeerBubbleColor] = useState<string>('#ffffff');

  useEffect(() => {
    switch (true) {
      case props.blg > 15:
        setBeerColor('#a16207');
        break;
      case props.blg > 10:
        setBeerColor('#eab308');
        break;
      case props.blg > 5:
        setBeerColor('#fef08a');
        break;
      default:
        setBeerColor('#fef3c7');
        break;
    }

    switch (true) {
      case props.ibu > 50:
        setBubbleColor('#ca8d00');
        break;
      case props.ibu > 30:
        setBubbleColor('#ffb300');
        break;
      case props.ibu > 10:
        setBubbleColor('#f5cd70');
        break;
      default:
        setBubbleColor('#fffff');
        break;
    }

    switch (true) {
      case props.alcohol > 7:
        setBeerBubbleColor('#e1fcff');
        break;
      default:
        setBeerBubbleColor('#ffffff');
        break;
    }
    
  }, [props.blg, props.ibu, props.alcohol])
  return (
    <svg
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
    >
      <g fill={beerBubbleColor}>
        <path d="M16.1 12.5h26v14.1h-26z"></path>

        <path
          d="M46.1 24.1s4.1-2 9.8-1.3c-5.6-2.6-9.8-.6-9.8-.6v1.9"
          opacity=".8"
        ></path>

        <path
          d="M46.1 45.5s3.8.1 7.7-2.7c-2.6 4.8-7.7 4.7-7.7 4.7v-2"
          opacity=".8"
        ></path>
      </g>

      <path
        d="M59.7 22.6c-.8-5-11.4-3.1-13.6-2.7v-11H12v49c0 5.4 34.1 5.4 34.1 0v-8.6c6.4-.2 11.4-5.8 12.8-11.2c1-3.8 1.5-11.5.8-15.5m-16 31.5c0 4.4-29.3 4.4-29.3 0V12h29.3v42.1m10.8-16c-.8 3.3-4.1 6.2-8.3 6.3V24.7c1.7-.4 9-2 9.5 1.2c.4 3.5-.4 8.8-1.2 12.2"
        opacity=".8"
        fill="#a1b8c7"
      ></path>

      <path
        d="M42.1 26.6h-26v26.2c0 3.9 26 3.9 26 0V26.6"
        fill={beerColor}
      ></path>

      <g fill="#d8d2b8">
        <path d="M43.7 8.7c0 2.5-3.1 4.6-7 4.6s-7-2.1-7-4.6c0-2.6 3.1-4.6 7-4.6s7 2.1 7 4.6"></path>

        <path d="M48.8 10.7c0 2.1-2.1 3.9-4.6 3.9c-2.5 0-4.6-1.7-4.6-3.9c0-2.1 2.1-3.9 4.6-3.9c2.5.1 4.6 1.8 4.6 3.9"></path>

        <path d="M15.4 23.4c0 2.1-1.9 3.8-4.3 3.8s-4.3-1.7-4.3-3.8c0-2.1 1.9-3.8 4.3-3.8c2.3 0 4.3 1.7 4.3 3.8"></path>

        <path d="M17.5 28.5c0 2.1-1.9 3.8-4.3 3.8s-4.3-1.7-4.3-3.8c0-2.1 1.9-3.8 4.3-3.8s4.3 1.7 4.3 3.8"></path>

        <path d="M25.9 11.1c0 4.1-3.8 7.5-8.5 7.5s-8.5-3.4-8.5-7.5s3.8-7.5 8.5-7.5c4.8 0 8.5 3.4 8.5 7.5"></path>

        <path d="M18.1 16.6c0 3.6-3.2 6.5-7.1 6.5c-3.9 0-7.1-2.9-7.1-6.5s3.2-6.5 7.1-6.5c4 0 7.1 2.9 7.1 6.5"></path>

        <path d="M34.6 7.5c0 3-2.9 5.5-6.4 5.5c-3.5 0-6.4-2.5-6.4-5.5S24.7 2 28.2 2c3.6 0 6.4 2.5 6.4 5.5"></path>
      </g>

      <g fill={beerBubbleColor}>
        <path d="M43.4 9.5c0 2.5-3 4.5-6.6 4.5c-3.6 0-6.6-2-6.6-4.5s3-4.5 6.6-4.5c3.6-.1 6.6 1.9 6.6 4.5"></path>

        <path d="M47.9 10.9c0 1.9-2 3.4-4.5 3.4s-4.5-1.5-4.5-3.4s2-3.4 4.5-3.4c2.4 0 4.5 1.5 4.5 3.4"></path>

        <path d="M16.5 23.2c0 2-1.9 3.6-4.2 3.6c-2.3 0-4.2-1.6-4.2-3.6s1.9-3.6 4.2-3.6c2.4 0 4.2 1.6 4.2 3.6"></path>

        <path d="M36.5 12.5c0 2-1.9 3.6-4.2 3.6c-2.3 0-4.2-1.6-4.2-3.6s1.9-3.6 4.2-3.6c2.4 0 4.2 1.6 4.2 3.6"></path>

        <path d="M26.6 11.8c0 3.9-3.7 7.1-8.2 7.1c-4.6 0-8.2-3.2-8.2-7.1c0-3.9 3.7-7.1 8.2-7.1c4.5 0 8.2 3.2 8.2 7.1"></path>

        <path d="M19 16.9c0 3.3-3.1 5.9-6.9 5.9c-3.8 0-6.9-2.7-6.9-5.9c0-3.3 3.1-5.9 6.9-5.9c3.8-.1 6.9 2.6 6.9 5.9"></path>

        <path d="M28.7 22.1c0 3.3-3.1 5.9-6.9 5.9s-6.9-2.7-6.9-5.9c0-3.3 3.1-5.9 6.9-5.9c3.8-.1 6.9 2.6 6.9 5.9"></path>

        <path d="M34.6 8.4c0 2.9-2.7 5.2-6 5.2s-6-2.3-6-5.2c0-2.9 2.7-5.2 6-5.2s6 2.3 6 5.2"></path>

        <path d="M18.3 28.5c0 2-1.9 3.6-4.2 3.6c-2.3 0-4.2-1.6-4.2-3.6s1.9-3.6 4.2-3.6c2.3 0 4.2 1.6 4.2 3.6"></path>

        <path d="M22.3 26.6c0 1.9-1.8 3.5-4 3.5s-4-1.6-4-3.5s1.8-3.5 4-3.5s4 1.6 4 3.5"></path>
      </g>

      <g fill="#d8d2b8">
        <path d="M25.9 21.7c-.3-.4-.8-.8-1.3-1c-.2-.1-.5-.2-.8-.2h-1.2l-.1-.4c-.2-.5-.5-.9-.9-1.2c-.2-.2-.4-.3-.6-.4c-.2-.1-.3-.1-.4-.2c-.1 0-.3-.1-.4-.1c-1.1-.2-2.3 0-3.1.7l-.5.4l-.4-.3c-.1-.1-.2-.2-.3-.2l-.4-.2c-.2-.1-.5-.2-.8-.2c-.6 0-1.2.2-1.7.6c.2-.6.9-1.1 1.6-1.2c.4-.1.8-.1 1.2 0c.2 0 .5.1.6.2l.6.3h-.8c.9-1.1 2.8-1.7 4.4-1.3c.2 0 .4.1.6.2c.2.1.4.2.5.2c.4.2.7.4 1 .7c.5.5.9 1.2.9 1.9l-.5-.4c.4 0 .7.1 1 .2c.2.1.3.1.4.2c.1.1.3.2.4.3c.6.3 1 .9 1 1.4"></path>

        <path d="M29.5 6.1c-.6-.1-1.2-.1-1.7.1c-.1 0-.2.1-.4.1c-.2.1-.3.1-.3.2c-.2.1-.4.3-.6.4l-.2.2l-.5-.1c-.5-.2-1.1-.3-1.7-.3c-.3 0-.6.1-.8.1c-.4.1-.5.2-.8.3c-.9.5-1.5 1.4-1.5 2.4v.6h-1c-.2 0-.2 0-.4.1c-.3.1-.5.2-.7.4c-.4.3-.7.9-.7 1.5c-.3-.5-.3-1.3.1-1.8c.2-.3.5-.6.8-.7c.1-.1.4-.2.5-.2c.5-.3.7-.4.9-.4l-.5.6c-.3-1.4.5-2.9 1.9-3.6c.3-.2.8-.3 1.1-.4c.4-.1.8-.1 1.2-.1c.8 0 1.6.3 2.2.7l-.7.1c.3-.2.6-.3.9-.5c.2-.1.3-.1.5-.1c.1 0 .4-.1.5-.1c.7 0 1.4.2 1.9.5"></path>
      </g>

      <ellipse
        cx="33.8"
        cy="34.4"
        rx="5.5"
        ry="5.2"
        fill={bubbleColor}
      ></ellipse>

      <ellipse
        cx="25.9"
        cy="42.9"
        rx="4.1"
        ry="3.9"
        fill={bubbleColor}
      ></ellipse>

      <ellipse
        cx="34"
        cy="46.5"
        rx="2.7"
        ry="2.6"
        fill={bubbleColor}
      ></ellipse>

      <ellipse
        cx="27.9"
        cy="51.9"
        rx="1.9"
        ry="1.8"
        fill={bubbleColor}
      ></ellipse>
    </svg>
  );
};

export default BeerMug;

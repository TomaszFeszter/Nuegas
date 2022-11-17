import { Splide } from "@splidejs/react-splide";
import React from "react";
import styled from "styled-components";
import "@splidejs/react-splide/css/core";

export const SliderComponent = ({ className, children }) => {
  return (
    <div className={className}>
      <Splide
        options={{
          autoWidth: true,
          gap: "3.2rem",
          pagination: false,
        }}
      >
        {children}
      </Splide>
    </div>
  );
};

export const Slider = styled(SliderComponent)`
  position: relative;
  ${(props) =>
    props.label &&
    `&::before {
            content: "${props.label}";
            position: absolute;
            top: 0;
            left: 0;
            font-weight: 600;
            font-size: 2.4rem;
            line-height: 3.6rem;
          }`}
  .splide {
    &__arrows {
      display: flex;
      justify-content: end;
      padding: 1rem 3.2rem 2.4rem 0;
    }
    &__arrow {
      border: none;
      background: none;
      svg {
        width: 2rem;
        height: 2rem;
      }
      &--prev {
        svg {
          transform: rotate(180deg);
        }
      }
    }
  }
`;

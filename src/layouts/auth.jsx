import React from "react";
import styled from "styled-components";
import { Cell, Grid, Page } from "./common";

const Figure = styled.figure`
  height: 100%;
  width: 40%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;
const FormGrid = styled(Grid)`
  max-width: 144rem;
`;

const FormCell = styled(Cell)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 6rem;
  width: 60%;
  height: 100%;
  position: relative;
  hr {
    margin: 2rem 0;
    @media screen and (min-width: 830px) {
      margin: 3rem 0;
    }
  }
`;

export const AuthLayout = ({ imageSlot, contentSlot }) => {
  return (
    <Page>
      <FormGrid>
        <FormCell>
          <Figure>{imageSlot}</Figure>
          <Container>{contentSlot}</Container>
        </FormCell>
      </FormGrid>
    </Page>
  );
};

import { useAuth } from "../../hooks/useAuth";
import React from "react";
import { Btn } from "../../components/Button";
import { Cell, Grid, Page } from "../../layouts/common";
import { MenuSidebar } from "../../features/MenuSidebar";
import styled from "styled-components";
import { useTasks } from "../../hooks";

const MenuCell = styled(Cell)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const BoardsPage = () => {
  const { token, isLoading, auth } = useAuth();
  const { items } = useTasks({ enableAll: true, enableOne: false });

  console.log(items);

  if (isLoading) return <div>Loading...</div>;

  if (!token) return <div>nie zalogowano</div>;

  return (
    <Page>
      <Grid>
        <MenuCell size={2}>
          <MenuSidebar />
          <Btn medium onClick={() => auth({}, "logout")}>
            Logout
          </Btn>
        </MenuCell>
        <Cell size={12}></Cell>
      </Grid>
    </Page>
  );
};

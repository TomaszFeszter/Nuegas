import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ThemeProvider } from "styled-components";
import { LoginPage } from "./screens/Login";
import { OverviewPage } from "./screens/Overview";
import { RegisterPage } from "./screens/Register";
import { Route, Routes } from "react-router";
import { PrivateRoute } from "./features/PrivateRoute";
import { GlobalStyle } from "./styles/globalStyles";
import { lightTheme } from "./themes";
import { EditTasksPage, TaskPage, TasksPage } from "./screens/Tasks";
import { TeamsPage } from "./screens/Teams";
import { BoardsPage } from "./screens/Boards";
import { ProjectsPage } from "./screens/Projects";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <Routes>
            <Route
              path="/login"
              element={
                <PrivateRoute mustBeAuthorized={false} redirectTo="/">
                  <LoginPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PrivateRoute mustBeAuthorized={false} redirectTo="/">
                  <RegisterPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/"
              element={
                <PrivateRoute mustBeAuthorized={true} redirectTo="/login">
                  <OverviewPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/task"
              element={
                <PrivateRoute mustBeAuthorized={true} redirectTo="/login">
                  <TasksPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/task/:taskId"
              element={
                <PrivateRoute mustBeAuthorized={true} redirectTo="/login">
                  <TaskPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/task/edit/:taskId"
              element={
                <PrivateRoute mustBeAuthorized={true} redirectTo="/login">
                  <EditTasksPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/teams"
              element={
                <PrivateRoute mustBeAuthorized={true} redirectTo="/login">
                  <TeamsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/boards"
              element={
                <PrivateRoute mustBeAuthorized={true} redirectTo="/login">
                  <BoardsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <PrivateRoute mustBeAuthorized={true} redirectTo="/login">
                  <OverviewPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/projects"
              element={
                <PrivateRoute mustBeAuthorized={true} redirectTo="/login">
                  <ProjectsPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;

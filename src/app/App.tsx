import { ProjectPage } from "pages/Project/ui/ProjectPage";
import { ProjectsListPage } from "pages/Project/ui/ProjectsListPage";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import logo from "shared/assets/logo.svg";
import cls from "app/App.module.scss";
import { Navbar } from "widgets/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/projects"} element={<ProjectsListPage />} />
        <Route path={"/projects/:id"} element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;

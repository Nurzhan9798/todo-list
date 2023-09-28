import { ProjectActionTypes } from "app/store/projectsReducer";
import classNames from "classnames";
import { ProjectCard } from "entity/Project/ui/ProjectCard";
import { CreateProjectModal } from "pages/Project/ui/CreateProjectModal";
import cls from "pages/Project/ui/ProjectsListPage.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { Card } from "shared/ui/Card";
import { Modal } from "shared/ui/Modal";

interface ProjectsListProps {
  className?: string;
}

export const ProjectsListPage = (props: ProjectsListProps) => {
  const { className } = props;
  const { projects, loading, error } = useAppSelector(
    (state) => state.projects,
  );
  const [createProjectModal, setCreateProjectModal] = useState(false);

  const dispatch = useDispatch();

  const toggleCreateProjectModal = () => {
    setCreateProjectModal((prev) => !prev);
  };

  return (
    <div className={classNames(cls.ProjectsList, {}, [className])}>
      <h1>Project list</h1>
      <div className={cls.projectContainer}>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
      <button onClick={toggleCreateProjectModal}>Create Project</button>

      <CreateProjectModal
        isOpen={createProjectModal}
        toggleModal={toggleCreateProjectModal}
      />
    </div>
  );
};

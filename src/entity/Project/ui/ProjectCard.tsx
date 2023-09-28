import { ProjectActionTypes } from "app/store/projectsReducer";
import classNames from "classnames";
import { Project } from "entity/Project/model/types/project";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "shared/ui/Card";
import cls from "./ProjectCard.module.scss";

interface ProjectCardProps {
  className?: string;
  project: Project;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { className, project } = props;
  const dispatch = useDispatch();

  const deleteProject = (projectId: number) => {
    dispatch({ type: ProjectActionTypes.REMOVE_PROJECT, payload: projectId });
  };

  return (
    <Card
      className={classNames(cls.ProjectCard, className)}
      variant={"outlined"}
    >
      <Link to={`${project.id}`}>
        {project.id}) {project.title}
      </Link>
      <button onClick={() => deleteProject(project.id)}>Delete</button>
    </Card>
  );
};

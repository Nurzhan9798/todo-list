import { ProjectActionTypes } from "app/store/projectsReducer";
import classNames from "classnames";
import { Project } from "entity/Project/model/types/project";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "shared/ui/Button";
import { Card } from "shared/ui/Card";
import { Modal } from "shared/ui/Modal";
import { Text } from "shared/ui/Text";
import cls from "./CreateProject.module.scss";

interface CreateProjectProps {
  className?: string;
  isOpen: boolean;
  toggleModal: () => void;
}

export const CreateProjectModal = (props: CreateProjectProps) => {
  const { className, isOpen, toggleModal } = props;
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const onProjectNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);
  };

  const createNewProject = () => {
    if (!projectName) {
      setError("Please enter project name");
      console.log("erorr");
      return;
    }
    const newProject: Project = {
      id: Math.floor(Math.random() * 10000),
      title: projectName,
      createdAt: "dslfs",
    };

    dispatch({ type: ProjectActionTypes.ADD_PROJECT, payload: newProject });
    setProjectName("");
    setError("");
    toggleModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={toggleModal}>
      <Card className={classNames(cls.CreateProject, [className])}>
        <Text title={"Create Project"} align={"center"} />
        <div>
          <label htmlFor="">Project Name: </label>
          <input
            type="text"
            value={projectName}
            onChange={onProjectNameChange}
          />
          <Text variant={"error"} text={error} />
        </div>

        <div className={cls.footer}>
          <Button color={"success"} onClick={createNewProject}>
            Create
          </Button>
          <Button color={"error"} onClick={toggleModal}>
            Reject
          </Button>
        </div>
      </Card>
    </Modal>
  );
};

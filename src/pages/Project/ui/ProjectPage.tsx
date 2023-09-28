import classNames from "classnames";
import { Project } from "entity/Project/model/types/project";
import { Task, TaskStatus } from "entity/Tasks/model/types/task";
import { Column } from "pages/Project/ui/Column";
import cls from "pages/Project/ui/ProjectPage.module.scss";
import { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useParams } from "react-router-dom";

interface ProjectProps {
  className?: string;
}

const project: Project = {
  id: 1,
  title: "Project 1",
  createdAt: "31/01/23",
  tasks: [
    {
      id: 1,
      title: "Task 1",
      description: "description",
      status: TaskStatus.QUEUE,
    },
    {
      id: 2,
      title: "Task 2",
      description: "description",
      status: TaskStatus.QUEUE,
    },
    {
      id: 3,
      title: "Task 3",
      description: "description",
      status: TaskStatus.QUEUE,
    },
    {
      id: 4,
      title: "Task 4",
      description: "description",
      status: TaskStatus.DEVELOPMENT,
    },
    {
      id: 5,
      title: "Task 5",
      description: "description",
      status: TaskStatus.QUEUE,
    },
    {
      id: 6,
      title: "Task 6",
      description: "description",
      status: TaskStatus.DEVELOPMENT,
    },
    {
      id: 7,
      title: "Task 7",
      description: "description",
      status: TaskStatus.DONE,
    },
    {
      id: 8,
      title: "Task 8",
      description: "description",
      status: TaskStatus.DONE,
    },
    {
      id: 9,
      title: "Task 9",
      description: "description",
      status: TaskStatus.DONE,
    },
  ],
};

export const ProjectPage = (props: ProjectProps) => {
  const { className } = props;
  const [tasks, setTasks] = useState<string[]>([]);

  const [queueTasks, setQueueTasks] = useState<Task[]>([]);
  const [developmentTasks, setDevelopmentTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  const { id } = useParams();

  const getArrayFromDroppableId: Record<string, Task[]> = {
    [TaskStatus.QUEUE]: queueTasks,
    [TaskStatus.DEVELOPMENT]: developmentTasks,
    [TaskStatus.DONE]: completedTasks,
  };

  useEffect(() => {
    setQueueTasks(
      project.tasks?.filter((task) => task.status === TaskStatus.QUEUE) || [],
    );
    setDevelopmentTasks(
      project.tasks?.filter((task) => task.status === TaskStatus.DEVELOPMENT) ||
        [],
    );
    setCompletedTasks(
      project.tasks?.filter((task) => task.status === TaskStatus.DONE) || [],
    );
  }, []);

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) return;

    const destinationArray = getArrayFromDroppableId[destination.droppableId];
    const sourceArray = getArrayFromDroppableId[source.droppableId];
    const task = sourceArray[source.index];

    sourceArray.splice(source.index, 1);
    destinationArray.splice(destination.index, 0, task);
  };

  return (
    <div className={classNames(cls.ProjectPage, {}, [className])}>
      <div className={cls.taskContainer}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Column
            tasks={queueTasks}
            columnName={"Queue"}
            droppableId={TaskStatus.QUEUE}
          />
          <Column
            tasks={developmentTasks}
            columnName={"Development"}
            droppableId={TaskStatus.DEVELOPMENT}
          />
          <Column
            tasks={completedTasks}
            columnName={"Done"}
            droppableId={TaskStatus.DONE}
          />
        </DragDropContext>
      </div>
    </div>
  );
};

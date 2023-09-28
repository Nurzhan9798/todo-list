import classNames from "classnames";
import { Task } from "entity/Tasks/model/types/task";
import { Draggable } from "react-beautiful-dnd";
import { Card } from "shared/ui/Card";
import cls from "./TaskItem.module.scss";

interface TaskItemProps {
  className?: string;
  task: Task;
  index: number;
}

export const TaskItem = (props: TaskItemProps) => {
  const { className, task, index } = props;

  return (
    <Draggable key={task.id} draggableId={String(task.id)} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card
            className={classNames(cls.TaskItem, [className], {
              [cls.isDragging]: snapshot.isDragging,
            })}
            variant={"outlined"}
          >
            <div className={cls.header}>{task.title}</div>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

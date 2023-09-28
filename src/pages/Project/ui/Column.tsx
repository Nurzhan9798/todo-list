import classNames from "classnames";
import { Task } from "entity/Tasks/model/types/task";
import { TaskItem } from "entity/Tasks/ui/TaskItem";
import { Droppable } from "react-beautiful-dnd";
import { Card } from "shared/ui/Card";
import { Text } from "shared/ui/Text";
import cls from "./Column.module.scss";

interface ColumnProps {
  tasks: Task[];
  columnName: string;
  droppableId: string;
}

export const Column = (props: ColumnProps) => {
  const { tasks, columnName, droppableId } = props;

  return (
    <Card className={cls.Column} variant={"outlined"}>
      <div className={cls.columnHeader}>
        <Text text={columnName} bold />
        <Text text={String(tasks.length)} />
      </div>
      <hr />
      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={classNames(cls.taskList, {
              [cls.enableDrop]: snapshot.isDraggingOver,
            })}
          >
            {tasks.map((task, index) => (
              <TaskItem key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Card>
  );
};

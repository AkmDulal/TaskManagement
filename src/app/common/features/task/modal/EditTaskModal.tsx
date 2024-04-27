"use client";
import { useAppDispatch } from "@/common/hooks/useRedux";
import { ISubtask } from "@/common/models/ISubtask";
import { ITableColumn } from "@/common/models/ITableColumn";
import { ITask } from "@/common/models/ITask";
import { mainActions } from "@/common/store/slices/main";
import { Button } from "@/common/ui/button";
import { Modal, ModalTitle } from "@/common/ui/modal";
import { FormEvent, useState } from "react";
import tw from "tailwind-styled-components";
import { TaskColumnSelect } from "./ui/TaskColumnSelect";
import { TaskDescriptionField } from "./ui/TaskDescriptionField";
import { TaskSubtasks } from "./ui/TaskSubtasks";
import { TaskTitleField } from "./ui/TaskTitleField";

interface IProps {
  open: boolean;
  onClose: VoidFunction;
  tableIndex: number;
  columnIndex: number;
  taskIndex: number;
  task: ITask;
  columns: ITableColumn[];
}

export function EditTaskModal({
  open,
  onClose: handleClose,
  tableIndex,
  columnIndex,
  taskIndex,
  task,
  columns,
}: IProps) {
  const modalProps = { open, onClose: handleClose };

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [subtasks, setSubtasks] = useState<ISubtask[]>(task.subtasks);
  const [selectedColumnIndex, setSelectedColumnIndex] = useState(columnIndex);

  const dispatch = useAppDispatch();

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      mainActions.updateTask({
        tableIndex,
        oldColumnIndex: columnIndex,
        newColumnIndex: selectedColumnIndex,
        taskIndex,
        task: {
          ...task,
          title,
          description,
          subtasks,
        },
      })
    );

    handleClose();
  };

  return (
    <Modal {...modalProps}>
      <form onSubmit={handleOnSubmit}>
        <ModalTitle className="mb-7">Edit task</ModalTitle>
        <TaskTitleField title={title} setTitle={setTitle} />
        <TaskDescriptionField
          description={description}
          setDescription={setDescription}
        />
        <TasksTitle>Sub tasks</TasksTitle>
        <TaskSubtasks subtasks={subtasks} setSubtasks={setSubtasks} />
        <TaskColumnSelect
          columns={columns}
          selectedIndex={selectedColumnIndex}
          setSelectedIndex={setSelectedColumnIndex}
        />
        <CreateButton type="submit" button_type="primary" className="mt-7">
          Save changes
        </CreateButton>
      </form>
    </Modal>
  );
}

const TasksTitle = tw.h3`
text-white
text-sm
font-bold
`;

const CreateButton = tw(Button)`
flex
items-center
justify-center
w-full
`;

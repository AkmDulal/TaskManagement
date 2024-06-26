"use client";
import { useAppDispatch } from "@/common/hooks/useRedux";
import { ITable } from "@/common/models/ITable";
import { ITableColumn } from "@/common/models/ITableColumn";
import { mainActions } from "@/common/store/slices/main";
import { Button } from "@/common/ui/button";
import { Modal, ModalTitle } from "@/common/ui/modal";
import { FormEvent, useState } from "react";
import tw from "tailwind-styled-components";
import { TableColumns } from "./ui/TableColumns";
import { TableTitleField } from "./ui/TableTitleField";

interface IProps {
  open: boolean;
  onClose: VoidFunction;
  table: ITable;
  tableIndex: number;
}

export function EditTableModal({
  open,
  onClose: handleClose,
  table,
  tableIndex,
}: IProps) {
  const modalProps = { open, onClose: handleClose };

  const [title, setTitle] = useState(table.title);
  const [columns, setColumns] = useState<ITableColumn[]>(table.columns);

  const dispatch = useAppDispatch();

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      mainActions.updateTable({
        index: tableIndex,
        newTable: {
          ...table,
          title,
          columns,
        },
      })
    );

    handleClose();
  };

  return (
    <Modal {...modalProps}>
      <form onSubmit={handleOnSubmit}>
        <ModalTitle className="mb-7">Add new table</ModalTitle>
        <TableTitleField title={title} setTitle={setTitle} />
        <ColumnsTitle>Table columns</ColumnsTitle>
        <TableColumns columns={columns} setColumns={setColumns} />
        <Button type="submit" className="w-full mt-8" button_type="primary">
          Create new table
        </Button>
      </form>
    </Modal>
  );
}

const ColumnsTitle = tw.div`
text-white
text-base
font-bold
mb-2
`;

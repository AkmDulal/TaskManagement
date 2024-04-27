"use client";
import { useToggler } from "@/common/hooks/useToggler";
import { AiOutlinePlusSquare } from "react-icons/ai";
import tw from "tailwind-styled-components";
import { CreateTableModal } from "../../../features/table/modal/CreateTableModal";

export function CreateTableButton() {
  const [visibility, toggle] = useToggler(false);

  return (
    <>
      <CreateTableModal open={visibility} onClose={toggle} />
      <Wrapper onClick={toggle}>
        <Icon />
        Create new categories
      </Wrapper>
    </>
  );
}

const Wrapper = tw.button`
flex
items-center
w-full
py-2
pl-5
text-indigo-500
bg-transparent
`;

const Icon = tw(AiOutlinePlusSquare)`
mr-4
text-[#828fa3]
`;

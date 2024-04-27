"use client";
import { useMediaQuery } from "@/common/hooks/useMediaQuery";
import dynamic from "next/dynamic";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import tw from "tailwind-styled-components";
import { Menu } from "./Menu";

interface IProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
    "onClick"
  > {}

export function HeaderTitle({ children, ...rest }: IProps) {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleOpenMenu = () => {
    if (isMobile) {
      setOpen(true);
    }
  };

  return (
    <>
      <Wrapper {...rest} onClick={handleOpenMenu}>
        {children}
        {isMobile ? <FiChevronDown className="ml-1 mt-[2px]" /> : null}
      </Wrapper>
      <Menu open={open} setOpen={setOpen} />
    </>
  );
}

export const HeaderTitleNoSSR = dynamic(() => Promise.resolve(HeaderTitle), {
  ssr: false,
});

const Wrapper = tw.h2`
flex
items-center
text-gray-800
dark:text-white
text-xl
font-bold
cursor-pointer
`;

"use client";
import { TableList } from "@/common/components/table/list";
import { bool2string, string2bool } from "@/common/utils";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { HideSidebarButton } from "./HideButton";

interface IProps {
  expanded: boolean;
  isDesktop: boolean;
}

export function Sidebar({ expanded, isDesktop }: IProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted && !isDesktop) {
    return null;
  }

  return (
    <>
      <SideBarWrapper>
        <Wrapper $expanded={bool2string(expanded)}>
          <div>
            {/* <Logo /> */}
            <h3 className="py-[30px] px-[15px]"> Akm Dulal </h3>
            <TableList />
          </div>
        </Wrapper>
      </SideBarWrapper>
      <HideSidebarButton />
    </>
  );
}

const SideBarWrapper = tw.div`
fixed
top-0
left-0
min-h-screen
w-64
`;

interface IWrapperProps {
  $expanded: "true" | "false";
}

const Wrapper = tw.aside<IWrapperProps>`
absolute
top-0
flex
flex-col
justify-between
bg-white
dark:bg-[#2b2c37]
w-full
min-h-screen
border-r-[1px]
border-r-gray-600
transition-none
md:transition-all
${({ $expanded }) => (string2bool($expanded) ? "left-0" : "-left-[100%]")}
`;

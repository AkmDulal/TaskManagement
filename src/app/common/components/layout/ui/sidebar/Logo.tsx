"use client";
import brandLogo from "@/common/assets/brand/logo.svg";
import { useAppSelector } from "@/common/hooks/useRedux";
import Image from "next/image";
import tw from "tailwind-styled-components";

export function Logo() {
  const { theme } = useAppSelector((x) => x.themeSlice);

  return <BrandLogo alt="Brand logo" src={brandLogo} />;
}

const BrandLogo = tw(Image)`
p-5
`;

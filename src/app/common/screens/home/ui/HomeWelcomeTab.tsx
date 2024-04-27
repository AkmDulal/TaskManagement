"use client";
import {
  Header,
  HeaderTitleNoSSR,
  LayoutContent,
} from "@/common/components/layout";
import { WelcomeCard } from "@/common/components/welcome-card";

export function HomeWelcomeTab() {
  return (
    <LayoutContent className="flex items-center">
      <Header>
        <HeaderTitleNoSSR>Task Management</HeaderTitleNoSSR>
      </Header>
      <WelcomeCard />
    </LayoutContent>
  );
}

import { Outlet } from "react-router-dom";
import Navigations from "./components/common/Navigations.tsx";
import Footer from "./components/common/Footer.tsx";
import CommandPaletteLauncher from "./components/common/CommandPaletteLauncher.tsx";
import { Page, Content } from "./components/styled/TerminalStyled.ts";

export const MainLayout = () => {
  return (
    <Page>
      <Navigations />
      <Content>
        <Outlet />
        <Footer />
      </Content>
      <CommandPaletteLauncher />
    </Page>
  );
};

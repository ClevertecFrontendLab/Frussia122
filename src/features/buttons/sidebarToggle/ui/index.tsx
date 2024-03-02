import { Button } from "./styled";
import { Props } from "../models/types";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

export const SidebarToggle: React.FC<Props> = ({
  collapsed,
  setCollapsed,
  typeTest,
}) => {
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Button onClick={toggleCollapsed} data-test-id={typeTest}>
      {collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
    </Button>
  );
};

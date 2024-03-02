import { Wrapper, Content, HeaderTitle, Settings, Type } from "./styled";
import { SettingOutlined } from "@ant-design/icons";
import { Props } from "../models/type";
import { Breadcrumb } from "@features/breadcrumbs";
import React from "react";

export const Header: React.FC<Props> = ({ title, breadcrumb }) => (
    <Wrapper>
      <Breadcrumb breadcrumb={breadcrumb} />
      {title && (
        <Content>
          <HeaderTitle>{title}</HeaderTitle>
          <Settings>
            <SettingOutlined />
            <Type>Настройки</Type>
          </Settings>
        </Content>
      )}
    </Wrapper>
);

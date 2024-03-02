import { Wrapper, BreadLink } from "./styled";
import { Props } from "../models/type";
import React from "react";

export const Breadcrumb: React.FC<Props> = ({ breadcrumb }) => (
    <Wrapper>
      <BreadLink>Главная</BreadLink>
      <BreadLink>{breadcrumb}</BreadLink>
    </Wrapper>
  );


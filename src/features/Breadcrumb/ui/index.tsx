
import {
    Wrapper,
    BreadLink
} from './styled'
import { Props } from '../models/type';
import React from 'react';

export const Breadcrumbs: React.FC<Props> = ({breadcrumb}) => {
  
  return (
    <Wrapper>
        <BreadLink>Главная</BreadLink>
        <BreadLink>{breadcrumb}</BreadLink>
    </Wrapper>
  )
}

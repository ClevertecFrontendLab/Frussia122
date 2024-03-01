
import {
    Wrapper,
    Content,
    HeaderTitle,
    Settings,
    Type
} from './styled'
import {
    SettingOutlined 
  } from '@ant-design/icons';
import { Props } from '../models/type';
import React from 'react';
import { Breadcrumb } from '@features/breadcrumbs';

export const Header: React.FC<Props> = ({title, breadcrumb}) => {
  return (
    <Wrapper>
        <Breadcrumb breadcrumb={breadcrumb}/>
        {title && 
         <Content>
         <HeaderTitle>
           {title}
         </HeaderTitle>
         <Settings>
             <SettingOutlined />
             <Type>Настройки</Type>
         </Settings>
     </Content>}
    </Wrapper>
  )
}


import { Breadcrumbs } from '@features/Breadcrumb/ui'
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
export const Header = () => {
  return (
    <Wrapper>
        <Breadcrumbs />
        <Content>
            <HeaderTitle>
                 Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей мечты!
            </HeaderTitle>
            <Settings>
                <SettingOutlined />
                <Type>Настройки</Type>
            </Settings>
        </Content>
    </Wrapper>
  )
}

import { CardLayout } from '@shared/cardLayout';
import {
    Wrapper,
    ReviewLink
} from './styled';
import { FooterCard } from '../cardData/data';

export const MainFooter = () => {
  return (
    <Wrapper>
        <ReviewLink href="" >Смотреть отзывы</ReviewLink>
        <CardLayout 
            data={FooterCard}
            customStyle={{
                headerColor: '#2f54eb',
                contentColor: '##8c8c8c',
                footerColor: 'black',
                footerFontSize: 14,
            }}
            />
    </Wrapper>
  )
}

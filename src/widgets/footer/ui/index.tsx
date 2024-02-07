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
                headerFontSize: 16,
                contentColor: '#8c8c8c',
                footerFontSize: 14,
            }}
            />
    </Wrapper>
  )
}

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
            customstyle={{
                headercolor: '#2f54eb',
                headerfontsize: 16,
                contentcolor: '#8c8c8c',
                footerfontsize: 14,
            }}
            />
    </Wrapper>
  )
}

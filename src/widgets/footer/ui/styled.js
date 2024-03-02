import styled from "styled-components";
import { Layout } from 'antd';
import { CardWrapper } from "@shared/layouts/card";
import { paddings,margin } from "@shared/data/constants/styles/variables";
const { Footer } = Layout;

export const Wrapper = styled(Footer)`
    background-color: transparent;
    background: transparent;
    display: flex;
    width: 100%;
    padding: ${paddings.md};
    align-items: flex-end;
    justify-content: space-between;
    
    @media screen and (max-width: 767px) {
        flex-direction: column;
        padding: 0 ${paddings.md};
        margin-top: ${margin.sm};
        justify-content: center;
        align-items: center;
        ${CardWrapper} {
            width: 100%;
            margin: ${paddings.xs} 0 0 0;
        }
    }
    
    @media screen and (max-width: 400px) {
        flex-direction: column;
        padding: 0 ${paddings.xs};
    }

`
export const ReviewLink = styled.span`
    height: 20px;

    @media screen and (max-width: 767px) {
        order: 2;
        margin: ${margin.md} 0;
    }
`;

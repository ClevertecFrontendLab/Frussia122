import { styled } from 'styled-components';

export const TypeLink = styled.div`
    font: 400 16px / 130% "Inter", sans-serif;
    color: #262626;
    cursor: pointer;
`

export const Wrapper = styled.div`
    display: flex;
    margin-top: 48px;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
        margin-top: 32px;

    }
`

export const Button = styled.div`
    border-bottom: 1px solid #f0f0f0;
    width: 50%;
    text-align: center;
    padding: 13px;

    &.activeType{
        border-bottom: 1px solid #2f54eb;
        ${TypeLink} {
            color: #2f54eb;
        }
    }
`
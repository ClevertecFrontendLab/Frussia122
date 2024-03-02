import { styled } from 'styled-components';
import { StyleProps } from '../models/types'

export const Wrapper = styled.section<StyleProps>`
    background-image: url("${props => props.backgroundimg}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: #799CD4;
        z-index: 1;
        opacity: .5;
    }
`;

export const Card = styled.div`
    width: 539px;
    background: white;
    padding: 64px 85px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    @media screen and (max-width: 600px) {
        width: 400px;
        padding: 32px 32px;
    }
    @media screen and (max-width: 400px) {
        width: 330px;
        padding: 32px 16px;
    }

`

export const Logo = styled.img`
    height: 76px;
    @media screen and (max-width: 600px) {
        height: 50px;
    }
`;
import { styled } from 'styled-components';
import {StyleProps} from '../models/types'

export const Wrapper = styled.section<StyleProps>`
    background-image: url("${props => props.backgroundImg}");
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
`

export const Logo = styled.img`
    height: 76px;
`;
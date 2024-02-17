import {styled} from "styled-components";
import Lottie from 'react-lottie';

export const Wrapper = styled.div`
    position: absolute !important;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(12px);
    background: rgba(121, 156, 212, 0.5);
    z-index: 5;
`
export const CustomLoader = styled(Lottie)`
    
`
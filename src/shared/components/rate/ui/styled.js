import styled from "styled-components";
import {  Rate } from 'antd';


export const CommentRate = styled(Rate)`
height: 30px;
    svg{
        width: 1.3em !important;
        margin-left: -6px;
    }
    [aria-checked="true"] {
        svg{
            width: 1.3em !important;
            height: 1.3em !important;
            path {
                fill: #faad14;

            }
            path:first-child{
                fill: #faad14;
            }
            path:last-child{
                display: none;
            }
        }
    }

    [aria-checked="false"] {
        svg{
    
            path:first-child{
                fill: none;
            }
            path:last-child{
                fill: #faad14;
            }
        
    }
` 
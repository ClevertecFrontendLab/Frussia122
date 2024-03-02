import styled from "styled-components";
import { Result } from "antd";


export const ResultModal = styled(Result)`
    .ant-result-subtitle{
        @media screen and (max-width: 600px) {
            max-width: 200px;
            margin: 0 auto;
        }
    }
    .ant-btn{
        background: #2f54eb;
    }
`
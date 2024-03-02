import styled from "styled-components";
import { Button } from "antd";

export const CommentButton = styled(Button)`
    border: 1px solid #2f54eb;
    border-radius: 2px;
    padding: 4px 15px;
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.04);
    background: #2f54eb;
    color: white;
    height: 40px;
    width: 100%;
    
    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;
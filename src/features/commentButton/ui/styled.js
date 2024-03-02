import { colors, paddings } from "@shared/data/constants/styles/variables";
import { Button } from "antd";
import styled from "styled-components";

export const Wrapper = styled(Button)`
    border: 1px solid ${colors.darkBlue};
    border-radius: 2px;
    padding: ${paddings.xxs} ${paddings.sm};
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.04);
    background: ${colors.darkBlue};
    color: ${colors.white};
    height: 40px;
`
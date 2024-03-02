import { styled } from "styled-components";
import { fonts, colors, margin, paddings} from "@shared/data/constants/styles/variables";
export const TypeLink = styled.div`
    font: ${fonts.links};
    color: ${colors.lightBlack};
    cursor: pointer;
`;

export const Wrapper = styled.div`
    display: flex;
    margin-top: ${margin.lg};
    justify-content: space-between;

    @media screen and (max-width: 600px) {
        margin-top: ${margin.md};

    }
`;

export const Button = styled.div`
    border-bottom: 1px solid #f0f0f0;
    width: 50%;
    text-align: center;
    padding: ${paddings.xs};

    &.activeType{
        border-bottom: 1px solid #2f54eb;
        ${TypeLink} {
            color: ${colors.darkBlue};
        }
    }
`;

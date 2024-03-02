import {styled} from "styled-components";
import {
    ExclamationCircleFilled,
    CloseCircleFilled
  } from '@ant-design/icons'
import { colors, fonts, margin } from "@shared/data/constants/styles/variables";


export const StyledVerificationInput = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .vi__character{
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #d9d9d9;
      border-radius: 2px;
      background: transparent;
      font: ${fonts.smallTitle};
      color: ${colors.white};
    }
    .vi__character--filled{
      color: ${colors.lightBlack};
    }
    &.errorCode {
      .vi__character{
          border: 1px solid ${colors.red};
        }
    }
`;

export const Attention = styled(ExclamationCircleFilled)`
    color: ${colors.darkBlue};
    font-size: 70px;
`

export const Title = styled.h2`
    font: ${fonts.mobileTablet};
    color: #262626;
    margin-top: ${margin.sm};
    @media screen and (max-width: 400px) {
      max-width: 250px;
  }

`
export const Description = styled.p`
    font: ${fonts.smallTitle};
    color: #8c8c8c;
    @media screen and (max-width: 400px) {
      max-width: 240px;
      margin-bottom: ${margin.md};
   } 
`

export const Hint = styled.span`
    font: ${fonts.smallTitle};
    color: #8c8c8c;
    @media screen and (max-width: 400px) {
      margin-top: ${margin.sm};
      max-width: 250px;
  }
`
export const Email = styled.span`
    font: 700 14px / 130% "Inter", sans-serif;
`

export const ErrorIcon = styled(CloseCircleFilled)`
    color: #ff4d4f;
    font-size: 70px;
`

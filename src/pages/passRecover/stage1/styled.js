import {styled} from "styled-components";
import {
    ExclamationCircleFilled,
    CloseCircleFilled
  } from '@ant-design/icons'


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
    font: 400 14px / 130% "Inter", sans-serif;
    color: white;

  }
  .vi__character--filled{
    color: #262626;
  }
  &.errorCode {
    .vi__character{
        border: 1px solid red;
      }
  }
`;

export const Attention = styled(ExclamationCircleFilled)`
  color: #2f54eb;
  font-size: 70px;
`

export const Title = styled.h2`
    font: 500 18px / 130% "Inter", sans-serif;
    color: #262626;
    margin-top: 24px;

    @media screen and (max-width: 400px) {
      max-width: 250px;
  }

`
export const Description = styled.p`
    font: 400 14px / 130% "Inter", sans-serif;
    color: #8c8c8c;
    @media screen and (max-width: 400px) {
      max-width: 240px;
      margin-bottom: 30px;
  }
    
`

export const Hint = styled.span`
    font: 400 14px / 130% "Inter", sans-serif;
    color: #8c8c8c;
    @media screen and (max-width: 400px) {
      margin-top: 20px;
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

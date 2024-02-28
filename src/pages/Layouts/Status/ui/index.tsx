import { AppDispatch, RootState } from "@app/store/store"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { push } from "redux-first-history"
import { clearUserErrors } from "@app/store/reducers/user"
import { clearRecoveryErrors } from "@app/store/reducers/recovery"
import { 
    Wrapper, 
    Card,
    Content,
    Title,
    Description,
    Button
} from "./styled"
import background from '../images/Enter page_light.jpg'
import { Props } from "../models/types"
import { ChangePassword } from "@app/store/Actions/api/changePassword"
import { checkEMail } from "@app/store/Actions/api/checkEmail"
import { Loader } from "@shared/Components/Loader"
import { AUTH } from "@shared/Data/Constants/Routes/ROUTE"


export const AlertsLayout:React.FC<Props> = ({alert}) => {

    const needAlerts = useSelector((state: RootState) => state.user.errors.statusCode)
    const needAlertsRecovery = useSelector((state: RootState) => state.recover.errors.statusCode)
    const location = useSelector((state: RootState) => state.router);
    const loading = useSelector((state: RootState) => state.recover.loading);

    const dispatch = useDispatch<AppDispatch>();
    
    useEffect(() => {
        const isRecoverError = localStorage.getItem('recoverError');
        const isRegError = localStorage.getItem('regError');
        
        if(isRecoverError || isRegError) return
        else if(!needAlerts && !needAlertsRecovery && needAlerts !== 200 && needAlertsRecovery !== 200) {
                dispatch(push(AUTH));
        }
    }, [dispatch, needAlerts, needAlertsRecovery])


    const handleClick = (link: string) => {
        const email = localStorage.getItem('email');
        const password = sessionStorage.getItem('password');
        const confirmPassword = sessionStorage.getItem('confirmPassword');
     
        if(location.location?.pathname === '/result/error-check-email' && email) {
            dispatch(checkEMail({email}));
        } else if(location.location?.pathname === '/result/error-change-password' && password && confirmPassword) {
            dispatch(ChangePassword({password, confirmPassword}))
        } 
        else {
            dispatch(clearRecoveryErrors());
            dispatch(clearUserErrors());
            dispatch(push(link));
        } 
    }
    
  return (
    <Wrapper backgroundImg={background}>
         {loading ? <Loader /> : <></>}
        <Card>
        {alert && (
            <Content>
                {alert?.icon}
                <Title>{alert?.title}</Title>
                <Description>{alert?.description}</Description>
                <Button data-test-id={alert?.dataTestId} onClick={() => handleClick(alert.linkToRedirect)}>{alert?.buttonText}</Button>
            </Content>     
        )}
        </Card>
    </Wrapper>
  )
}

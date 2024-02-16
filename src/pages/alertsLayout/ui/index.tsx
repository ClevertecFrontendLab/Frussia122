import { AppDispatch, RootState } from "@app/store/store"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { push } from "redux-first-history"
import { clearErrors } from "@app/store/reducers/user"
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
import { HOMEPAGE } from "@shared/Constants/Routes/ROUTE"


export const AlertsLayout:React.FC<Props> = ({alert}) => {

    const needAlerts = useSelector((state: RootState) => state.user.errors.statusCode)
    const needAlertsRecovery = useSelector((state: RootState) => state.recover.errors.statusCode)

    const dispatch = useDispatch<AppDispatch>();
    
    useEffect(() => {
        if(!needAlerts && !needAlertsRecovery && needAlerts !== 200) {
                dispatch(clearErrors());
                dispatch(push(HOMEPAGE));
        }
    }, [dispatch, needAlerts, needAlertsRecovery])

    const handleClick = (link: string) => {
        dispatch(push(link));
        dispatch(clearErrors());
    }
  return (
    <Wrapper backgroundImg={background}>
        <Card>
        {alert && (
            <Content>
                {alert?.icon}
                <Title>{alert?.title}</Title>
                <Description>{alert?.description}</Description>
                <Button onClick={() => handleClick(alert.linkToRedirect)}>{alert?.buttonText}</Button>
            </Content>     
        )}
        </Card>
    </Wrapper>
  )
}

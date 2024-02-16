import { Data } from "./models/types";
import {
    CloseCircleFilled,
    WarningFilled,
    CheckCircleFilled,
  } from '@ant-design/icons'

import {
    HOMEPAGE,
    AUTH,
    REGISTRATION,
    CHANGE_PASSWORD
} from '@shared/Constants/Routes/ROUTE'

import errorIcon from './images/image.svg'

export const ErrorImage: React.FC  = () => <img style={{width: '253px'}} src={errorIcon} alt="" />

export const AlertsData: Data = [
    {
        currentLink: 'asdasd',
        icon: <WarningFilled  style={{'color': '#faad14'}}/>,
        id: 'striasdasdng',
        title: 'Вход не выполнен', 
        description: 'Что-то пошло не так. Попробуйте еще раз',
        buttonText: 'Повторить',
        linkToRedirect: HOMEPAGE,
    },
    {
        currentLink: 'asdasdasdasd',
        icon: <CheckCircleFilled  style={{'color': '#52c41a'}}/>,
        id: 'strinahgasdafasdg',
        title: 'Регистрация успешна', 
        description: 'Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.',
        buttonText: 'Войти',
        linkToRedirect: AUTH,
    },
    {
        currentLink: 'asdasd',
        icon: <CloseCircleFilled  style={{'color': '#ff4d4f'}}/>,
        id: 'strihasdasd2ng',
        title: 'Данные не сохранились', 
        description: 'Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.',
        buttonText: 'Назад к регистрации',
        linkToRedirect: `${AUTH}/${REGISTRATION}`,
    },
    {
        currentLink: 'asdasd',
        icon: <CloseCircleFilled  style={{'color': '#ff4d4f'}}/>,
        id: 'strihasdasdnghasda',
        title: 'Данные не сохранились', 
        description: 'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.',
        buttonText: 'Повторить',
        linkToRedirect: `${AUTH}/${REGISTRATION}`,
    },
    {
        currentLink: 'asdasd',
        icon: <CloseCircleFilled  style={{'color': '#ff4d4f'}}/>,
        id: 'asdaasdasd',
        title: 'Такой e-mail не зарегистрирован', 
        description: 'Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail.',
        buttonText: 'Попробовать снова',
        linkToRedirect: `${AUTH}`,
    },
    {
        currentLink: 'asdasd',
        icon: <ErrorImage />,
        id: 'asdaasdasd',
        title: 'Что-то пошло не так', 
        description: 'Произошла ошибка, попробуйте отправить форму ещё раз.',
        buttonText: 'Назад',
        linkToRedirect: `${AUTH}`,
    },
    {
        currentLink: 'asdasd',
        icon: <CheckCircleFilled  style={{'color': '#52c41a'}}/>,
        id: 'asdaasdasd',
        title: 'Пароль успешно изменен', 
        description: 'Теперь можно войти в аккаунт, используя свой логин и новый пароль',
        buttonText: 'Назад',
        linkToRedirect: `${AUTH}`,
    },
    {
        currentLink: 'asdasd',
        icon: <CloseCircleFilled  style={{'color': '#ff4d4f'}}/>,
        id: 'striasdasdng',
        title: 'Данные не сохранились', 
        description: 'Что-то пошло не так. Попробуйте еще раз',
        buttonText: 'Повторить',
        linkToRedirect: `${AUTH}/${CHANGE_PASSWORD}`,
    },
]
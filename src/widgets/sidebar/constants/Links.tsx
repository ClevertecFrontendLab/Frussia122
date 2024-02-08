import  { NavLinks }  from "../models/types"
import {
    CalendarFilled,
    HeartFilled,
    TrophyFilled,
    IdcardOutlined
  } from '@ant-design/icons';


export const Links: NavLinks = [
     {
         label: 'Календарь',
         icon: <CalendarFilled  style={{'color': '#061178'}}/>,
         key: '1',
     },
     {
        label: 'Тренировки',
        icon: <HeartFilled style={{'color': '#061178'}}/>,
        key: '2',
    }, 
    {
        label: 'Достижения',
        icon: <TrophyFilled style={{'color': '#061178'}}/>,
        key: '3',
    },
    {
        label: 'Профиль',
        icon: <IdcardOutlined style={{'color': '#061178'}}/>,
        key: '4',
    },
]
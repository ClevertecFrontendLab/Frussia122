import {
    AndroidFilled,
    AppleFilled
  } from '@ant-design/icons';
import { Data } from '@pages/home/models/types';

export const FooterCard: Data = {
    header: 'Скачать на телефон',
    content: 'Доступно в PRO-тарифе',
    footer: [
        {
            id: 'asdasd7612',
            text: 'Android OS',
            icon: <AndroidFilled />
        },
        {
            id: 'asdasd76',
            text: 'Apple iOS',
            icon: <AppleFilled />
        },
    ]
}
import { Data } from "../models/types"
import {
    HeartFilled,
    IdcardOutlined,
    CalendarFilled
  } from '@ant-design/icons';

export const testData: Data[] = [
    {
        id: 'asdasd',
        contentHtml: true,
        content: `С CleverFit ты сможешь: <br> — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки; <br> — отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами; <br> — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках; <br> — выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.`,
    },
    {
        id: 'asdasd2',
        content: `CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!`,
        
    },
    {
        id: 'asdasd4',
        header: "Расписать тренировки",
        footer: [
            {
                id: 'asdasd76',
                text: 'Тренировки',
                icon: <HeartFilled />
            },
        ]
    },
    {
        id: 'asdasd2316',
        header: "Назначить календарь",
        footer: [
            {
                id: 'asdasdasdasd',
                text: 'Календарь',
                icon: <CalendarFilled />
            }
        ]
    },
    {
        id: 'asdas271y23781',
        header: "Заполнить профиль",
        footer: [
            {
                id: 'asdashasdasdd',
                text: 'Профиль',
                icon: <IdcardOutlined />
            }
        ]
    }
]
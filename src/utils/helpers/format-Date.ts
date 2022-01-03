import * as dayjs from 'dayjs'

export const formatDate = (date: Date, format?: string) => {
    const FORMAT = format??'YYYY-MM-DD HH:mm:ss'; 
    return dayjs(date).format(FORMAT);
}
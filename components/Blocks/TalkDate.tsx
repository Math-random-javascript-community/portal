import {parseISO, format} from 'date-fns';

type ParamsType = {
  dateString: string,
  timeOnly?: boolean
}
export default function TalkDate({dateString, timeOnly = false}: ParamsType) {
  const date = parseISO(dateString);
  const formatDate = timeOnly
    ? 'hh:mm'
    : ((date.getDay() === (new Date()).getDay() 
      ? '\'Today\'' :
      'hh:mm LLL d')
      + (date.getFullYear() === (new Date()).getFullYear() 
        ? '' 
        : ', yyyy'));

  return <time dateTime={dateString}>{format(date, formatDate)}</time>;
}
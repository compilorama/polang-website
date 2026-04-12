import { useState, useEffect } from 'react'
import { useTranslation } from '@compilorama/polang';

const Counter = () => {
  const { locale } = useTranslation()
  const [timestamp, setTimestamp] = useState(Date.now())

  useEffect(() => {
    const timerId = setInterval(() => setTimestamp(Date.now()), 1000);
    return () => clearInterval(timerId);
  }, [])

  return (
    <p className="pd-counter">
      {getDateTime(locale.code, timestamp)}
    </p>
  );
};

function getDateTime(localeCode, timestamp){
  return Intl
    .DateTimeFormat(localeCode, {
      year: '2-digit',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit' 
    })
    .format(new Date(timestamp));
}

export default Counter;

export type Format =
  | 'fullYear'
  | 'month'
  | 'day'
  | 'date'
  | 'hours'
  | 'minutes'
  | 'seconds'
  | 'milliseconds'
  | 'time'
  | 'timezoneOffset'

export const getJapanDate = (format: Format): number => {
  const now = new Date()
  const utc = now.getTime() + now.getTimezoneOffset() * 60 * 1000
  const japanOffset = 9 * 60 * 60 * 1000
  const japanTime = new Date(utc + japanOffset)

  switch (format) {
    case 'fullYear':
      return japanTime.getFullYear()
    case 'month':
      return japanTime.getMonth()
    case 'day':
      return japanTime.getDay()
    case 'date':
      return japanTime.getDate()
    case 'hours':
      return japanTime.getHours()
    case 'minutes':
      return japanTime.getMinutes()
    case 'seconds':
      return japanTime.getSeconds()
    case 'milliseconds':
      return japanTime.getMilliseconds()
    case 'time':
      return japanTime.getTime()
    case 'timezoneOffset':
      return japanTime.getTimezoneOffset()
    default:
      return japanTime.getHours()
  }
}

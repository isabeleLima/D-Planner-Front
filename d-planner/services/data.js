import moment from "moment"
export default function dataFormater(dataDeEntrega) {
  const now = moment(new Date())
  const past = moment(dataDeEntrega)
  const duration = moment.duration(now.diff(past))
  const days = Math.round(duration.asDays())

  if (days == 0) {
    return "Hoje"
  } else if (days == 1) {
    return "1 dia"
  } else if (days == -1) {
    return "Há 1 dia"
  } else if (days > 0) {
    return `${days} dias`
  } else {
    return `Há ${days} dias`
  }
}

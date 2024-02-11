import moment from "moment";

// Provide date and format
export default (date: String<any>, format: String<any>) => {
  return moment(new Date(date)).format(format);
}
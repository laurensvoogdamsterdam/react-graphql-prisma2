import { URL } from "../constants";
function okEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function okUsername(username: string) {
  return username.length > 0;
}

function okPassword(password: string) {
  return password.length > 0;
}

export function buildStaticUrl(path: string) {
  return `${URL}${path}`;
}
export function textUpTo(text: string, upto: number) {
  return text.length < upto ? text : `${text.substring(0, 132)}...`;
}
export * from "./NavigationHelper";
export * from "./accessToken";
export * from "./dataHelper";
export { okEmail, okUsername, okPassword };

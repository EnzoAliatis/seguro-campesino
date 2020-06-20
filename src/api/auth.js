import { TOKEN } from "../utils/constant";
import jwtDecode from "jwt-decode";

export function login(user) {
  if (user.email === "brangy@gmail.com" && user.password === "123456789") {
    return true;
  } else {
    return false;
  }
}

export function setTokenApi(token) {
  localStorage.setItem(TOKEN, token);
}

export function getTokenApi(token) {
  return localStorage.getItem(TOKEN);
}

export function logoutApi() {
  localStorage.removeItem(TOKEN);
}

export function isUserLogesApi() {
  const token = getTokenApi();
  if (!token) {
    logoutApi();
    return null;
  }
  // if (isExpired(token)) {
  //   logoutApi();
  // }
  // return jwtDecode(token);
  return true;
}

function isExpired(token) {
  const { exp } = jwtDecode(token);
  const expire = exp * 1000;
  const timeout = expire - Date.now();

  if (timeout < 0) {
    return true;
  }
  return false;
}

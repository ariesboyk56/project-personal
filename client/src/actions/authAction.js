import { SET_AUTH } from "../constants/authConstant";

export const setAuth = (payload) => ({
    type: SET_AUTH,
    payload,
});
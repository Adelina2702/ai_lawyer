import axios from "axios";


export const isError = function (e)  {
    return e && e.stack && e.message;
};

export const getNativeErrorMessage = function (e) {
    return isError(e) ? e.message : "unknown error";
};

export const getApiErrorMessage = (e) => {
    try {
        if (axios.isAxiosError(e)) {
            return e.response?.data?.error || e.message;
        }
        return getNativeErrorMessage(e);
    } catch (error) {
        return "unknown error: " + error
    }
};
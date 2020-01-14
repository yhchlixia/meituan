import Request from "../request";

export function toIndex() {
    return Request({
        method: "GET",
        url: "http://192.168.17.22:8080/index"
    }).then(res => {
        console.log(res);
        return res;
    }).catch(err => {
        console.log(err);
    })
} 
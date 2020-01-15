import Request from "../request";

export function toIndex() {
    return Request({
        method: "GET",
        url: "/index"
    }).then(res => {
        console.log(res);
        return res;
    }).catch(err => {
        console.log(err);
    })
} 
import Request from "../request";
export function searchOrder(index, limit, key) {
    return Request({
        method: "GET",
        url: "/order/findOrder",
        params: {
            index: index,
            limit: limit,
            key: key
        }
    }).then(res => {
        console.log(res);
        return res;
    })
}
import requests from "./request"

// 接口
export const axiosFun = (data={}) =>
  requests({
    url: "/list",
    data,
    method: "post",
  })
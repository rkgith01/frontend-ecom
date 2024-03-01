import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
// console.log(apiKey)
// const apiUrl = 'http://localhost:1337/api'

const apiUrl = process.env.NEXT_PUBLIC_SERVER_API_URL;
console.log(apiUrl);

export const axiosClient = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
    // 'X-API-KEY': apiKey
  },
});

export const paymentRequest = async (endpoint, payload) => {
  const res = await fetch(`${apiUrl}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      // 'X-API-KEY': apiKey
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return data;
};

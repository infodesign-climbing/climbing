import axios from "axios";

export async function requestGet<T>(url: string, params?: any) {
  try {
    const data = await axios.get<T>(url, { params });
    return data.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

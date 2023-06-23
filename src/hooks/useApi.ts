import axios from "axios";
import useSWR, { SWRConfiguration, SWRResponse } from "swr";

export const fetcher = (url: string, token: string | undefined) =>
  axios
    .get(url, {
      baseURL: `172.20.10.2:8080`,
      headers: { Authorization: token ? `Bearer ${token}` : `` },
    })
    .then(async ({ data }) => {
      return data;
    });

const useApi = <T>({ url }: { url: string | (() => string); _t: T }, token?: string, configs?: SWRConfiguration) => {
  const response = useSWR([typeof url === "function" ? url() : url, token], fetcher, {
    suspense: false,
    ...configs,
  });

  return response as SWRResponse<T, any>;
};

export default useApi;

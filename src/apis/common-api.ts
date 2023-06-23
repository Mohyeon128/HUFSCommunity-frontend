import { UserDTO } from "@_types/common-type";

export const baseURL = `http://172.20.10.2:8080`;

const CommonApi = {
  user: {
    url: `/users`,
    _t: {} as UserDTO,
  },
};

export default CommonApi;

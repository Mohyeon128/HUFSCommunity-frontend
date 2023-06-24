import { UserDTO } from "@_types/common-type";

export const baseURL = `https://api.calguksu.com`;

const CommonApi = {
  user: {
    url: `/users`,
    _t: {} as UserDTO,
  },
};

export default CommonApi;

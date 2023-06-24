import { UserDTO } from "@_types/common-type";

export const baseURL = `http://13.125.25.123:1005`;

const CommonApi = {
  user: {
    url: `/users`,
    _t: {} as UserDTO,
  },
};

export default CommonApi;

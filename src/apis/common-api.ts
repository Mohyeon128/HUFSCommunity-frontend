import { UserDTO } from "@_types/common-type";

const CommonApi = {
  user: {
    url: (uid: string) => `/user/${uid}`,
    _t: {} as UserDTO,
  },
};

export default CommonApi;

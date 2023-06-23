import { UserDTO } from "@_types/common-type";

export interface CurrentUserDTO {
  token?: string;
  data: UserDTO;
}

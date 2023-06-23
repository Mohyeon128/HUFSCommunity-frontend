import { UserDTO } from "@_types/common-type";

export interface AuthResult {
  successful: boolean;
  result: any;
}

export interface CurrentUserDTO {
  token?: string;
  data: UserDTO;
}

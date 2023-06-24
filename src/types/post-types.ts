import { UserDTO } from "./common-type";
import { TopicDTO } from "./topic-types";

export interface PostDTO {
  id: number;
  title: string;
  content: string;
  state: string;
  createdDate: Date;
  modifiedDate: Date;
  user: UserDTO;
  topics: TopicDTO[];
}

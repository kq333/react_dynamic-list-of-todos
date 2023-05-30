import { Todo } from './Todo';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  more: Todo[];
}

export interface Auth {
  email: string;
  password: string;
}

export interface User extends Auth {
  name: string;
  description: string;
}
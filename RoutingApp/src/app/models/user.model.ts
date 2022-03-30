export interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  about: string;
}

export interface UserSlim {
  id: string;
  username: string;
}

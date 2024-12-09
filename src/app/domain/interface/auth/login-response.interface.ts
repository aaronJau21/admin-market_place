export interface ILoginResponse {
  token: string;
  expires_in: number;
  user: IUser;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
}

export interface AppState {
  counter: number;
  userData: UserData | null;
  editorContent: string;
}
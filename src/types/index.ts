export interface Comment {
  noteID: string;
  commentID: string | undefined;
  comment: string;
}

export interface LoginForm {
  username: string;
  password: string;
  [key: string]: any;
}

export interface Detail {
  id: string;
  date: string;
  title: string;
  content: string;
  url: string;
  [key: string]: any;
}

export interface Photo {
  id: number;
  name: string;
  path: string;
  url: string;
  [key: string]: any;
}

export interface Audit {
  id: number;
  name: string;
  path: string;
  url: string;
  date: string;
  [key: string]: any;
}

export interface Route {
  path: string;
  name: string;
}

export interface Advice {
  title: string;
  advice: string;
  [key: string]: string;
}

export interface Comments {
  text: string;
  date: string;
}

export interface Option {
  value: string;
  name: string;
  disabled?: boolean;
  selected?: boolean;
}

export interface Paging {
  page: number;
  size: number;
  total: number;
  totalPage: number;
}

export interface Article {
  id: number;
  title: string;
  text: string;
  date: string;
  type: string;
}

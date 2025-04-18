export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  source: string;
  tags: string[];
}

export interface User {
  id: string;
  username: string;
  isAdmin: boolean;
}
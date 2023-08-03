export interface Product {
    _id?: string;
    name: string;
    price: number;
    description: string;
    image?: Image;
}

export interface Image{
    url: string
    public_id: string
}

export interface User {
    _id?: string;
    username: string;
    token: string;
  }

export interface UserRegister {
    _id?: string;
    username: string;
    password: string;
  
  }
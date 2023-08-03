
export interface Product {
    name: string;
    price: number;
    description: string;
    image?: Image;
}
export interface UploadedImage {
    name: string;
    data: Buffer;
    size: number;
    encoding: string;
    tempFilePath: string;
    truncated: boolean;
    mimetype: string;
    md5: string;
    mv: () => void; 
  }

  export interface Image{
    url: string
    public_id: string
}

export interface User{
  username: string
  password: string
}
export interface ICategory {
    name: string;
    description: string;
    type: number
}

export interface ICategoryAddResponse {
    category: ICategory;
    message: string;
}
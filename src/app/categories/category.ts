export interface ICategory {
    name: string;
    description: string;
    type: string;
}

export interface ICategoryAddResponse {
    category: ICategory;
    message: string;
}

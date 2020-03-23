export interface IAccountType {
    _id: string;
    name: string;
    description: string;
}

export interface IAccountTypeAddResponse {
    accountType: IAccountType;
    message: string;
}


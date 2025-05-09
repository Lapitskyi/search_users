export interface IUser
{
    id: number,
    name: string,
    username: string,
    avatar?: string,
    email: string,
    address: IAddressUser,
    phone: string,
    website: string,
    company: ICompanyUser
}

export interface IAddressUser {
    street: string,
    suite: string,
    city: string,
    zipcode: number,
    geo: {
        lat: number,
        lng: number
    }
}

export interface ICompanyUser {
    name: string,
    catchPhrase:string,
    bs: string
}
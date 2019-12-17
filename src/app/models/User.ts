export interface User {
    firstName: string,
    lastName?: string,
    email?: string,
    address?: {
        street: string,
        city: string,
        state: string
    },
    registered?: any,
    hide: boolean 
}
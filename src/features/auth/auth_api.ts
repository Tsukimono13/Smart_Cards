import {instance} from "app/common.api";


export const authApi = {
    register: (arg: ArgRegisterType) => {
        return instance.post<RegisterResponseType>("auth/register", arg)
    },
    login: (arg: ArgLoginType) => {
        return instance.post<LoginResponseType>("auth/login", arg)
    }
}

export type LoginResponseType = {
    _id: string;
    email: string;
    rememberMe: boolean;
    isAdmin: boolean;
    name: string;
    verified: boolean;
    publicCardPacksCount: number;
    created: string;
    updated: string;
    __v: number;
    token: string;
    tokenDeathTime: number;
}

export type ArgLoginType = {
    email: string,
    password: string,
    rememberMe: boolean
}

export type ArgRegisterType = Omit<ArgLoginType, 'rememberMe'>
export type RegisterResponseType = {
    addedUser: Omit<LoginResponseType, 'token' | 'tokenDeathTime'>;
}
export type NewProfileType = Omit<LoginResponseType, 'token' | 'tokenDeathTime'>

import {instance} from "common/api/common.api";


export const authApi = {
    register: (arg: ArgRegisterType) => {
        return instance.post<RegisterResponseType>("auth/register", arg)
    },
    login: (arg: ArgLoginType) => {
        return instance.post<ProfileType>("auth/login", arg)
    },
    me: () => {
        return instance.post<ProfileType>("auth/me")
    },
    forgot: (arg: ForgotPasswordType) => {
        return instance.post<any>("auth/forgot", arg)
    },
    logOut: () => {
        return instance.delete("auth/me")
    }
}

export type ArgRegisterType = Omit<ArgLoginType, 'rememberMe'>
export type RegisterResponseType = {
    addedUser: Omit<ProfileType, 'token' | 'tokenDeathTime'>;
}

export type ProfileType = {
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

export type NewProfileType = Omit<ProfileType, 'token' | 'tokenDeathTime'>
export type ForgotPasswordType = {
    email: string
    from?: string
    message: string
}
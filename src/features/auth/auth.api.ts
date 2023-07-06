import { instance } from 'common/api/api'

export const authAPI = {
  signIn(data: SignInType) {
    return instance.post<any>('auth/login', data)
  },
  signUp(data: SignUpType) {
    return instance.post<AddedUserType>('auth/register', data)
  },
  me() {
    return instance.get<AuthResponseType>('auth/me')
  },
  updateName() {
    return instance.put<any>('auth/me')
  },
  logout() {
    return instance.delete<any>('auth/me')
  },
  forgotPassword() {
    return instance.post<any>('auth/forgot')
  },
  setNewPassword() {
    return instance.post<any>('auth/set-new-password')
  },
  block() {
    return instance.post<any>('auth/block')
  },
}

export type SignUpType = {
  email: string
  password: string
}

export type SignInType = {
  email: string
  password: string
  rememberMe: boolean
}

export type AddedUserType = {
  addedUser: any
  error?: string
}

export type AuthResponseType = {
  _id: string
  email: string
  name: string
  avatar?: string
  publicCardPacksCount: number // количество колод
  created: Date
  updated: Date
  isAdmin: boolean
  verified: boolean // подтвердил ли почту
  rememberMe: boolean
  error?: string
}

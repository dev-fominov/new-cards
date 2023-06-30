import { instance } from "common/api/api"


export const authAPI = {
	login() {
		return instance.post<any>('auth/login')
	},
	register() {
		return instance.post<any>('auth/register')
	},
	me() {
		return instance.get<any>('auth/me')
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
	}
}


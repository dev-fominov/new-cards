import { instance } from "common/api/api"


export const packAPI = {
	getPack() {
		return instance.get<any>('cards/pack')
	}
}
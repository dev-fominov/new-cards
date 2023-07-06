import { instance } from 'common/api/api'

export const cardsAPI = {
  getCards() {
    return instance.get<any>('cards/card')
  },
}

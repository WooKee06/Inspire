import { makeAutoObservable, runInAction } from 'mobx'

interface Artwork {
	id: number
	title: string
	artist: string
	year: number
	image: string
}

type movementsType = {
	description: string
	history: string
	id: number
	image: string
	name: string
	artworks: Artwork[]
	year: number
	isMovementLiked?: boolean
}

class PreloaderStore {
	isLoading: boolean = true
	isInitialLoad: boolean = true
	bodyScrollHidden = true
	isLiked: boolean = false
	isMovementLiked: boolean = false
	favoriteAtrs: Artwork[] = []
	isLoaded = false
	movements: movementsType[] = []

	constructor() {
		makeAutoObservable(this)
		this.loadFromLocalStorage()
	}
	setIsLoading = (isLoading: boolean) => {
		this.isLoading = isLoading
	}
	setBodyScrollHidden = (bodyScrollHidden: boolean) => {
		this.bodyScrollHidden = bodyScrollHidden
	}
	addFavoriteAtrs = (artwork: Artwork) => {
		const existingIndex = this.favoriteAtrs.findIndex(
			item => item.id === artwork.id
		)
		const likedArtwork = { ...artwork, isLiked: true }

		runInAction(() => {
			if (existingIndex >= 0) {
				// Удаляем если уже есть в избранном
				this.favoriteAtrs.splice(existingIndex, 1)
			} else {
				// Добавляем если нет
				this.favoriteAtrs.push(likedArtwork)
			}
			this.saveToLocalStorage()
		})
	}

	addMovements = (movement: movementsType) => {
		const existingIndex = this.movements.findIndex(m => m.id === movement.id)

		const NewMovements = { ...movement, isMovementLiked: true }

		runInAction(() => {
			if (existingIndex >= 0) {
				this.movements.splice(existingIndex, 1)
			} else {
				this.movements.push(NewMovements)
			}
			this.saveToLocalStorage()
		})
	}

	saveToLocalStorage = () => {
		localStorage.setItem('favoriteMovements', JSON.stringify(this.movements))
		localStorage.setItem('favoriteArt', JSON.stringify(this.favoriteAtrs))
	}

	isFavorite = (id: number) => {
		return this.favoriteAtrs.some(item => item.id === id)
	}

	isMovementFavorite = (id: number) => {
		return this.movements.some(item => item.id === id)
	}

	completeInitialLoad = () => {
		this.isInitialLoad = false
	}

	loadFromLocalStorage = async () => {
		try {
			const [savedArts, savedMovements] = await Promise.all([
				localStorage.getItem('favoriteArt'),
				localStorage.getItem('favoriteMovements'),
			])

			runInAction(() => {
				this.favoriteAtrs = savedArts ? JSON.parse(savedArts) : []
				this.movements = savedMovements ? JSON.parse(savedMovements) : []
				this.isLoaded = true
			})
		} catch (e) {
			console.error('Ошибка загрузки:', e)
			runInAction(() => {
				this.favoriteAtrs = []
				this.movements = []
			})
		}
	}
}

const preloaderStore = new PreloaderStore()
export default preloaderStore

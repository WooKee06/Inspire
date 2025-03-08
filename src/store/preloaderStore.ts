import { makeAutoObservable } from 'mobx'

class PreloaderStore {
	isLoading: boolean = true
	isInitialLoad: boolean = true

	constructor() {
		makeAutoObservable(this)
	}
	setIsLoading = (isLoading: boolean) => {
		this.isLoading = isLoading
	}
	completeInitialLoad = () => {
		this.isInitialLoad = false
	}
}

const preloaderStore = new PreloaderStore()
export default preloaderStore

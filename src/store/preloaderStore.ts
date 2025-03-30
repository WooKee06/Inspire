import { makeAutoObservable } from 'mobx'

class PreloaderStore {
	isLoading: boolean = true
	isInitialLoad: boolean = true
	bodyScrollHidden = true

	constructor() {
		makeAutoObservable(this)
	}
	setIsLoading = (isLoading: boolean) => {
		this.isLoading = isLoading
	}
	setBodyScrollHidden = (bodyScrollHidden: boolean) => {
		this.bodyScrollHidden = bodyScrollHidden
	}
	completeInitialLoad = () => {
		this.isInitialLoad = false
	}
}

const preloaderStore = new PreloaderStore()
export default preloaderStore

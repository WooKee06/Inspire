import { useCallback } from 'react'
import './BackButton.scss'

const BackButton = () => {
	const handleClick = useCallback(() => {
		history.back()
	}, [])
	return (
		<button className='BackButton' onClick={handleClick}>
			<svg
				width='33'
				height='8'
				viewBox='0 0 33 8'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M0.646446 3.64644C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82842L1.70711 4L4.53553 1.17157C4.7308 0.976308 4.7308 0.659726 4.53553 0.464464C4.34027 0.269201 4.02369 0.269201 3.82843 0.464464L0.646446 3.64644ZM33 3.5L1 3.5L1 4.5L33 4.5L33 3.5Z'
					fill='white'
				/>
			</svg>
			Back
		</button>
	)
}

export default BackButton

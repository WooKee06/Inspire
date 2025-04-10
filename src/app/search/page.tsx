'use client'

import Filter from '@/components/filter/Filter'
import Header from '@/components/Header/Header'
import Gallery from '@/components/sections/Gellary/Gallery'
import { useState } from 'react'

const Search = () => {
	const [searchArtworks, setSearchArtworks] = useState<string>('')

	return (
		<>
			<Header />
			<div className='search-wrapper wrapper'>
				<Filter
					setSearchArtworks={setSearchArtworks}
					searchArtworks={searchArtworks}
				/>
				<Gallery searchArtworks={searchArtworks} />
			</div>
		</>
	)
}

export default Search

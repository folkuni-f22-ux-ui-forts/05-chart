import data from './icecream.json'

const colors = ['#279696', '#bae6ac', '#62a87c', '#c80000', '#6338e2']

export function getPieConfig() {
	// console.log('Icecream data: ', data)
	return {
		labels: data.map(obj => obj.type),
		datasets: [{
			label: 'Popular icecreams',
			data: data.map(obj => obj.popularity),
			backgroundColor: colors,
			// borderColor:
		}]
	}
}

export function getBarConfig() {
	const sortedData = [ ...data ].sort((a, b) => {
		if( a.popularity > b.popularity ) return -1
		else if (a.popularity < b.popularity ) return 1
		else return 0
	})
	return {
		labels: sortedData.map(obj => obj.type),
		datasets: [{
			label: 'Popular icecreams',
			data: sortedData.map(obj => obj.popularity),
			backgroundColor: colors,
			borderColor: ['#000000']
		}]
	}
}
import data from './icecream.json'


export function getConfig() {
	console.log('Icecream data: ', data)
	return {
		labels: data.map(obj => obj.type),
		datasets: [{
			label: 'Popular icecreams',
			data: data.map(obj => obj.popularity),
			backgroundColor: ['#279696', '#bae6ac', '#62a87c', '#c80000', '#6338e2'],
			// borderColors:
		}]
	}
}
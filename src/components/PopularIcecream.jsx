import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
import { Pie } from 'react-chartjs-2'


import { getConfig } from '../data/getIcecream'

const pieConfig = getConfig()


const PopularIcecream = () => {

	return (
		<section>
			<h2> Most popular icecream types! </h2>
			<Pie data={pieConfig} />
		</section>
	)
}

export default PopularIcecream

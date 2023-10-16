import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);
import { Pie, Bar } from 'react-chartjs-2'

// Uppgift: lägg till ett stapeldiagram
// För stapeldiagram behöver man: BarElement, LinearScale

import { getPieConfig, getBarConfig } from '../data/getIcecream'

const pieConfig = getPieConfig()
const barConfig = getBarConfig()


const PopularIcecream = () => {

	return (
		<section>
			<h2> Most popular icecream types! </h2>
			<Bar data={barConfig} />
			<Pie data={pieConfig} />
		</section>
	)
}

export default PopularIcecream

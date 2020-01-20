// Overview Page component
// Pages use the Grid component to establish a
// 12 column grid for content to exist in

import Grid from '../../../components/grid';
import Card from '../../../components/card';
import RESTChart from '../../../components/rest-chart';
import MiniChart from '../../../components/mini-chart';
import List from '../../../components/list';
import RESTList from '../../../components/rest-list';
import LocationItem from '../../../components/location-item';
const { __ } = wp.i18n;

const OverviewPage = () => {
	return (
		<Grid>
			<Card title={ __( 'Donations vs Income', 'give' ) } width={ 12 }>
				<RESTChart
					type="line"
					aspectRatio={ 0.4 }
					endpoint="donations-vs-income"
					showLegend={ false }
				/>
			</Card>
			<Card width={ 3 }>
				<MiniChart
					title="Mini Doughnut"
					type="doughnut"
					data={ {
						labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul' ],
						datasets: [
							{
								label: 'Donations',
								data: [ 400.00, 532.00, 333.00, 72.56, 300.00, 422.22 ],
							},
						],
					} }
				/>
			</Card>
			<Card width={ 3 }>
				<MiniChart
					title="Mini Line"
					type="line"
					data={ {
						labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul' ],
						datasets: [
							{
								label: 'Donations',
								data: [ 400.00, 532.00, 333.00, 72.56, 390.23, 350.00 ],
							},
						],
					} }
				/>
			</Card>
			<Card width={ 3 }>
				<MiniChart
					title="Mini Pie"
					type="pie"
					data={ {
						labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul' ],
						datasets: [
							{
								label: 'Donations',
								data: [ 400.00, 532.00, 333.00, 72.56, 300.00, 450.30 ],
							},
						],
					} }
				/>
			</Card>
			<Card width={ 3 }>
				<MiniChart
					title="Mini Bar"
					type="bar"
					data={ {
						labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul' ],
						datasets: [
							{
								label: 'Donations',
								data: [ 400.00, 532.00, 333.00, 72.56, 300.00, 450.00 ],
							},
						],
					} }
				/>
			</Card>
			<Card title={ __( 'Payment Methods', 'give' ) } width={ 4 }>
				<RESTChart
					type="doughnut"
					aspectRatio={ 0.6 }
					endpoint="payment-methods"
					showLegend={ true }
				/>
			</Card>
			<Card title={ __( 'Payment Statuses', 'give' ) } width={ 4 }>
				<RESTChart
					type="bar"
					aspectRatio={ 1.2 }
					endpoint="payment-statuses"
					showLegend={ false }
				/>
			</Card>
			<Card title={ __( 'Form Performance (All Time)', 'give' ) } width={ 4 }>
				<RESTChart
					type="pie"
					aspectRatio={ 0.6 }
					endpoint="form-performance"
					showLegend={ true }
				/>
			</Card>
			<Card title={ __( 'Top Donors', 'give' ) } width={ 4 }>
				<RESTList endpoint="top-donors" />
			</Card>
			<Card title={ __( 'Location List', 'give' ) } width={ 4 }>
				<List>
					<LocationItem
						city="Anacorts"
						state="Washington"
						country="United States"
						flag="flag.png"
						count="4 Donations"
						total="$345.00"
					/>
					<LocationItem
						city="Anacorts"
						state="Washington"
						country="United States"
						flag="flag.png"
						count="4 Donations"
						total="$345.00"
					/>
					<LocationItem
						city="Anacorts"
						state="Washington"
						country="United States"
						flag="flag.png"
						count="4 Donations"
						total="$345.00"
					/>
					<LocationItem
						city="Anacorts"
						state="Washington"
						country="United States"
						flag="flag.png"
						count="4 Donations"
						total="$345.00"
					/>
					<LocationItem
						city="Anacorts"
						state="Washington"
						country="United States"
						flag="flag.png"
						count="4 Donations"
						total="$345.00"
					/>
					<LocationItem
						city="Anacorts"
						state="Washington"
						country="United States"
						flag="flag.png"
						count="4 Donations"
						total="$345.00"
					/>
					<LocationItem
						city="Anacorts"
						state="Washington"
						country="United States"
						flag="flag.png"
						count="4 Donations"
						total="$345.00"
					/>
					<LocationItem
						city="Anacorts"
						state="Washington"
						country="United States"
						flag="flag.png"
						count="4 Donations"
						total="$345.00"
					/>
				</List>
			</Card>
			<Card title={ __( 'Recent Donations', 'give' ) } width={ 4 }>
				<RESTList endpoint="recent-donations" />
			</Card>
		</Grid>
	);
};
export default OverviewPage;

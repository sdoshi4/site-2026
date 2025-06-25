import Card from '@/card';
import ScheduleItem from '@/schedule-item';
import { Component } from 'react';
import { Fragment } from 'react';
import Arrows from './Arrows';
import PaginateItem from './paginateItem';

export default class Paginate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: 0,
			height: 0,
			items_per_page: 1,
			rows: 1,
			total_pages: 0,
			page: 0,
			w_size: ''
		};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions(this.props);
		window.addEventListener('resize', () => this.updateWindowDimensions(this.props));
	}

	componentWillUnmount() {
		window.removeEventListener('resize', () => this.updateWindowDimensions(this.props));
	}

	componentWillReceiveProps(nextProps) {
		// You don't have to do this check first, but it can help prevent an unneeded render
		if (nextProps.items.length != this.props.items.length) {
			this.updateWindowDimensions(nextProps);
		}
	}

	updateWindowDimensions(props) {
		const width = window.innerWidth;
		const { lg_cols, md_cols, sm_cols, lg_rows = 3, md_rows = 2, sm_rows = 1, lg_at = 1535, md_at = 1200 } = props;

		const w_size = width > lg_at ? 'lg' : 'sm';
		const rows = w_size === 'lg' ? lg_rows : w_size === 'md' ? md_cols : sm_cols;

		const items_per_page =
			w_size === 'lg' ? lg_cols * lg_rows : w_size === 'md' ? md_rows * md_cols : sm_rows * sm_cols;
		let page = items_per_page === this.state.items_per_page ? this.state.page : 0;
		let total_pages = Math.ceil(props.items.length / items_per_page);
		if (page >= total_pages) page = total_pages - 1;
		if (page < 0) page = 0;
		if (total_pages === 0) total_pages = 1;

		console.log(window.innerWidth, window.innerHeight, rows, w_size);

		this.setState({
			width: window.innerWidth,
			height: window.innerHeight,
			page,
			rows,
			items_per_page,
			total_pages,
			w_size
		});
	}

	render() {
		const { items, onClick, large_per_page, white, thick, thin, center } = this.props;
		const { page, rows, items_per_page, total_pages, w_size } = this.state;

		let smaller_items = [];
		smaller_items = items.slice(page * items_per_page, (page + 1) * items_per_page);

		let min_height = 0;
		if (thick) {
			min_height = 192 * rows + (rows - 1) * 4;
		} else {
			min_height = 128 * rows + (rows - 1) * 4;
		}
		min_height += 123.58; // arrows

		return (
			<div>
				{total_pages != 1 && (
					<Fragment>
						<Arrows
							white={white}
							page={page}
							total_pages={total_pages}
							onIncrease={() => this.setState({ page: page + 1 })}
							onDecrease={() => this.setState({ page: page - 1 })}
							center={center}
						/>
						<div className="h-5" />
					</Fragment>
				)}
				<div
					className={`grid grid-cols-1 gap-4`}
					style={{
						gridTemplateColumns: 'repeat(' + items_per_page / rows + ', minmax(0, 1fr))'
					}}
				>
					{smaller_items.map(
						(
							{
								times,
								urls,
								event,
								location,
								descriptionShort,
								descriptionLong,
								locationLong,
								rsoName,
								tag1,
								tag2,
								tag3
							},
							i
						) => (
							<PaginateItem
								key={i}
								times={times}
								event={event}
								urls={urls}
								locationLong={locationLong}
								location={location}
								descriptionShort={descriptionShort}
								descriptionLong={descriptionLong}
								rsoName={rsoName}
								onClick={onClick}
								thick={thick}
								tag1={tag1}
								tag2={tag2}
								tag3={tag3}
								thin={thin}
								// thin={large_per_page < 6 || w_size !== "lg"}
							/>
						)
					)}
					{smaller_items.length === 0 && <p>No Matching Event Found :(</p>}
				</div>
				<br />
				{total_pages != 1 && (
					<Arrows
						white={white}
						page={page}
						total_pages={total_pages}
						onIncrease={() => this.setState({ page: page + 1 })}
						onDecrease={() => this.setState({ page: page - 1 })}
						center={center}
					/>
				)}
			</div>
		);
	}
}

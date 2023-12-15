import './Loading.scss';
const Loading = () => {
	return (
		<section className="loading-wrapper">
			<div className="loading">
				<img src='https://i.pinimg.com/originals/27/3a/c6/273ac6af63860fcd01736836fdf53cc3.gif?raw=true' alt="loading" />
				<div>Loading...</div>
			</div>
		</section>
	);
};

export default Loading;

import './Latestyt.css'
interface TLatestyt {
	src: string,
	marginTop?: string
}
const Latestyt = ({src,marginTop}:TLatestyt) => {
	return <>
	<div className="latest-video-container">
		<iframe src={src} style={{marginTop, marginBottom:'40px'}} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true} ></iframe>
	</div>
	</>
}

export default Latestyt
import blog_pic from '../asset/sumo-blogs.png'
import './Blogheader.css'
interface BlogProps {
	heading: string;
	date?: string;
	authorName?: string;
}

const Blogheader = ({heading, date}:BlogProps) => {

	return (
		<div className="blog-header">
			<h1 className="blog-heading">{heading}</h1>
			<div className="blog-header-ft">
				<div className="header-ft-left">
					<img height={50} width={50} style={{borderRadius:'50%'}} src={blog_pic} alt="sumit-so" />
					<p>Sumit So</p>
				</div>
				<div className="header-ft-right">
					{date}
				</div>
			</div>
		</div>
	)
}

export default Blogheader
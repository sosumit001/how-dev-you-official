
import {useNavigate} from 'react-router-dom'
import './Bloglink.css'

interface BloglinkProps {
	linktext:string,
	url:string,
	date:string,
	shortDes?:string,
	tags?:string[],
	YT_THUMB?:string
}


const Bloglink = ({linktext, url, date, shortDes, tags, YT_THUMB} : BloglinkProps) => {

	const navigate = useNavigate()
	const BloglinkStyle : React.CSSProperties = {
		display:'flex',
		flexDirection:'column',
		alignItems:'center',
		width:'90%',
		textAlign:'left',
		WebkitTapHighlightColor:'rgba(0,0,0,0)',
		justifyContent:'left',
		backgroundColor:"whitesmoke",
		padding:'30px 0px',
		marginBottom:'30px',
		// border:"2px solid",
		marginTop:"50px"
		// borderRadius:"20px"
	}
	

	return (
		<header style={BloglinkStyle}>
			<h1 style={{cursor:'pointer', margin:'0px' ,fontSize:'clamp(23px, 2.5vw, 50px)'}} onClick={() => navigate(url)} >{linktext}</h1>
			<p style={{margin:'0px',fontSize:'0.9rem'}}>{date}</p>
			<div style={{display:'flex', flexWrap:'wrap' ,width:'90%' ,gap:'10px', padding:'10px'}}>
				{
					tags?.map((ele, key) => {
						return (
							<span key={key} style={{cursor:'default' ,border:'1px solid black',fontSize:'0.8rem',background:'black',color:'white', padding:'5px 10px 5px', borderRadius:'5px'}}>{ele}</span>
						)
					})
				}
			
			</div>
			<div className='inner_blog_link' style={{justifyContent:'space-around', paddingBottom:'30px',margin:'20px 0px 20px', background:'black', color:'white', display:'flex',gap:'10px', backgroundColor:'black', width:'90%', padding:'2.5%'}}>
				<div style={{  fontSize:'clamp(20px, 1vw + 0.9rem, 23px)'}}>{shortDes}</div>
				<img src={YT_THUMB} alt="blah" />
			</div>
			<p   style={{margin:'0px',textDecoration:"underline", cursor:'pointer', WebkitTapHighlightColor:'rgba(0,0,0,0)'}}onClick={() => navigate(url)}>read more</p>
		</header>
	)
}

export default Bloglink

import {useNavigate} from 'react-router-dom'

interface BloglinkProps {
	linktext:string,
	url:string,
	date:string,
	shortDes?:string,
	tags?:string[]
}


const Bloglink = ({linktext, url, date, shortDes, tags} : BloglinkProps) => {

	const navigate = useNavigate()
	const BloglinkStyle : React.CSSProperties = {
		display:'flex',
		flexDirection:'column',
		alignItems:'center',
		width:'90%',
		textAlign:'left',
		WebkitTapHighlightColor:'rgba(0,0,0,0)',
		justifyContent:'left',
		backgroundColor:"white",
		padding:'30px 0px',
		marginBottom:'30px',
		border:"2px solid",
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
			<div style={{width:'90%',fontSize:'clamp(20px, 1vw + 0.9rem, 23px)'}}>{shortDes}</div>
			<p   style={{margin:'0px',textDecoration:"underline", cursor:'pointer', WebkitTapHighlightColor:'rgba(0,0,0,0)'}}onClick={() => navigate(url)}>read more</p>
		</header>
	)
}

export default Bloglink
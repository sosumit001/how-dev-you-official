import {useNavigate} from 'react-router-dom'

interface BloglinkProps {
	linktext:string,
	url:string
}


const Bloglink = ({linktext, url} : BloglinkProps) => {

	const navigate = useNavigate()
	const BloglinkStyle : React.CSSProperties = {
		display:'flex',
		alignItems:'center',
		width:'90%',
		// margin:'20px auto',
		minHeight:'50px',
		cursor:'pointer',
		textAlign:'left',
		borderBottom:'1px solid',
		padding:'10px',
		WebkitTapHighlightColor:'rgba(0,0,0,0)'
		// padding:'10px 5px 10px'
	}

	return (
		<div style={BloglinkStyle} onClick={() => navigate(url)}>
			{linktext} 
		</div>
	)
}

export default Bloglink
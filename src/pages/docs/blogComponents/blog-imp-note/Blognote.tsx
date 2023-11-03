import './Blognote.css'
interface TBlognote  {
	heading?: string
	text : String
}

const CSSBlognote: React.CSSProperties = {
	width:'calc(95% - 40px)',
	borderRadius:'20px',
	display:'flex',
	flexDirection:'column',
	marginLeft:'20px',
	marginRight:'20px',
	padding:'20px'
}

const Blognote = ({text,heading}:TBlognote) => {
	return ( 
		<div className='blognote-container' style={CSSBlognote}>
			<h2 className="blognote-heading" style={ {textAlign:'center', fontSize:'clamp(10px, 1vw + 0.9rem, 23px)'} }>{heading}</h2>
			<div className="blognote-text">{text}</div>
		</div>
	)
}
 
export default Blognote
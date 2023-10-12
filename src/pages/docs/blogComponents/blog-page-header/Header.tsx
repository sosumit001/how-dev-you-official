import github_logo from '../asset/github-logo.svg'
import youtube_logo from '../asset/youtube-logo.svg'
import linkedin_logo from '../asset/linkedin-logo.svg'

const Header = () => {

	return (
		<div style={{position:'sticky', backgroundColor:'#ededed' , top:'0px' ,display:'flex', alignItems:'center',paddingLeft:'5%',paddingRight:'5%' ,width:'80%', margin:'20px 0px 30px'}}>
			<h2 style={{fontSize:'clamp(18px ,2vw, 30px)'}}>How Dev You</h2>
			<div style={{display:'flex', gap:'10px'}}>
				<a style={{WebkitTapHighlightColor:'rgba(0,0,0,0)'}} href="https://youtube.com/@howdevyou" target="_blank">
					<img width={40} src={youtube_logo} alt="youtube" />
				</a>
				<a style={{WebkitTapHighlightColor:'rgba(0,0,0,0)'}} href="https://github.com/sosumit001" target="_blank" >
					<img width={40} src={github_logo} alt="github" />
				</a>
				<a style={{WebkitTapHighlightColor:'rgba(0,0,0,0)'}} href="https://www.linkedin.com/in/sumit-so-1415881a1/" target="_blank">
					<img width={40} src={linkedin_logo} alt="linkedin" />
				</a>
			</div>
		</div>
	)
}

export default Header
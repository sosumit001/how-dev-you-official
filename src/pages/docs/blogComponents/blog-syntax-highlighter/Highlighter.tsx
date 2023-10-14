import SyntaxHighlighter from 'react-syntax-highlighter';
import { googlecode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface THighlighter {
	codeString:string,
	language?:string
}

const Highlighter = ({codeString, language}:THighlighter) => {
	return ( 
		<SyntaxHighlighter 
			language = {language} 
			style = {googlecode}
			customStyle={{
				fontSize:'clamp(15px ,1.9vw, 20px)',
				borderRadius:'10px',
				width:'calc(90% - 25px)',
				paddingLeft:'25px',
				paddingTop:'20px',
				paddingBottom:'20px',
				border:'1px solid grey',
				background:'#ededed',
			
			}}
		>
		{codeString}
		</SyntaxHighlighter>
	 );
}
 
export default Highlighter;
import './BlogLayout.css'
import {Helmet} from 'react-helmet'

interface BlogLayoutProps {
	MDXComp:any,
	title?:string
}

const BlogLayout = ({MDXComp,title}:BlogLayoutProps ) => {
	
	// const content:string = fs.readFileSync(`../docs/${mdxFile}`,'utf-8')

	return ( 
    <div id= "blogWrapper">
		<Helmet>
			<title>{title}</title>
		</Helmet>
		<MDXComp/>
    </div>
  );
};

export default BlogLayout;

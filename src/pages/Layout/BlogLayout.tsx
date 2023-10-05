import './BlogLayout.css'

interface BlogLayoutProps {
	MDXComp:any
}

const BlogLayout = ({MDXComp}:BlogLayoutProps ) => {
	
	// const content:string = fs.readFileSync(`../docs/${mdxFile}`,'utf-8')

	return ( 
    <div id= "blogWrapper">
		<MDXComp/>
    </div>
  );
};

export default BlogLayout;

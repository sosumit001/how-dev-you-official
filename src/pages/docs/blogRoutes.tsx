import BlogLayout from "./Layout/BlogLayout"

import { Route } from "react-router-dom"

const blogPosts = import.meta.glob("../docs/**/*.mdx", {import: "default", eager: true})

const blogRoutes = () => {
	return Object.entries(blogPosts).map(([path, component]) => {
		let routePath
		let title
		
		// const MDXComponent = module.default
		// const title = module.metadata?.title || 'Default Title'
		
		if (path.includes('/home.mdx')) {
		  routePath = '/'
		  title = "Sumit So."
		} else if (path.includes('/blogs/blogs.mdx')) {
		  routePath = '/blogs'
		  title = "Sumit So | Blogs"
		} else {
		  // Extract a route path like '/blogs/2023/filename'
		  routePath = path.replace('./', '').replace('.mdx', '')
		  title = routePath.replace('/', " ")
		}

		return <Route key={routePath} path={routePath} element = {<BlogLayout MDXComp={component} title = {title} />} />
	})
	}

 
export default blogRoutes

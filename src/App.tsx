// import fs from 'fs'

import './App.css'

import Blogs from './pages/docs/blogs/blogs.mdx'
import { Route,Routes } from 'react-router-dom'
import BlogLayout from './pages/Layout/BlogLayout'
import GithubAuth from './pages/docs/blogs/2023/github-auth.mdx'
import Asynchronous from './pages/docs/blogs/2023/asynchronous-programming.mdx'

// importing blog
function App() {

  return (
    <>
      <div id="App">
        <Routes>
          <Route path='/' element = {<BlogLayout MDXComp={Blogs} />} />
          <Route path='/blogs/2023/github-auth' element = {<BlogLayout MDXComp={GithubAuth} />}/>
          <Route path='/blogs/2023/asynchronous-programming' element = {<BlogLayout MDXComp={Asynchronous} />}/>
        </Routes>
      </div>
    </>
  )
}

export default App

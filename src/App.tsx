// import fs from 'fs'

import './App.css'

import Blogs from './pages/docs/blogs/blogs.mdx'
import { Route,Routes } from 'react-router-dom'
import BlogLayout from './pages/Layout/BlogLayout'
import GithubAuth from './pages/docs/blogs/2023/github-auth.mdx'
import Asynchronous from './pages/docs/blogs/2023/asynchronous-programming.mdx'
import PrimitiveAndReferenceTypes from './pages/docs/blogs/2023/primitive-reference-datatypes.mdx'
import OpenaiAssistantsApis from './pages/docs/blogs/2023/openai-assistants-api.mdx'

// importing blog
function App() {

  return (
    <>
      <div id="App">
        <Routes>
          <Route path='/' element = {<BlogLayout title='How Dev You . Official Blog Page' MDXComp={Blogs} />} />
          <Route path='/blogs/2023/github-auth' element = {<BlogLayout title='Github auth 2.0' MDXComp={GithubAuth} />}/>
          <Route path='/blogs/2023/asynchronous-programming' element = {<BlogLayout title="Asynchronous javascript programming || Callbacks, Promises & Async/Await" MDXComp={Asynchronous} />}/>
          <Route path='/blogs/2023/primitive-and-reference-types' element = {<BlogLayout title="Javascript Primitive and Reference Data Types" MDXComp={PrimitiveAndReferenceTypes} />}/>
          <Route path='/blogs/2023/openai-assistants-api' element = {<BlogLayout title="OpenAI Assistants APIs :Assistant, Threads and Runs" MDXComp={OpenaiAssistantsApis} />}/>

        </Routes>
      </div>
    </>
  )
}

export default App

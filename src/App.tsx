import { Routes } from 'react-router-dom'
import './App.css'
// import BlogLayout from './pages/docs/Layout/BlogLayout'

// import Blogs from './pages/docs/blogs/blogs.mdx'
// import Home from './pages/docs/home.mdx'



// import GithubAuth from './pages/docs/blogs/2023/github-auth.mdx'
// import Asynchronous from './pages/docs/blogs/2023/asynchronous-programming.mdx'
// import PrimitiveAndReferenceTypes from './pages/docs/blogs/2023/primitive-reference-datatypes.mdx'
// import OpenaiAssistantsApis from './pages/docs/blogs/2023/openai-assistants-api.mdx'
// import BlobWebApi from './pages/docs/blogs/2024/webapis-blob.mdx'

import blogRoutes from './pages/docs/blogRoutes'

function App() {

  const routes = blogRoutes()
  
  return (
    <>
      <div id="App">
        <Routes>
          {
            routes
          }
          {/* <Route path='/' element = {<BlogLayout title='Sumit So' MDXComp={Home} />} /> */}
        
        {/* blogs 2023 */}
          {/* <Route path='/blogs' element = {<BlogLayout title='Sumit So . Official Blog Page' MDXComp={Blogs} />} />
          <Route path='/blogs/2023/github-auth' element = {<BlogLayout title='Github auth 2.0' MDXComp={GithubAuth} />}/>
          <Route path='/blogs/2023/asynchronous-programming' element = {<BlogLayout title="Asynchronous javascript programming || Callbacks, Promises & Async/Await" MDXComp={Asynchronous} />}/>
          <Route path='/blogs/2023/primitive-and-reference-types' element = {<BlogLayout title="Javascript Primitive and Reference Data Types" MDXComp={PrimitiveAndReferenceTypes} />}/>
          <Route path='/blogs/2023/openai-assistants-api' element = {<BlogLayout title="OpenAI Assistants APIs :Assistant, Threads and Runs" MDXComp={OpenaiAssistantsApis} />}/> */}
        {/* blogs 2024 */}
        {/* <Route path='/blogs/2024/blob-webapis' element = {<BlogLayout title='Blob | Web APIs' MDXComp={BlobWebApi} />}/> */}

        </Routes>
      </div>
    </>
  )
}

export default App

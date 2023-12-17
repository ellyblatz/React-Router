  import './App.css'
  import { useState, useEffect} from 'react'
  import axios from 'axios'
  import { Link, useLocation, Routes, Route } from 'react-router-dom'
  import Homepage from './assets/homepage'
  import Users from './assets/users'
  import Posts from './assets/posts'
  import SingleUser from './assets/SingleUser'
  import SinglePost from './assets/SinglePost'






function App() {

  /* ~ states ~ */
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])






  const location = useLocation()
  //console.log(location)
  const {pathname} = location
  //console.log(pathname)





  /*~~~~~~~~~~~~~~~~~~~~~~~DATA CALLS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


  /* ~ useEffect to call for data ~ */
  useEffect(() => {
    const fetchUsers = async() => {
        const response = await axios.get ('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
      //console.log(response.data)
      setUsers(response.data)
    
      }
    fetchUsers()
  },[])

  useEffect (() => {
      const fetchPosts = async () => {
          const response = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts')
          setPosts (response.data)
          //console.log(response.data)
      }
          fetchPosts()
  }, [])
  


/* ~ visible stuff ~ */
  return (
    
 <div>
    <div>
        <nav>
          <Link to="/" className={pathname === '/' ? "selected" : ""}>Home</Link>
          <Link to="/users" id="red" className={pathname === '/users' ? "selected" : ""}>Users - {users.length}</Link>
          <Link to="/posts" id="blue" className={pathname === '/posts' ? "selected" : ""}>Posts - {posts.length}</Link>
        </nav>

      <Routes>
          <Route path ='/' element={<Homepage/>}/>
          <Route path ='/users' element={<Users users={users}/>}/>
          <Route path ='/users/:id' element={<SingleUser users={users}/>}></Route>
          <Route path ='/posts' element={<Posts posts={posts}/>}/>
          <Route path ='/posts/:id' element={<SinglePost posts={posts}/>}></Route>

      </Routes>



    </div>
 </div>
  )
}

export default App

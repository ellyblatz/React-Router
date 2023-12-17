import { useParams, Link } from "react-router-dom"

const SinglePost = ({posts}) => {
    console.log

    const params = useParams()
    const id = params.id*1

    const post = posts.find((post) => {
        return post.id === id
    })

    if (!post) {
        return null
    }

    return (
        <div>
            <h1> {post.title} </h1>
            <h3> {post.body}</h3>


            <Link to='/posts'>
                Back to all Posts.
                </Link>

        </div>
    
    )
} 

export default SinglePost
import { useParams, Link } from "react-router-dom"


const SingleUser = ({users}) => {
        const params = useParams()
        //console.log(params)
        const id = params.id*1

        const user = users.find ((user)=> {
            return user.id === id
        }) 

    if (!user) {
        return null
    }
        
        return (
            <div>
                <h1>{user.name}</h1>
                <h3>Username: {user.username}</h3>
                <h3>Email: {user.email}</h3>

                <Link to='/users'>
                Back to all Users.
                </Link>

                
            </div>
        )
}

export default SingleUser
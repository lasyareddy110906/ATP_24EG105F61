function User(props){
     let {User}=props
    return(
        <div className="flex border-2 ">
            <h2>{User.name}</h2>
            <p>{User.mail}</p>
            <p>{User.image}</p>
        </div>
    )
}



export default User
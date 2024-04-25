import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AuthForm({authFunction, ...rest}) {
    const navigate = useNavigate()
    const data = {...rest}
    const {login} = data
    const [userForm, setUserForm] = useState({username: '', password: ''})

    function handleChange(event){
        setUserForm({...userForm, [event.target.name]:event.target.value})
    }
    async function handleSubmit(event){
        event.preventDefault()
        try{
            const response = await authFunction(userForm)
            navigate('/')
        } catch(error){
            console.log(error)
            navigate('/login')
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        required
        name="username"
        placeholder="enter username"
        onChange={handleChange}
        value={userForm.username} />
        <input 
        type="password"
        required
        name="password"
        placeholder="enter password"
        onChange={handleChange}
        value={userForm.password} />
        <input type="submit" value={login? 'login': 'register'}/>
    </form>
  )
}

export default AuthForm
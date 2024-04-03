import { useState, useEffect } from "react"
import { useParams,useNavigate } from "react-router-dom"

function Update() {
    const {id} = useParams()
    const URL = process.env.REACT_APP_API_URL + `/people/${id}`
    const navigate = useNavigate()
    const [newForm, setForm] = useState(null)
    
    function handleChange(event){
        setForm({...newForm, [event.target.name]: event.target.value})
    } 

    function updatePerson(event){
        event.preventDefault()
        try{
            fetch(URL, {
                method: "PUT",
                body: JSON.stringify(newForm),
                headers: {"Content-Type": "application/json"}
            })
            navigate(`/${id}`)
        } catch(error){
            console.log(error)
        }
    }
    
    function getPerson(){
        try{
            fetch(URL)
            .then((res)=>res.json())
            .then((data)=>setForm(data))
        } catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getPerson()
    },[])

    function loading(){
        return <section className="peopleList"><h1>Hold on a sec...
            <span>
                <img className="spinner" src="https://freesvg.org/img/1544764567.png" />
            </span>
         </h1>
        </section>
    }

    function loaded(){
        return (
            <div>
                <form onSubmit={updatePerson}>
                    <input type="text" placeholder="name" value={newForm.name} onChange={handleChange} name="name"/>
                    <input type="text" placeholder="image" value={newForm.image} onChange={handleChange} name="image"/>
                    <input type="text" placeholder="title" value={newForm.title} onChange={handleChange} name="title"/>
                    <button type="submit">Update Person</button>
                </form>
            </div>
          )
    }
    return newForm ? loaded(): loading() 
}

export default Update
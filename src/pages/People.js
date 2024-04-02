import { useState,useEffect } from "react"

function People() {
    const [people,setPeople] = useState([])
    const [newForm,setForm] = useState({
        name: "",
        image: "",
        title: ""
    })
    const URL = process.env.REACT_APP_API_URL + '/people'
    function handleChange(event){
        setForm({...newForm, [event.target.name]: event.target.value})
    } 
    function handleSubmit(event){
        event.preventDefault()
        try{
            fetch(URL, {
                method: "post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newForm)
            })
            .then(()=>getPeople())
        } catch(error){
            console.log(error)
        }
        setForm({
            name: "",
            image: "",
            title: ""
        })
    }
    function getPeople(){
        try{
            fetch(URL)
            .then((res)=>res.json())
            .then((data)=>setPeople(data))
        } catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getPeople()
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
            <>
                <section className="peopleList">
                    {people.map((person)=>(
                        <div className="personCard">
                            <h1>{person.name}</h1>
                            <img src={person.image} className="myImage"/>
                            <p>{person.title}</p>
                        </div>
                    ))}
                </section>
                <section>
                    <h2>Create new person</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="name" value={newForm.name} onChange={handleChange} name="name"/>
                        <input type="text" placeholder="image" value={newForm.image} onChange={handleChange} name="image"/>
                        <input type="text" placeholder="title" value={newForm.title} onChange={handleChange} name="title"/>
                        <button type="submit">Create a Person</button>
                    </form>
                </section>
            </>
          )
    }
    return  people ? loaded() : loading()
}  

export default People
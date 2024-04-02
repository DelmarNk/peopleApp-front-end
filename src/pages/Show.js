//first get the id from the URL with useParams
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"

function Show() {
    const {id} = useParams()
    const [person, setPerson] = useState(null)
    const URL = process.env.REACT_APP_API_URL + `/people/${id}`
    console.log(URL)
    function getPerson(){
        try{
            fetch(URL)
            .then((res)=>res.json())
            .then((data)=>setPerson(data))
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
            <div className="person">
                <h1>{person.name}</h1>
                <p>{person.title}</p>
                <img src={person.image}/>
            </div>
          )
    }
    return person ? loaded(): loading()
}

export default Show
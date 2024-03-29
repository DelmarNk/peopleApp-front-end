import { useState,useEffect } from "react"

function People() {
    const [people,setPeople] = useState([])
    const URL = process.env.REACT_APP_API_URL + '/people'
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
            <section className="peopleList">
                {people.map((person)=>(
                    <div>
                        <h1>{person.name}</h1>
                        <img src={person.image}/>
                        <p>{person.title}</p>
                    </div>
                ))}
            </section>
          )
    }
    return  people ? loaded() : loading()
}  

export default People
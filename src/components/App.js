import { useEffect } from "react";
import { useState } from "react";
import react from "react";
function App(){
    const [summonedYet, setSummonedYet] = useState(false);
    const [pic, setPic] = useState("string");

    function hanSummon(){
        setSummonedYet(true);
    }
    function hanPic(z){
        setPic(z)
    }

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r=>r.json())
        .then(r=>{
            hanSummon()
            hanPic(r.message)
        })
    }, [])
    return <div>
        {!summonedYet ? <p>Loading...</p> : <img src = {pic} alt = "A Random Dog"></img>}
    </div>
}
export default App;
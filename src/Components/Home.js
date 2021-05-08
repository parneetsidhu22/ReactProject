import React,{useState ,useEffect} from 'react'
import Navbar from './Navbar'
import axios from 'axios'



export default function Home() {
    const [data,setData] = useState(null)
   useEffect(()=>{
        axios.get('/app')
        .then((res) => {
<<<<<<< HEAD
            setData(res.data)
        })
    },[])
    
=======
            console.log(res)
    })
>>>>>>> c7ccea5f7a3471127fa4bfe48d6be91785ac85b3

    return (
        <div>
            
            <Navbar />

            <h1>Hello world</h1>    
            <h2>{ data ? (
                        data.map((value, index) => {
                          return <li key={index}>{value.name}</li>
                        })) : null}
                        </h2>
        </div>
    )
}

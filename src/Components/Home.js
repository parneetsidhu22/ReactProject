import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'



export default function Home() {
    axios.get('/app')
        .then((res) => {
            console.log(res)
        })

    return (
        <div>
            
            <Navbar />

            <h1>Hello world</h1>
        </div>
    )
}

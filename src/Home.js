
import React,{memo} from 'react'

const Home = ({data}) => {
  console.log("inner component", data)
  return (
    <div>
     <h1> Home Component</h1>
     <div>Count memo:{data} </div>
    </div>
  )
}

export default Home

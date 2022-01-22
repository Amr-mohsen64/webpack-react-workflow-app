import React from 'react'
import './App.css'
import Img from './logo.png'

const App = () => {
    return (
        <div className="App">
            <h1>Hello from App Component</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum praesentium dignissimos saepe, beatae aspernatur recusandae cum animi in, quo quis dolores incidunt officiis facilis nesciunt dicta porro cumque nostrum enim.</p>
            <img src={Img} alt="a" />
        </div>
    )
}
export default App;
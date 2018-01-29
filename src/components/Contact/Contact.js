import React, { Component } from "react"
import "./contact.css"

class Contact extends Component {
   
render(){
    return(
        <div>
            <h2> Contact Us </h2>
            <div className="textcontainer">
            <p> Thank you for checking out SomethingToDo.me to help you with your event planning. Hopefully you found some fun things to do in your area!</p>
            <p> Keep checking back for updated event information. Don't forget to login and save your favorite events!</p>
            <p>If you have any questions or comments, please contact me at admin@somethingtodo.me. You can also find me on <a href="https://www.linkedin.com/mynetwork/">LinkedIn</a></p>
            </div>
            </div>
    )
}

}

export default Contact
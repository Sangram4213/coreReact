import React from "react";
import UserContext from "../utils/userContext";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"",
                location:""

            }
        }
    }

    async componentDidMount(){
         const data = await fetch("https://api.github.com/users/akshaymarch7");
         const json = await data.json();
         console.log("Dis Mount!");
         this.setState({
            userInfo:json,
         })
    }
    componentDidUpdate(){
        console.log("Component is updated");
    }
    componentWillUnmount(){
        console.log("Page change");
    }
    render(){
        const {name,location,} = this.state.userInfo;
        console.log("render");

        return (
            <div className='user-card'>
                <h2>Name: {name}</h2>
                <div>
                    LoggedIn User: <UserContext.Consumer>
                        {(data)=>data.loggedInUser}
                    </UserContext.Consumer>
                </div>
                <h3>Location: {location}</h3>
                <h4>Contact: @sangram4213</h4>
            </div>
          )
    }
}

export default UserClass;
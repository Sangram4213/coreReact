import React from "react";
import User from "./User";
import UserClass from './userClass';

class About extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
  }

  render(){
    return (
      <div>
        <h1>About</h1>
        <UserClass/>
      </div>
    )
}
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <User />
//       <UserClass name={"Sangram Wabe"} location={"Baramati"}/>
//     </div>
//   );
// };

export default About;

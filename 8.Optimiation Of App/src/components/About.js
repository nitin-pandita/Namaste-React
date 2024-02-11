import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  render() {
    console.log("Parent Rendering");
    return (
      <div>
        <h3>Welcome to the About Routing Page</h3>
        <User name={"Nitin Pandita Function"} />
        <UserClass
          name={"Nitin Pandita"}
          location={"Location is Jammu and Kashmir"}
        />
        <UserClass
          name={"Kartik Pandita"}
          location={"Location is Maharashtra "}
        />
      </div>
    );
  }
}

export default About;

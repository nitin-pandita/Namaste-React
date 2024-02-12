import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "location",
        avatar_url: "Dummy avatar",
      },
    };
    console.log("Constructor is called");
    // console.log("Child Constructor is loaded");
  }

  async componentDidMount() {
    console.log("Component is mounted..");
    const data = await fetch("https://api.github.com/users/nitin-pandita");
    // Make API call over here

    const json = await data.json();

    // updating the state
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component has been updated ");
  }

  componentWillUnmount() {
    console.log("Component has been unmounted");
  }
  render() {
    console.log("Render method is Rendered");
    // console.log(this.props.name + " Child is Rendered");
    const { name, bio, followers, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h3>Name: {name}</h3>
        <img src={avatar_url} style={{ width: "200px" }} />
        <h5>Age: 22</h5>
        <h5>Bio: {bio}</h5>
        <h5>Followers: {followers}</h5>
      </div>
    );
  }
}

export default UserClass;

# Let’s Get Classy

## ClassBased Components:

A class-based component is a old way of writting code. Nowadays we use function based components

Let’s first see how we can create a Function based components.

```jsx
// so this is the example of functional based component
const User = () => {
  return (
    <div className="user-card">
      <h3>Name: Nitin</h3>
      <h5>Age: 22</h5>
      <h6>Profession: Frontend Developer</h6>
    </div>
  );
};

export default User;
```

Now let’s see how class based components are made:

```jsx
import React from "react";
class UserClass extends React.Component {
  render() {
    return (
      <div>
        <h3>Welcome to the About Routing Page</h3>
        <User />
      </div>
    );
  }
}

export default UserClass;
```

```jsx
// so this is the example of functional based component
const User = () => {
  return (
    <div className="user-card">
      <h3>Name: Nitin</h3>
      <h5>Age: 22</h5>
      <h6>Profession: Frontend Developer</h6>
    </div>
  );
};

export default User;
```

So, Class based components extends the React component and it has a render method which returns the jsx.

Now we have saw the difference between the Class based component and Functional Based components we now

## How to pass “props” inside the Class based component ?

In functional component we pass “Props” in this way 

```jsx
import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h3>Welcome to the About Routing Page</h3>
      <User name={"Nitin Pandita Function"} />
      <UserClass />
    </div>
  );
};

export default About;
```

But in Class based component we pass “Props” in this format

```jsx
import React from 'react'

const UserClass extends React.Component{
	constuctor(props){
		super(props);
console.log(props);
}
	render() {
	return(
	 <h3>Welcome to the About Routing Page</h3>
)
}

}

export default UserClass;
```

**super()** keyword is very important, if we don’t use this super() keyword we will get an error. **The purpose of getting access to this keyword inside our constructor.**

```jsx

import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h3>Name: {name}</h3>
        <h5>Age: 22</h5>
        <h5>Location: {location}</h5>
        <h6>Profession: Frontend Developer</h6>
      </div>
    );
  }
}

export default UserClass;
```

## How to use useState inside the class based component ?

Let’s first see how we can use “useState” inside the class based components

### Using the useState in functional compoent

```jsx
import { useState } from "react";

const User = (props) => {
  const [initialValue] = useState(0);
  return (
    <div className="user-card">
      <h3>Name: {props.name}</h3>
      <h5>Age: 22</h5>
      <h6>Profession: Frontend Developer</h6>
    </div>
  );
};

export default User;
```

### Using useState in Class based component:

```jsx
import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
	// we can use State in class based component in this way
    this.state = {
      initialValue: 0,
      initialValue2: 2,
    };
  }
  render() {
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h3>Name: {name}</h3>
        <h3>Count: {this.state.initialValue}</h3>
        <h3>Count2: {this.state.initialValue2}</h3>
        <h5>Age: 22</h5>
        <h5>Location: {location}</h5>
        <h6>Profession: Frontend Developer</h6>
      </div>
    );
  }
}

export default UserClass;
```

## Now, how can we update the states ?

In functional component we can update the state in this way

```jsx
import { useState } from "react";

const User = (props) => {
  const [initialValue, setInitialValue] = useState(0);
  const [initialValue2, setInitialValue2] = useState(2);

  const OnSubmitHandle = () => {
    setInitialValue(initialValue + 1);
  };
  return (
    <div className="user-card">
      <h3>Count: {initialValue}</h3>
      <button onClick={OnSubmitHandle}>Button One </button>
      <h3>Count2: {initialValue2}</h3>
      <h3>Name: {props.name}</h3>
      <h5>Age: 22</h5>
      <h6>Profession: Frontend Developer</h6>
    </div>
  );
};

export default User;
```

Now in Class based component we can update the state by

React provide a functionality called setState() that will be used to set up the inital state.

```jsx
import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      initialValue: 0,
      initialValue2: 2,
    };
  }
  render() {
    const { name, location } = this.props;
    const { initialValue, initialValue2 } = this.state;
    return (
      <div className="user-card">
        <h3>Name: {name}</h3>
        <h3>Count: {initialValue}</h3>
        <button
          onClick={() => {
            this.setState({
              initialValue: this.state.initialValue + 1,
            });
          }}
        >
          Increment
        </button>
        <h3>Count2: {initialValue2}</h3>
        <h5>Age: 22</h5>
        <h5>Location: {location}</h5>
        <h6>Profession: Frontend Developer</h6>
      </div>
    );
  }
}

export default UserClass;
```

So, in class based component the first thing that render is the “ **constructor “ and then the render function is rendered. We can also have a look by using console.log**

```jsx
const UserClass extends React.Component {
constructor(props){
		super(props)
		this.state = {
		initialValue : 0,
		initialValue2 : 2,

	console.log("Constructor is Lodaded")
}	
	}
render() {
	return() {
	 console.log("rendr method is Loaded")
	}
}

```

## Now let’s see what if the parent is the Class based component

Let’s first convert this About.js to Class based component

```jsx
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  render() {
    return (
      <div>
        <h3>Welcome to the About Routing Page</h3>
        <User name={"Nitin Pandita Function"} />
        <UserClass
          name={"Nitin Pandita Class Function"}
          location={"Location is Jammu and Kashmir"}
        />
      </div>
    );
  }
}

export default About;
```

We can destructure the React.Component by writting

```jsx
import {Component} from 'react'

class UserClass extends Component {
}
```

## Q: What if we have the parent component as Class based component ?

Ans: 

```jsx
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  render() {
    console.log("Parent Rendering");
    return (
      <div>
        <h3>Welcome to the About Routing Page</h3>
        <User name={"Nitin Pandita Function"} />
        <UserClass
          name={"Nitin Pandita Class Function"}
          location={"Location is Jammu and Kashmir"}
        />
      </div>
    );
  }
}

export default About;
```

### UserClass.js

```jsx
import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialValue: 0,
      initialValue2: 2,
    };

    console.log("Child Constructor is loaded");
  }
  render() {
    console.log("Child is Rendered");
    const { name, location } = this.props;
    const { initialValue, initialValue2 } = this.state;

    return (
      <div className="user-card">
        <h3>Name: {name}</h3>
        <h3>Count: {initialValue}</h3>
        <button
          onClick={() => {
            this.setState({
              initialValue: this.state.initialValue + 1,
              initialValue2: this.state.initialValue2 + 1,
            });
          }}
        >
          Increment
        </button>
        <h3>Count2: {initialValue2}</h3>
        <h5>Age: 22</h5>
        <h5>Location: {location}</h5>
        <h6>Profession: Frontend Developer</h6>
      </div>
    );
  }
}

export default UserClass;
```

Now in Class based component, firstly the constructor is rendered and then the render method is called. In the above code , firstly the Parent Component will be rendered, giving us “Parent Constructor” and “Parent render” after that it will see a child component that is the **UserClass.js. It then render the UserClass.js file and then it goes for the constructor and then for the render part.**

![Untitled](Let%E2%80%99s%20Get%20Classy%20857ab02d9fc84332811bf4ce721226ba/Untitled.png)

## In Class based component we have another important component called “**componentDidMount()**”

As we know in a class-based component firstly the constructor is called after that the render method is called and then after mounting the object this “**componentDidMount()**” method is called.

```jsx
import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialValue: 0,
      initialValue2: 2,
    };

    console.log("Child Constructor is loaded");
  }

  componentDidMount() {
    console.log("Child Component Did Mount");
  }
  render() {
    console.log("Child is Rendered");
    const { name, location } = this.props;
    const { initialValue, initialValue2 } = this.state;

    return (
      <div className="user-card">
        <h3>Name: {name}</h3>
        <h3>Count: {initialValue}</h3>
        <button
          onClick={() => {
            this.setState({
              initialValue: this.state.initialValue + 1,
              initialValue2: this.state.initialValue2 + 1,
            });
          }}
        >
          Increment
        </button>
        <h3>Count2: {initialValue2}</h3>
        <h5>Age: 22</h5>
        <h5>Location: {location}</h5>
        <h6>Profession: Frontend Developer</h6>
      </div>
    );
  }
}

export default UserClass;
```

About.js

```jsx
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
          name={"Nitin Pandita Class Function"}
          location={"Location is Jammu and Kashmir"}
        />
      </div>
    );
  }
}

export default About;
```

Now what you will be called first and what will be seen on the console.

# Life Cycle of Class based Component

Answer is, 

1. Firstly the parent component will be rendered. Inside the parent component
    - The constructor will be rendered first.
    - The render method will then be rendered
    - After that, it will see the child component and it will redirect to the child component.
2. In the child component, same the constructor will be rendered first and after that render method will be rendered. After the render method is finished it will go to the “componentDidMount() “ method and call it. 
    - After that it will again go to the parent class and run the componentDidMount() method.

### Q: What is componentDidMount()?

Ans: The main use of componentDidMount() is to make API calls. To make it clear let’s move back to the functional components

In the functional component for making an API call, we use “useEffect()”. Why “useEffect”

because React doesn’t wait for the API to get called, we use useEffect. useEffect is called when the whole component is rendered and then it is called.

Load =⇒ Render =⇒ API =⇒ Render

We don’t want to wait for the API to get the data but we first need to create the structure to fill that API data, so for that, we make use of useEffect().

The same thing goes with the Class based components. Instead of making use of **useEffect**() we make use of **componentDidMount()**

```jsx
componentDidMount() {
    console.log("Child Component Did Mount");

    // Make API call over here
  }
```

## Interview Question :

Q: What if we have two same Child class components?

Ans: 

```jsx
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
```

So what will be the sequence of execution of this code.

## React Life Cycle :

![https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ogimage.png](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ogimage.png)

**The sequence will be:**

1. The Parent component will render.
    1. Parent Constructor
    2. Parent Render
        1. Child Class
            1. Child Constructor
            2. Child Render
        2. Child 2 Class
            1. Child 2 Constructor
            2. Child 2 Render
    3. The child class compound did mount.
    4. The child 2 class component did mount.
    5. The parent component did mount.
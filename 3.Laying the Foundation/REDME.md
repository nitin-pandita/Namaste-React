# Laying the Foundation

Later in our Learning we were using parcel for running our app on [localhost](http://localhost) and the command for that was

```jsx
npm parcel index.html
```

You know what we can make it much easier, we can go to package.json file and in the “scripts” we will add some commands

```json
"scripts": {
    "test": "jest",
    "start": "parcel index.html",
    "build": "parcel build index.html"
}
```

To start our project we can now run the command:

```html
npm run start or npm start
```

## Creating react Element:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

// React Element

const heading  = React.createElement('h1', {id: 'heading'}, 'Welcome to the React Js 😁' )
```

> React.createElement  ⇒ Object ⇒ HTMLElement(render)
> 

Like we saw that for creating a react element we have to write 

```jsx
const heading  = React.createElement('h1', {id: 'heading'}, 'Welcome to the React Js 😁' )
```

But that is not very good way to write it, what if we have to add more tags, it will just gets jumbled and we will not be able to understand anything so to fix this issue **Facebook devlopers though of finding a way to write an HTML code inside a javaScript. As HTML is easy to write and understand so they though it might be a good way of creating a react element with HTML and JS.** 

To fix this issue they came up with a extension called “**JSX”** 

### Q: What is JSX ?

Ans: Most developer thinks that JSX is HTML inside the Javascript, but that’s not true. JSX is not HTML, it is has a HTML like structure or syntax.

```jsx
const jsxSyntax = <h1>Welcome to JSX </h1>
```

Now there is a question is this jsxSyntax is a vaild JavaScript

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

// using the react 
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Welcome to Nitin React js Learning"
);

// jsx syntax

const jsxSyntax = <h1>Welcome to JSX </h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
```

No, it’s not , the javaScript follows ES6 , which contains pure JavaScript.

> Now you might be wonder, Nitin you said it’s not a vaild JavaScript so how is it working on the web.
> 

The reason behind this is “Parcel”. parcel transformed this JSX even before it reaches to the [browser.](http://browser.Now) Parcel is not the one who converts the jsx to js, it is the “ **babel “ who convert the JSX to pure JS**

## Behind the Scene of JSX :

```jsx
 JSX Code => React.createElement => JS Object => HTML
```

## Now the Question is who is converting this JSX code to HTML ?

Yes, you guess it right it’s **Babel**.

![Untitled](Laying%20the%20Foundation%20e7072198288a4cd58d88bec44c211b28/Untitled.png)

If you see in the image it is converting the JSX to the React Element.

---

# Q: What is React Components.

Ans: React Components is a normal JavaScript 

There are two types of React components

1. Class Based Components.
2. Functional Based Componets.

We will talk later about the Class Component, let’s first talk about the functional based components.

Functional Based Components: Functional Component is a Javascript function that return a react element.

```jsx
const HeadingComponent = () => {
  return <h1>Namasta Heading Components</h1>
}
```

Now you might be thinking how can we render the this HeadingComponent Function.

It can be rendered as :

```jsx
const HeadingComponent = () => {
  return <h1>Namasta Heading Components</h1>;
};

root.render(<HeadingComponent/>);
```

To render the Compoent we use **< />** sign to tell the **babel** that this is a react component

Now, there is a thing whenever we have component inside a component it’s called **Component Composition**

```jsx
const HeadingComponent = () => {
  return (
    <div id="container">
      <TitleComponent /> // Title component
      <h1>Namasta Heading Components</h1>
    </div>
  );
};
```

In JSX whenever we use { } braces we can run javaScript in it

Eg: 

```jsx
const number = 10000;
const HeadingComponent = () => {
  return (
    <div id="container">
				{number} // this will show 10000
      <TitleComponent />
      <h1>Namasta Heading Components</h1>
    </div>
  );
};
```
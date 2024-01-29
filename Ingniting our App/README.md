# Igniting Our App

It is not just the React that make the website fast , there are different packages that help react making our App fast.

For getting installing these Packages we need to get familiar with **“NPM”.**

### NPM : Node Package Manager. People say this is the actual full form of NPM but that’s not true NPM does’nt stand for anything.

# Surprised 😄!!

If you go to NPM website

![Untitled](Igniting%20Our%20App%20a3ceeec0b6d644259a98771ca4aa1274/Untitled.png)

You will see there is no name for **NPM**, people has given different names to NPM. If you go to “npm expansion” you will find that people has given different names to NPM

![Untitled](Igniting%20Our%20App%20a3ceeec0b6d644259a98771ca4aa1274/Untitled%201.png)

# So, What is NPM ? 🤔

> npm is a package manager for the JavaScript programming language maintained by npm
> 

### So, how can we initialized “npm” ?

 We can use:

```html
npm init
```

Once we have run this command in our terminal we will be asked some questions

![Untitled](Igniting%20Our%20App%20a3ceeec0b6d644259a98771ca4aa1274/Untitled%202.png)

After answering all the question we will be getting a “json” file

In my case it was:

```json
{
  "name": "reactlearning",
  "version": "1.0.0",
  "description": "Welcome to react js learning",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/nitin-pandita/Namaste-React.git"
  },
  "keywords": [
    "react",
    "reactjs"
  ],
  "author": "Nitin",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/nitin-pandita/Namaste-React/issues"
  },
  "homepage": "https://github.com/nitin-pandita/Namaste-React#readme"
}

```

> Package.json is the configuration of NPM
> 

NPM take care of:

- Version of the package with the help of Package.json

## Q: What is bundler ?

Bundler is used to bundle the whole app. React uses webpack bundler to bundle the whole app.

![Untitled](Igniting%20Our%20App%20a3ceeec0b6d644259a98771ca4aa1274/Untitled%203.png)

## Installing Dependencies :

For now we will be using “parcel”

```bash
npm install -D parcel
```

**npm** : package manager

**install** : to install the package

-**D** : There are two types of dependency : Dev Dependency and Normal Dependency

**parcel** : Is a bundler that we are installing and we are installing it as a Dev dependency by saying -D

After running this command we will see a change in **Package.json** file.

![Untitled](Igniting%20Our%20App%20a3ceeec0b6d644259a98771ca4aa1274/Untitled%204.png)

## Now you might be wondering what is this “ ^” used for:

^ : is called carat

we can also have “~2.11.0” is some cases

## Q: What is the difference between ^ (carat) and ~ (tilda) ?

Ans: ^ : **Approximately equivalent to version. If tomorrow a new version will come, and if we have used carat, the parcel will automatically update its version. It will install minor versions, which is safe.**

~ : **Compatible with version** . Now if we have used “**Tilda” it will install the major version automatically**

While installing the “parsal” you will innocenter that we have another file called “Package.lock.json”

### Q: Why this file was installed , What is the need of this file, Where it is used ?

Ans:  “**Package.lock.json**” file keeps a track of exact version. Suppose if we have a update in parsal, but my **Pakage.lock.json** will remain the same and there will be no effect in the functionality. **Package.lock.json** will lock the version and keeps the record of exact version.

There is another folder created called “node_modules” , when we run the command it installed all the code for “parcel”.

![Untitled](Igniting%20Our%20App%20a3ceeec0b6d644259a98771ca4aa1274/Untitled%205.png)

Now you might thinking that we have just installed “parcel what are the other files for” actually “parcel” is a project itself and it has its own dependencies, and those dependencies have their dependencies so this is called **Transitive Dependencies.**

### Important Questions !!

Q: How will NPM know which dependencies are of Parcel ?

Q: How many Package.json or Package.lock.json files do we have in our project ?

Ans: We have many package.json files in a project , for example when we installed parcel , it has its own Package.json file and it’s dependencies have its own Package.json file, which help the npm to keep track of the dependencies.

> We should never push the node_module folder into our production or github.
> 

## Now you might be wonder, Nitin you said we should not push the node_module to production or Github, how can we do that ?

It’s very easy, just create .gitignore file and inside the .gitignore file type :

```scala
/node_module
```

- If we have Package.json and Package.lock.json we can recreate the node_module even if we delete the node_module.

> To regenerate the node_module again we have to run a command
> 

```scala
npm install 
```

## Igniting our App:

We need to run a command :

```scala
npx parcel index.html
```

Now what is  “ npx parcel index.html "

Q: What is npx ?

Ans: npx : are used for executing a Package.

At the starting of the react learning we imported react using the cdn link but that is not the good way, because when we use CDN link it goes to the unpkg , and get the react functionality, but what if we have react installed in our node_module wound’nt that be easy and fast way to use it.

### Now we will be installing react into our node_module :

```scala
npm install react
```

now we will be also installing react-dom into our node_module

```scala
npm install react-dom
```

Now we can remove the CDN links from the index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <div id="root">
      <h1>Nitin Is Here</h1>
    </div>

    <script src="app.js"></script>
  </body>
</html>
```

It will work fine but we will have an error in our console :

![Untitled](Igniting%20Our%20App%20a3ceeec0b6d644259a98771ca4aa1274/Untitled%206.png)

Our app.js does’nt know where the React has came from, to solve this problem we can import React from ‘react’

```jsx
import React from "react";
const heading = React.createElement(
  "h1",
  { class: "Kartik" },
  "Hello World ! From React"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hey I am a H1 Tag"),
    React.createElement("h1", {}, "Hey there I am a second h1 tag"),
  ])
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
```

## Will it works ?

![Untitled](Igniting%20Our%20App%20a3ceeec0b6d644259a98771ca4aa1274/Untitled%207.png)

We will have an error that we can’t import or export the script file.

This is beacuse the script tag we have imported in the index.html is treated as simple js file, and the normal javascript file does’nt have an import in it, so it is throwing us an error.

So to fix it we can use type= “module” in the script tag :

```jsx
<script type="module" src="app.js"></script>
```

# Q: What does Parcel do ?

- Dev Build.
- Local Server.
- HMR - Hot Module Replacement.
- File Matching Algorithm - written in C++.
- Caching - Faster Builds.
- Image Optimization.
- Minification of Files.
- Compress files.
- Consistent Hashing.
- Code Splitting
- Differential Bundling : Support for Older bowers, different bundle for different bowers
- Good Error Handling
- Diagnosis
- Hosting on Https

## *Browserlist:*

“browserslist” **determines which browsers your project should support**
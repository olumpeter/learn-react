# LEARN REACT

This repository has projects that will help you learn React concepts that you will use on a daily basis.

## 0. How you can access this live website

### 0.1. Use the following URL

```url
https://olumpeter.github.io/learn-react/
```

### 0.2. click the following link

[Visit website](https://olumpeter.github.io/learn-react/)



## 1. Describing the UI

React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images. React lets you combine them into reusable, nestable components. From web sites to phone apps, everything on the screen can be broken down into components. In this chapter, you’ll learn to create, customize, and conditionally display React components.

### 1.1. Your first component / importing and exporting components 

React applications are built from isolated pieces of UI called *components*. A React component is a JavaScript function that you can sprinkle with markup. Components can be as small as a button, or as large as an entire page.

You can declare many components in one file, but large files can get difficult to navigate. To solve this, you can export a component into its own file, and then import that component from another file.

```html
<!-- index.html -->

<!doctype html>
<html lang="en">
  <head>
    <title>Describing the UI</title>

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="desciption" content="Describing the UI" />
    <meta name="author" content="Peter Olum"/>

    <script type="module" src="/src/main.jsx" defer></script>

    <link rel="icon" type="image/svg+xml" href="#" />
  </head>
  <body>
    <div id="root">
      
    </div>
  </body>
</html>
```

```css
/* index.css */

* {
    box-sizing: border-box;
    
}

#root {
    max-width: 800px;
    margin: 0 auto;
}
```

```jsx
// App.jsx

import "./App.css"
import { Gallery } from "./components/Gallery";

function App() {
  return (
    <>
      <h1>Describing the UI</h1>

      <h2>Your first component</h2>
      <div id="your-first-component" className="sub-topic-container">
        <section id="amazing_scientists">
            <h1>Amazing Scientist</h1>
            <Gallery />
        </section>
      </div>
    </>
  );
}

export default App;
```

```css
/* App.css */

/* General styles */

.sub-topic-container {
    max-width: 800px;
    min-height: 200px;
    border: 5px solid black;
    padding: 20px;
}

/* Your first component */

#amazing_scientists {
    text-align: center;
}
```

```jsx
// Gallery.jsx


import './Gallery.css'

const amazingScientists = [
  { key: 1, imageUrl: "./images/albert-einstein.jpg", name: "Albert Einstein" },
  { key: 2, imageUrl: "./images/charles-darwin.jpg", name: "Charles Darwin" },
  { key: 3, imageUrl: "./images/isaac-newton.jpg", name: "Isaac Newton" },
  { key: 4, imageUrl: "./images/albert-einstein.jpg", name: "Albert Einstein" },
  { key: 5, imageUrl: "./images/charles-darwin.jpg", name: "Charles Darwin" },
  { key: 6, imageUrl: "./images/isaac-newton.jpg", name: "Isaac Newton" },
];
const imageWidth = 200;
const imageHeight = 220;

export function Gallery() {
  return (
    <div id="gallery">
      {displayProfiles()}
    </div>
  );
}

function displayProfiles() {
  const profiles = [];
  for (const scientist of amazingScientists) {
    profiles.push(
        <figure key={scientist.key}>
            <img  src={scientist.imageUrl} alt={scientist.name} width={imageWidth} 
              height={imageHeight} />
            <figcaption>{scientist.name}</figcaption>
        </figure>
    );
  }
  return profiles;
}
```

### 1.2. Writing markup with JSX 

Each React component is a JavaScript function that may contain some markup that React renders into the browser. React components use a syntax extension called JSX to represent that markup. JSX looks a lot like HTML, but it is a bit stricter and can display dynamic information.

```jsx
// App.jsx


<h2>Writing markup with JSX</h2>
<div id="writing-markup-with-jsx " className="sub-topic-container">
  <h1>Hedy Lamarr's Todos</h1>
  <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" 
    className="photo"/>
  <ul id="hedy-todo-list">
    <li>Invent new traffic lights</li>
    <li>Rehearse a movie scene</li>
    <li>Improve spectrum technology</li>
  </ul>
</div>
```

### 1.3. JavaScript in JSX with curly braces 

JSX lets you write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place. Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup. In this situation, you can use curly braces in your JSX to “open a window” to JavaScript:

```jsx
// App.jsx

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink"
  }
}

function App() {
  return (

...

      <h2>003. JavaScript in JSX with curly braces</h2>
      <div id="javaScript-in-jsx-with-curly-braces" className="sub-topic-container" 
        style={person.theme}
        /* style={{backgroundColor: "black", color: "pink"}} */>
        <h1>{person.name}'s Todos</h1>
          <img src="https://i.imgur.com/7vQD0fPs.jpg" alt={person.name}
            className="photo"/>
          <ul id="hedy-todo-list">
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
          </ul>
      </div>
    </>
  );
}

export default App;
```

```css
/* App.css */

/* JavaScript in JSX with curly braces */

#javaScript-in-jsx-with-curly-braces .photo {
    border-radius: 45px;
}
```

```css
/* index.css */

* {
    box-sizing: border-box;
    
}

#root {
    max-width: 800px;
    margin: 0 auto;
}

#root > div {
    margin-bottom: 50px;
}
```

###  1.4. Passing props to a component 

React components use *props* to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, functions, and even JSX!

```jsx
// .components/Avatar.jsx

import "./Avatar.css"

export function Avatar({ imageSource, imageName="", imageWidth="", imageHeight="" }) {
    return (
        <img src={imageSource} alt={imageName} width={imageWidth} height={imageHeight}/>
    )
}
```

```css
/* .components/Avatar.css */

/* Passing props to a component  */

#passing-props-to-a-component img {
    border-radius: 50px;
}
```

```jsx
// App.jsx

      <h2>004. Passing props to a component</h2>
      <div id="passing-props-to-a-component" className="sub-topic-container" >
        <Avatar imageSource="https://i.imgur.com/7vQD0fPs.jpg" 
        imageName="Gregorio Y. Zara" imageWidth="100" imageHeight="100"/>
      </div>

      
    </>
  );
}

export default App;
```

### 1.5. Conditional Rendering

Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like `if` statements, `&&`, and `?` : operators.

#### 1.5.1 Conditionally returning JSX 

Let’s say you have a `PackingList` component rendering several Items, which can be marked as packed or not:

```jsx
// .components/PackingList.jsx

const packedItems = [
    {name: "Space suit", isPacked: true},
    {name: "Helmet with a golden leaf", isPacked: true},
    {name: "Photo of Tam", isPacked: false},
]

export function PackingList() {
    const packingListContent = []
    for (const item of packedItems) {
        if (item.isPacked === true) {
            packingListContent.push(<li key={item.name}>{item.name} ✔</li>)
        } else {
            packingListContent.push(<li key={item.name}>{item.name}</li>)
        }
    }
    return <ul id="packing-list">{packingListContent}</ul>
}
```

```css
/* .components/PackingList.css */


```

```jsx
// App.jsx

import { PackingList } from "./components/PackingList";

function App() {
  return (
    <>
      <h1>1. Describing the UI</h1>

      ...

      <h2>005. Conditional Rendering</h2>
      <div id="conditional-rendering" className="sub-topic-container" >
        <div id="conditionally-returning-jsx">
          <h1>Sally Ride's Packing List</h1>
          <PackingList />
        </div>
        
      </div>


    </>
  );
}

export default App;
```

#### 1.5.2 Conditionally returning nothing with `null` 

In some situations, you won’t want to render anything at all. For example, say you don’t want to show packed items at all. A component must return something. In this case, you can return `null`:

```jsx

// .components/PackingList.jsx

//  Conditionally returning nothing with null

export function PackingList2() {
    const packingListContent = []
    for (const item of packedItems) {
        if (item.isPacked === true) {
            packingListContent.push(null)
        } else {
            packingListContent.push(<li key={item.name}>{item.name}</li>)
        }
    }
    return <ul id="packing-list">{packingListContent}</ul>
}
```

```jsx
// App.jsx

import { PackingList2 } from "./components/PackingList";

function App() {
  return (
    <>
      <h1>1. Describing the UI</h1>


        <h3>5.2 Conditionally returning nothing with null</h3>
        <div id="conditionally-returning-nothing-with-null">
          <h1>Sally Ride's Packing List</h1>
          <PackingList2 />
        </div>
        
      </div>


    </>
  );
}

export default App;
```

In practice, returning `null` from a component isn’t common because it might surprise a developer trying to render it. More often, you would conditionally include or exclude the component in the parent component’s JSX. Here’s how to do that!

#### 1.5.3 Conditional (ternary) operator (`? :`) 
 
JavaScript has a compact syntax for writing a conditional expression — the conditional operator or “ternary operator”.


```jsx
// .components/PackingList.jsx

//  Conditional (ternary) operator (`? :`) 

export function PackingList3() {
    const packingListContent = []
    for (const item of packedItems) {
        item.isPacked ? 
        packingListContent.push(<li key={item.name}><del>{item.name} ✔</del></li>) : 
        packingListContent.push(<li key={item.name}>{item.name}</li>)
    }
    return <ul id="packing-list">{packingListContent}</ul>
}
```

```jsx
// App.jsx

import { PackingList3 } from "./components/PackingList";

function App() {
  return (
    <>
      <h1>1. Describing the UI</h1>

      ...

        <h3>5.3 Conditional (ternary) operator</h3>
        <div id="conditional_ternary_operator">
          <h1>Sally Ride's Packing List</h1>
          <PackingList3 />
        </div>
        
      </div>


    </>
  );
}

export default App;
```

This style works well for simple conditions, but use it in moderation. If your components get messy with too much nested conditional markup, consider extracting child components to clean things up. In React, markup is a part of your code, so you can use tools like variables and functions to tidy up complex expressions.

### 1.6. Rendering Lists

You will often want to display multiple similar components from a collection of data. You can use the JavaScript array methods to manipulate an array of data. On this page, you’ll use `filter()` and `map()` with React to filter and transform your array of data into an array of components.

#### 1.6.1 Rendering data from arrays 

Say that you have a list of content.

```html
<ul>
  <li>Creola Katherine Johnson: mathematician</li>
  <li>Mario José Molina-Pasquel Henríquez: chemist</li>
  <li>Mohammad Abdus Salam: physicist</li>
  <li>Percy Lavon Julian: chemist</li>
  <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
</ul>
```

The only difference among those list items is their contents, their data. You will often need to show several instances of the same component using different data when building interfaces: from lists of comments to galleries of profile images. In these situations, you can store that data in JavaScript objects and arrays and use methods like map() and filter() to render lists of components from them.

Here’s a short example of how to generate a list of items from an array:

1. **Move** the data into an array:

```jsx
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];
```

2. **Map** the `people` members into a new array of JSX nodes, `listItems`:
```jsx
const listItems = people.map(person => <li>{person}</li>);
```

3. **Return** listItems from your component wrapped in a `<ul>`:
```jsx
return <ul>{listItems}</ul>;
```

```jsx
// PeopleDataList.jsx

const peopleData = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];

export function PeopleDataList() {
    // fixing Warning: Each child in a list should have a unique “key” prop.
    let key = 1;
    const peopleDataList = [];
    for (const data of peopleData) {
        peopleDataList.push(<li key={key}>{data}</li>);
        key++;
    }
    return <ul>{peopleDataList}</ul>;
}
```

```jsx
// App.jsx

import { PeopleDataList } from "./components/PeopleDataList";

function App() {
  return (
    <>
      <h1>1. Describing the UI</h1>

      ...

      <h2>006. Rendering Lists</h2>
      <div id="rendering-lists" className="sub-topic-container" >
        <h3>6.1 Rendering data from arrays</h3>
        <div id="rendering-data-from-arrays">
          <h1>People's data list</h1>
          <PeopleDataList />
        </div>
      </div>
    </>
  );
}

export default App;
```

#### 1.6.2. Filtering arrays of items 

```jsx
// PeopleDataList.jsx

// This data can be structured even more.

const peopleData2 = [
    {
        key: 1, 
        imageUrl: "https://i.imgur.com/MK3eW3A.jpg",
        name:"Creola Katherine Johnson", 
        profession: "mathematician", 
        accomplishment: "spaceflight calculations"
    },
    {
        key: 2, 
        imageUrl: "https://i.imgur.com/mynHUSa.jpg",
        name:"Mario José Molina-Pasquel Henríquez", 
        profession: "chemist", 
        accomplishment: "discovery of Arctic ozone hole"
    },
    {
        key: 3, 
        imageUrl: "https://i.imgur.com/bE7W1ji.jpg",
        name:"Mohammad Abdus Salam", 
        profession: "physicist", 
        accomplishment: "electromagnetism theory"
    },
    {
        key: 4, 
        imageUrl: "https://i.imgur.com/IOjWm71.jpg",
        name:"Percy Lavon Julian", 
        profession: "chemist", 
        accomplishment: "pioneering cortisone drugs, steroids and birth control pills"},
    {
        key: 5, 
        imageUrl: "https://i.imgur.com/lrWQx8l.jpg",
        name:"Subrahmanyan Chandrasekhar", 
        profession: "astrophysicist", 
        accomplishment:"Astrophysicist white dwarf star mass calculations"
    },
];
```

```css
/* PeopleDataList.css */

/* Filtering arrays of items  */

.scientists-profile {
    list-style-type: none;
    display: flex;
    align-items: center;
}

.scientists-profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin-right: 10px;
}

.data-list {
    padding-left: 0px;
}
```

```jsx
// App.css

import { MathematiciansDataList } from "./components/PeopleDataList";
import { ChemistsDataList } from "./components/PeopleDataList";
import { PhysicistsDataList } from "./components/PeopleDataList";
import { AstrophysicistsDataList } from "./components/PeopleDataList";

function App() {
  return (
    <>
      <h1>1. Describing the UI</h1>

      ...

        <h3>6.2 Filtering arrays of items</h3>
        <div id="filtering-arrays-of-items">
          <h1>Scientists' accomplishment by profession: </h1>
          <h2>Mathematician</h2>
          <MathematiciansDataList/>
          <h2>Chemist</h2>
          <ChemistsDataList/>
          <h2>Physicist</h2>
          <PhysicistsDataList/>
          <h2>Astrophysicist</h2>
          <AstrophysicistsDataList/>  
        </div>
      </div>
    </>
  );
}

export default App;
```

#### 1.6.3 Keeping list items in order with key 

Notice that all the sandboxes above show an error in the console:

>*`Warning: Each child in a list should have a unique “key” prop.`

You need to give each array item a `key` — a string or a number that uniquely identifies it among other items in that array:

```jsx
        <li key={data.key} className="scientists-profile">
          ...
        </li>
```

>*Note*: JSX elements directly inside a map() call always need keys!

##### 1.6.3.1 Where to get your `key`

Different sources of data provide different sources of keys:

- **Data from a database**: If your data is coming from a database, you can use the database keys/IDs, which are unique by nature.
- **Locally generated data**: If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, `crypto.randomUUID()` or a package like `uuid` when creating items.

##### 1.6.3.2 Rules of keys 

- `Keys must be unique among siblings`. However, it’s okay to use the same keys for JSX nodes in different arrays.
- `Keys must not change` or that defeats their purpose! Don’t generate them while rendering.

##### 1.6.3.3 Why does React need keys? 

Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.

File names in a folder and JSX keys in an array serve a similar purpose. They let us uniquely identify an item between its siblings. A well-chosen key provides more information than the position within the array. Even if the position changes due to reordering, the key lets React identify the item throughout its lifetime.

### 1.7. Keeping Components Pure

Some JavaScript functions are `pure`. Pure functions only perform a calculation and nothing more. By strictly only writing your components as pure functions, you can avoid an entire class of baffling bugs and unpredictable behavior as your codebase grows. To get these benefits, though, there are a few rules you must follow.

#### 1.7.1 Purity: Components as formulas 

In computer science (and especially the world of functional programming), a pure function is a function with the following characteristics:

- **It minds its own business**. It does not change any objects or variables that existed before it was called.
- **Same inputs, same output**. Given the same inputs, a pure function should always return the same result.
You might already be familiar with one example of pure functions: formulas in math.

Consider this math formula: y = 2x.

If x = 2 then y = 4. Always.

If x = 3 then y = 6. Always.

If x = 3, y won’t sometimes be 9 or –1 or 2.5 depending on the time of day or the state of the stock market.

If y = 2x and x = 3, y will always be 6.

If we made this into a JavaScript function, it would look like this:

```jsx
function double(number) {
  return 2 * number;
}
```

In the above example, `double` is a `pure function.` If you pass it `3`, it will return `6`. Always.

React is designed around this concept. React assumes that every component you write is a pure function. This means that React components you write must always return the same JSX given the same inputs:

```jsx
// "./components/SpicedChaiRecipe.jsx"

export default function SpicedChaiRecipe() {
    return (
        <section>
            <h1>Spiced Chai Recipe</h1>
            <h2>For two</h2>
            <Recipe drinkers={2} />
            <h2>For a gathering</h2>
            <Recipe drinkers={4} />
        </section>
    );
}

function Recipe({ drinkers }) {
    return (
        <ol>
            <li>Boil {drinkers} cups of water.</li>
            <li>Add {drinkers} spoons of tea and 1 spoons of spice.</li>
            <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
        </ol>
    );
}
```


```css
/* "./components/SpicedChaiRecipe.jsx" */

```

```jsx
// App.css
import SpicedChaiRecipe from "./components/SpicedChaiRecipe";

function App() {
  return (
    <>
      <h1>1. Describing the UI</h1>

      ...

      <h2>007. Keeping Components Pure</h2>
      <div id="keeping-components-pure" className="sub-topic-container" >
        <h3>7.1 Purity: Components as formulas</h3>
        <div id="purity-components-as-formulas">
          <SpicedChaiRecipe/>
        </div>
      </div>
    </>
  );
}

export default App;
```

When you pass `drinkers={2}` to Recipe, it will return JSX containing `2 cups of water`. Always.

If you pass `drinkers={4}`, it will return JSX containing `4 cups of water`. Always.

Just like a math formula.

You could think of your components as recipes: if you follow them and don’t introduce new ingredients during the cooking process, you will get the same dish every time. That “dish” is the JSX that the component serves to React to render.

#### 1.7.2 Side Effects: (un)intended consequences

React’s rendering process must always be pure. Components should only return their JSX, and not change any objects or variables that existed before rendering—that would make them impure!

#### 1.7.3 Local mutation: Your component’s little secret 

The problem of component changing a *preexisting* variable while rendering is often called a **"mutation"** to make it sound a bit scarier. Pure functions don’t mutate variables outside of the function’s scope or objects that were created before the call—that makes them impure!

However, **it’s completely fine to change variables and objects that you’ve just created while rendering**.In this example, you create an `[]` array, assign it to a cups variable, and then push a dozen cups into it:

#### 1.7.4 Where you can cause side effects

While functional programming relies heavily on purity, at some point, somewhere, *something* has to change. That’s kind of the point of programming! These changes—updating the screen, starting an animation, changing the data—are called **side effects**. They’re things that happen "on the side", not during rendering.

In React, **side effects usually belong inside event handlers**. Event handlers are functions that React runs when you perform some action—for example, when you click a button. Even though event handlers are defined inside your component, they don’t run during rendering! **So event handlers don’t need to be pure**.

If you’ve exhausted all other options and can’t find the right event handler for your side effect, you can still attach it to your returned JSX with a `useEffect` call in your component. This tells React to execute it later, after rendering, when side effects are allowed. **However, this approach should be your last resort**.

When possible, try to express your logic with rendering alone. You’ll be surprised how far this can take you!

### 1.8. Understanding Your UI as a Tree

Your React app is taking shape with many components being nested within each other. How does React keep track of your app’s component structure?

React, and many other UI libraries, model UI as a tree. Thinking of your app as a tree is useful for understanding the relationship between components. This understanding will help you debug future concepts like performance and state management.

#### 1.8.1. Your UI as a tree 

Trees are a relationship model between items and UI is often represented using tree structures. For example, browsers use tree structures to model HTML ([DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction)) and CSS ([CSSOM](https://developer.mozilla.org/docs/Web/API/CSS_Object_Model)). Mobile platforms also use trees to represent their view hierarchy.

Like browsers and mobile platforms, React also uses tree structures to manage and model the relationship between components in a React app. These trees are useful tools to understand how data flows through a React app and how to optimize rendering and app size.

#### 1.8.2 The Render Tree 

A major feature of components is the ability to compose components of other components. As we nest components, we have the concept of parent and child components, where each parent component may itself be a child of another component.

When we render a React app, we can model this relationship in a tree, known as the render tree.

Here is a React app that renders inspirational quotes.

```jsx
// App.jsx

import FancyText from "./components/FancyText";
import InspirationGenerator from "./components/InspirationGenerator"
import Copyright from "./components/Copyright";


function App() {
  return (
    <>
      <h1>LEARN REACT</h1>
      <h2>1. Describing the UI</h2>

      ...

      <h3>1.8. Understanding Your UI as a Tree</h3>
      <div id="understanding-your-ui-as-a-tree" className="sub-topic-container" >
        <h3>1.8.1 The Render Tree </h3>
        <div id="the-render-tree ">
          <FancyText title text={"Get Inspired App"} />
          <InspirationGenerator>
            <Copyright year={2024} />
          </InspirationGenerator>
        </div>
      </div>
    </>
  );
}

export default App;
```

```jsx
// ./components/FancyText.jsx

import "./components/FancyText.css";

export default function FancyText({ title, text }) {
    return title
        ? <h1 className="fancy-title">{text}</h1>
        : <h1 className="fancy-cursive">{text}</h1>;
}
```

```css
/* ./components/FancyText.css */

.fancy-title {
    font-family: sans-serif;
    color: #0099ff;
    text-decoration: underline;
}

.fancy-cursive {
    font-family: cursive;
}
```

```jsx
// ./components/InspirationGenerator.jsx

import React from "react";
import quotes from "./quotes";
import FancyText from "./FancyText";


export default function InspirationGenerator({children}) {
    const [index, setIndex] = React.useState(0);
    const quote = quotes[index];

    function nextQuote() {
        setIndex(index+1)
        if (index < quotes.length - 1) {
            const quote = quotes[index];
        } else {
            setIndex(0)
            const quote = quotes[index];
        }
        return quote;
    }

    return (
        <>
            <p>Your inspirational quote is:</p>
            <FancyText text={quote} />
            <button onClick={nextQuote}>Inspire me again</button>
            {children}
        </>
    );
}
```

```css
/* ./components/InspirationGenerator.css */


```

```jsx
// ./components/quotes.jsx

export default [
    "Don’t let yesterday take up too much of today.” — Will Rogers",
    "Ambition is putting a ladder against the sky.",
    "A joy that's shared is a joy made double.",
];
```

```jsx
// ./components/Copyright.jsx

import "./Copyright.css"

export default function Copyright({ year }) {
    return (
        <>
            <p className="small">&copy; {year}</p>
        </>
    );
}
```

```css
/* ./components/Copyright.jsx */

.small {
    font-size: small;
}
```

From the example app, we can construct the above render tree.

The tree is composed of nodes, each of which represents a component. App, FancyText, Copyright, to name a few, are all nodes in our tree.

The root node in a React render tree is the root component of the app. In this case, the root component is App and it is the first component React renders. Each arrow in the tree points from a parent component to a child component.

A render tree represents a single render pass of a React application. With conditional rendering, a parent component may render different children depending on the data passed.

We can update the app to conditionally render either an inspirational quote or color.


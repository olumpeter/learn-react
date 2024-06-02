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

## 2. Adding Interactivity 

Some things on the screen update in response to user input. For example, clicking an image gallery switches the active image. In React, data that changes over time is called *state*. You can add state to any component, and update it as needed. In this chapter, you’ll learn how to write components that handle interactions, update their state, and display different output over time.

### 2.1 Responding to events 

React lets you add *event handlers* to your JSX. Event handlers are your own functions that will be triggered in response to user interactions like clicking, hovering, focusing on form inputs, and so on.

Built-in components like `<button>` only support built-in browser events like `onClick`. However, you can also create your own components, and give their event handler props any application-specific names that you like.

```jsx
// ./components/Toolbar.jsx

import "./Toolbar.css"

export function Toolbar({ onPlayMovie, onUploadImage }) {
    function onPlayMovie() {
        return (
            alert("Playing")
        );
    }
    
    function onUploadImage() {
        return (
            alert("Uploading")
        );
    }

    return (
        <div>
            <Button onClick={onPlayMovie}>
                Play Movie
            </Button>
            <Button onClick={onUploadImage}>
                Upload Image
            </Button>
        </div>
    );
}

function Button({ onClick, children }) {
    return (
        <>
            <button className="button" onClick={onClick}>
                {children}
            </button>
        </>
    );
}
```

```css
/* ./components/Toolbar.css */

.button {
    margin-right: 10px;
}
```

```jsx
// App.jsx

import { Toolbar } from "./components/Toolbar";


function App() {
  return (
    <>
      <h1>LEARN REACT</h1>
      <h2>1. Describing the UI</h2>

      ...

      <h2>2. Adding Interactivity</h2>

      <h3>2.1 Responding to events</h3>
      <div id="responding-to-events " className="sub-topic-container" >
        <Toolbar />
      </div>
    </>
  );
};

export default App;
```

### 2.2 State: a component’s memory

Components often need to change what’s on the screen as a result of an interaction. Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” puts a product in the shopping cart. Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called *state*.

You can add state to a component with a `useState` Hook. *Hooks* are special functions that let your components use React features (state is one of those features). The `useState` Hook lets you declare a state variable. It takes the initial state and returns a pair of values: the current state, and a state setter function that lets you update it.

```jsx
// ./components/SculptureGallery.jsx


import "./SculptureGallery.css"
import { useState } from "react";

// data

const sculptureList = [{
    name: 'Homenaje a la Neurocirugía',
    artist: 'Marta Colvin Andrade',
    description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
    url: 'https://i.imgur.com/Mx7dA2Y.jpg',
    alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'
}, {
    name: 'Floralis Genérica',
    artist: 'Eduardo Catalano',
    description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
    url: 'https://i.imgur.com/ZF6s192m.jpg',
    alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
}, {
    name: 'Eternal Presence',
    artist: 'John Woodrow Wilson',
    description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
    url: 'https://i.imgur.com/aTtVpES.jpg',
    alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
}, {
    name: 'Moai',
    artist: 'Unknown Artist',
    description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
    url: 'https://i.imgur.com/RCwLEoQm.jpg',
    alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
}, {
    name: 'Blue Nana',
    artist: 'Niki de Saint Phalle',
    description: 'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
    url: 'https://i.imgur.com/Sd1AgUOm.jpg',
    alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'
}, {
    name: 'Ultimate Form',
    artist: 'Barbara Hepworth',
    description: 'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
    url: 'https://i.imgur.com/2heNQDcm.jpg',
    alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'
}, {
    name: 'Cavaliere',
    artist: 'Lamidi Olonade Fakeye',
    description: "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
    url: 'https://i.imgur.com/wIdGuZwm.png',
    alt: 'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.'
}, {
    name: 'Big Bellies',
    artist: 'Alina Szapocznikow',
    description: "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
    url: 'https://i.imgur.com/AlHTAdDm.jpg',
    alt: 'The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.'
}, {
    name: 'Terracotta Army',
    artist: 'Unknown Artist',
    description: 'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.',
    url: 'https://i.imgur.com/HMFmH6m.jpg',
    alt: '12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.'
}, {
    name: 'Lunar Landscape',
    artist: 'Louise Nevelson',
    description: 'Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.',
    url: 'https://i.imgur.com/rN7hY6om.jpg',
    alt: 'A black matte sculpture where the individual elements are initially indistinguishable.'
}, {
    name: 'Aureole',
    artist: 'Ranjani Shettar',
    description: 'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
    url: 'https://i.imgur.com/okTpbHhm.jpg',
    alt: 'A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.'
}, {
    name: 'Hippos',
    artist: 'Taipei Zoo',
    description: 'The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.',
    url: 'https://i.imgur.com/6o5Vuyu.jpg',
    alt: 'A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.'
}];


export function SculptureGallery() {

    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const moreDetailsParagraph = document.getElementById("details")

    function displayNextSculpture() {
        if (index < sculptureList.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    function showOrHideDetails() {
        setShowMore(!showMore)
    }

    return (
        <div id="sculpture-gallery-app">
            <p>
                <button onClick={displayNextSculpture}>
                    Next
                </button>
            </p>
            <h2>
                <i>{sculptureList[index].name}</i> by {sculptureList[index].artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <p>
                <button onClick={showOrHideDetails}>
                    {showMore ? "Hide" : "Show"} details
                </button>
            </p>
            {
                showMore 
                ? <p>{sculptureList[index].description}</p>
                : <p></p>
            }
            <p>
                <img src={sculptureList[index].url} alt={sculptureList[index].alt} />
            </p>
        </div>
    );
}
```

```css
/* ./components/SculptureGallery.css */

#sculpture-gallery-app > * {
    margin: 10px;
    padding: 0;
}
```

```jsx
// App.jsx

import { SculptureGallery } from "./components/SculptureGallery"

function App() {
  return (
    <>
      <h1>LEARN REACT</h1>
      <h2>1. Describing the UI</h2>

      ...

      <h3>2.2 State: a component's memory</h3>
      <div id="state-a-components-memory" className="sub-topic-container" >
        <SculptureGallery />
      </div>
    </>
  );
};

export default App;
```

### 2.3 Render and Commit

Before your components are displayed on screen, they must be rendered by React. Understanding the steps in this process will help you think about how your code executes and explain its behavior.

Imagine that your components are cooks in the kitchen, assembling tasty dishes from ingredients. In this scenario, React is the waiter who puts in requests from customers and brings them their orders. This process of requesting and serving UI has three steps:

1. **Triggering** a render (delivering the guest’s order to the kitchen)
2. **Rendering** the component (preparing the order in the kitchen)
3. **Committing** to the DOM (placing the order on the table)

#### 2.3.1 Step 1: Trigger a render 

1. It’s the component’s **initial render**.
2. The component’s (or one of its ancestors’) **state has been updated**.

##### Initial render 

When your app starts, you need to trigger the initial render. Frameworks and sandboxes sometimes hide this code, but it’s done by calling createRoot with the target DOM node, and then calling its render method with your component:

```jsx
// image.js

export default function Image() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}
```

```jsx
// index.js

import Image from './Image.js';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'))
root.render(<Image />);
```

Try commenting out the root.render() call and see the component disappear!

##### Re-renders when state updates 

Once the component has been initially rendered, you can trigger further renders by updating its state with the set function. Updating your component’s state automatically queues a render. (You can imagine these as a restaurant guest ordering tea, dessert, and all sorts of things after putting in their first order, depending on the state of their thirst or hunger.)

#### 2.3.2 Step 2: React renders your components

After you trigger a render, React calls your components to figure out what to display on screen. **"Rendering" is React calling your components.**

- **On initial render**, React will call the root component.
- **For subsequent renders**, React will call the function component whose state update triggered the render.

This process is recursive: if the updated component returns some other component, React will render that component next, and if that component also returns something, it will render that component next, and so on. The process will continue until there are no more nested components and React knows exactly what should be displayed on screen.

#### 2.3.3 Step 3: React commits changes to the DOM 

After rendering (calling) your components, React will modify the DOM.

- **For the initial render**, React will use the `appendChild()` DOM API to put all the DOM nodes it has created on screen.
- **For re-renders**, React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.
**React only changes the DOM nodes if there’s a difference between renders**. For example, here is a component that re-renders with different props passed from its parent every second. Notice how you can add some text into the <input>, updating its value, but the text doesn’t disappear when the component re-renders:

#### 2.3.4 Epilogue: Browser paint 

After rendering is done and React updated the DOM, the browser will repaint the screen. Although this process is known as “browser rendering”, we’ll refer to it as "painting" to avoid confusion throughout the docs.

### 2.4 State as a Snapshot

State variables might look like regular JavaScript variables that you can read and write to. However, state behaves more like a snapshot. Setting it does not change the state variable you already have, but instead triggers a re-render.

#### 2.4.1 Setting state triggers renders 

You might think of your user interface as changing directly in response to the user event like a click. In React, it works a little differently from this mental model. On the previous page, you saw that setting state requests a re-render from React. This means that for an interface to react to the event, you need to u*pdate the state*.'


```jsx
// ./components/MessageForm.jsx

import { useState } from "react";
import "./MessageForm.css";

export function MessageForm() {
    function sendMessage(message) {

    }

    const [isMessageSent, setIsMessageSent] = useState(false);
    const [message, setMessage] = useState("");

    if (isMessageSent) {
        return (
            <>
                <h1>Your message is on its way!</h1>
            </>
        );
    } else {
        return (
            <form id="message-form" onSubmit={(e) => {
                e.preventDefault();
                setIsMessageSent(true);
                sendMessage(message)
            }}>
                <div id="message-text-area">
                    <textarea placeholder="Type your message here"
                        onChange={(e) => setMessage(e.target.value)} />
                </div>
                <div>
                    <button id="message-submit-button" type="submit">Send</button>
                </div>
            </form>
        );
    }
}
```

```css
/* ./components/MessageForm.css */

#message-form > div {
    margin-bottom: 10px;
}
```

```jsx

// App.jsx

import { MessageForm } from "./components/MessageForm.jsx"

function App() {
  return (
    <>
      <h1>LEARN REACT</h1>
      <h2>1. Describing the UI</h2>

      ...


      <h3>2.3 Setting state triggers renders</h3>
      <div id="setting-state-triggers-renders" className="sub-topic-container" >
        <MessageForm />
      </div>
    </>
  );
};

export default App;
```

#### 2.4.2 Rendering takes a snapshot in time 

"Rendering" means that React is calling your component, which is a function. The JSX you return from that function is like a snapshot of the UI in time. Its props, event handlers, and local variables were all calculated using its state at the time of the render.

Unlike a photograph or a movie frame, the UI "snapshot" you return is interactive. It includes logic like event handlers that specify what happens in response to inputs. React updates the screen to match this snapshot and connects the event handlers. As a result, pressing a button will trigger the click handler from your JSX.

When React re-renders a component:

1. React calls your function again.
2. Your function returns a new JSX snapshot.
3. React then updates the screen to match the snapshot your function returned.

As a component’s memory, state is not like a regular variable that disappears after your function returns. State actually "lives" in React itself—as if on a shelf!—outside of your function. When React calls your component, it gives you a snapshot of the state for that particular render. Your component returns a snapshot of the UI with a fresh set of props and event handlers in its JSX, all calculated using the state values from that render!

Here’s a little experiment to show you how this works. 

```jsx
// src/components/IncrementCountByOne.jsx

import { useState } from "react";
import "./IncrementCountByOne.css";

export function IncrementCountByOne() {

    const [count, setCount] = useState(0);

    return (
        <div id="increment-count-by-one">
            <h1 id="count">Count: {count}</h1>
            <button id="increment" onClick={() => {
                setCount(count + 1)}}>+1</button>
        </div>
    );
}
```

```css
/* src/components/IncrementCountByOne.css */

#increment-count-by-one > h1 {
    display: inline-block;
    margin-right: 10px;
}

#increment-count-by-one {
    display: flex;
    align-items: center;
}
```

```jsx
import { IncrementCountByOne } from "./components/IncrementCountByOne.jsx"

function App() {
  return (
    <div id="app">
      <h1>LEARN REACT</h1>
      <h2>1. Describing the UI</h2>

      ...

      <h3>Rendering takes a snapshot in time</h3>
      <div id="rendering-takes-a-snapshot-in-time" className="sub-topic-container" >
        <IncrementCountByOne />
      </div>

    </div>
  );
};

export default App;
```

Notice that number only increments once per click!


#### 2.4.3 State over time 

The state stored in React may have changed by the time the alert runs, but it was scheduled using a snapshot of the state at the time the user interacted with it!

**A state variable’s value never changes within a render**, even if its event handler’s code is asynchronous.

Here is an example of how that makes your event handlers less prone to timing mistakes. Below is a form that sends a message with a five-second delay. Imagine this scenario:

1. You press the "Send" button, sending "Hello" to Alice.
2. Before the five-second delay ends, you change the value of the "To" field to "Bob".

What do you expect the `alert` to display? Would it display, "You said Hello to Alice"? Or would it display, "You said Hello to Bob"? Make a guess based on what you know, and then try it:

```jsx
// src/components/SendMessageTo.jsx

import { useState } from "react";
import "./SendMessageTo.css"

export function SendMessageTo() {

    const [to, setTo] = useState("Alice")
    const [message, setMessage] = useState("Hello")

    function handleSentdButtonClick(e) {
        e.preventDefault();
        setTimeout(
            () => {
                alert(`You said ${message} to ${to}`)
            },
            5000
        )
    }

    return (
        <>
            <form id="send-message-form" onSubmit={handleSentdButtonClick}>
                <div id="name-select">
                    <label>
                        To:  
                        <select onChange={e => setTo(e.target.value)}>
                            <option value="Alice">Alice</option>
                            <option value="Bob">Bob</option>
                        </select>
                    </label>
                </div>
                <div id="message-text-area">
                    <textarea placeholder="Message" value={message} onChange={
                        (e) => {
                            setMessage(e.target.value)
                        }
                    }/>
                </div>
                <div id="send-form">
                    <button type="submit">Send</button>
                </div>
            </form>
        </>
    )
}
```

```css
/* src/components/SendMessageTo.css */

#name-select select {
    display: inline-block;
    margin-left: 5px;
}

#send-message-form > div {
    margin-bottom: 10px;
}
```

```jsx
// App.jsx

import { SendMessageTo } from "./components/SendMessageTo.jsx";

function App() {
  return (
    <div id="app">
      <h1>LEARN REACT</h1>
      <h2>1. Describing the UI</h2>

      <h3>2.5 State over time </h3>
      <div id="state-over-time " className="sub-topic-container" >
        <SendMessageTo />
      </div>
    </div>
  );
};

export default App;
```

**React keeps the state values "fixed" within one render’s event handlers**. You don’t need to worry whether the state has changed while the code is running.

But what if you wanted to read the latest state before a re-render? You’ll want to use a state updater function, covered on the next page!

#### 2.4.4 Challenge: Implement a traffic light 

Here is a crosswalk light component that toggles when the button is pressed:

```jsx
// src/components/TrafficLight.jsx

import { useState } from "react";
import "./TrafficLight.css";

export function TrafficLight() {

    const [walk, setWalk] = useState(true);

    function handleClick() {
        setWalk(!walk);
    }

    if (walk) {
        return (
            <>
                <div>
                    <button onClick={handleClick}>Change to stop</button>
                </div>
                <div>
                    <h1 style={{ color: 'darkgreen' }}>Walk</h1>
                </div>
            </>
        );
    }
    else {
        return (
            <>
                <div>
                    <button onClick={handleClick}>Change to walk</button>
                </div>
                <div>
                    <h1 style={{ color: 'darkred' }}>Walk</h1>
                </div>
            </>
        );
    }
}
```

```css
/* src/components/TrafficLight.css */

```

```jsx
// App.jsx

import { TrafficLight } from "./components/TrafficLight.jsx";

function App() {
  return (
    <div id="app">
      <h1>LEARN REACT</h1>
      <h2>1. Describing the UI</h2>

      ...

      <h3>2.6 Challenge: Implement a traffic light</h3>
      <div id="state-over-time " className="sub-topic-container" >
        <TrafficLight />
      </div>
      
    </div>
  );
};

export default App;
```

### 2.5 Queueing a Series of State Updates

Setting a state variable will queue another render. But sometimes you might want to perform multiple operations on the value before queueing the next render. To do this, it helps to understand how React batches state updates.

#### 2.5.1 React batches state updates

You might expect that clicking the "+3" button will increment the counter three times because it calls `setNumber(number + 1)` three times:

```jsx
// src/components/BatchStateUpdates.jsx


import "./BatchStateUpdates.css"
import { useState } from "react"

export function ReactBatchStateUpdates () {

    function handleClick() {
        setNumber(number + 1) 
        setNumber(number + 1) 
        setNumber(number + 1) 
    }

    const [number, setNumber] = useState(0)

    return (
        <>
            <h1 id="number">{number}</h1>
            <button type="button" onClick={handleClick}>+3</button>
        </>
    )
}
```

```css
/* src/components/BatchStateUpdates.css */

#number {
    display: inline-block;
    margin-right: 10px;
    width: 30px;
    text-align: center;
}
```

```jsx
// App.jsx


import "./BatchStateUpdates.css";
import { useState } from "react";

export function ReactBatchStateUpdates() {

    function handleClick() {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
    }

    const [number, setNumber] = useState(0);

    return (
        <>
            <h1 id="number">{number}</h1>
            <button type="button" onClick={handleClick}>+3</button>
        </>
    );
}
```

However, as you might recall from the previous section, each render’s state values are fixed, so the value of `number` inside the first render’s event handler is always `0`, no matter how many times you call `setNumber(1)`:


```jsx
setNumber(0 + 1);
setNumber(0 + 1);
setNumber(0 + 1);
```

But there is one other factor at play here. **React waits until all code in the event handlers has run before processing your state updates**. This is why the re-render only happens after all these `setNumber()` calls.

This might remind you of a waiter taking an order at the restaurant. A waiter doesn’t run to the kitchen at the mention of your first dish! Instead, they let you finish your order, let you make changes to it, and even take orders from other people at the table.

This lets you update multiple state variables—even from multiple components—without triggering too many re-renders. But this also means that the UI won’t be updated until after your event handler, and any code in it, completes. This behavior, also known as batching, makes your React app run much faster. It also avoids dealing with confusing “half-finished” renders where only some of the variables have been updated.

**React does not batch across multiple intentional events like clicks**—each click is handled separately. Rest assured that React only does batching when it’s generally safe to do. This ensures that, for example, if the first button click disables a form, the second click would not submit it again.

#### 2.5.2 Updating the same state multiple times before the next render 

It is an uncommon use case, but if you would like to update the same state variable multiple times before the next render, instead of passing the next state value like `setNumber(number + 1)`, you can pass a function that calculates the next state based on the previous one in the queue, like setNumber(`n => n + 1`). It is a way to tell React to "do something with the state value" instead of just replacing it.

Try incrementing the counter now:

```jsx
// src/components/UpdateSameStateMultipleTimes.jsx

import "./UpdateSameStateMultipleTimes.css";
import { useState } from "react";

export function UpdateSameStateMultipleTimes() {

    function handleClick() {
        setNumber((number) => (number + 1));
        setNumber((number) => (number + 1));
        setNumber((number) => (number + 1));
    }

    const [number, setNumber] = useState(0);

    return (
        <>
            <h1 id="number">{number}</h1>
            <button type="button" onClick={handleClick}>+3</button>
        </>
    );
}
```

```css
/* src/components/UpdateSameStateMultipleTimes.css */

#number {
    display: inline-block;
    margin-right: 10px;
    width: 30px;
    text-align: center;
}
```

```jsx
// App.jsx

import { UpdateSameStateMultipleTimes } from "./components/UpdateSameStateMultipleTimes.jsx";

function App() {
  return (
    <div id="app">
      <h1>LEARN REACT</h1>
      <h2>1. Describing the UI</h2>

      ...

      <h3>2.8 Updating the same state multiple times before the next render</h3>
      <div id="updating-same-state-multiple-times" className="sub-topic-container" >
        <UpdateSameStateMultipleTimes />
      </div>
    </div>
  );
};

export default App;
```

Here, `(number) => (number + 1))` is called an **updater function**. When you pass it to a state setter:

1. React queues this function to be processed after all the other code in the event handler has run.
2. During the next render, React goes through the queue and gives you the final updated state.

```jsx
setNumber((number) => (number + 1));
setNumber((number) => (number + 1));
setNumber((number) => (number + 1));
```

Here’s how React works through these lines of code while executing the event handler:

1. `setNumber((number) => (number + 1));` is a function. React adds it to a queue
2. `setNumber((number) => (number + 1));` is a function. React adds it to a queue.
3. `setNumber((number) => (number + 1));` a function. React adds it to a queue.

When you call `useState` during the next render, React goes through the queue. The previous number state was 0, so that’s what React passes to the first updater function as the `number` argument. Then React takes the return value of your previous updater function and passes it to the next updater as `number`, and so on.


### 2.6 Updating Objects in State

State can hold any kind of JavaScript value, including objects. But you shouldn’t change objects that you hold in the React state directly. Instead, when you want to update an object, you need to create a new one (or make a copy of an existing one), and then set the state to use that copy.


#### 2.6.1 What’s a mutation? 

You can store any kind of JavaScript value in state.

```jsx
const [x, setX] = useState(0);
```

So far you’ve been working with numbers, strings, and booleans. These kinds of JavaScript values are "immutable", meaning unchangeable or "read-only". You can trigger a re-render to replace a value:

```jsx
setX(5);
```

The `x` state changed from `0` to `5`, but the number `0` itself did not change. It’s not possible to make any changes to the built-in primitive values like numbers, strings, and booleans in JavaScript.

Now consider an object in state:

const [position, setPosition] = useState({ x: 0, y: 0 });

Technically, it is possible to change the contents of the object itself. This is called a mutation:

```jsx
position.x = 5;
```

However, although objects in React state are technically mutable, you should treat them **as if** they were immutable—like numbers, booleans, and strings. Instead of mutating them, you should always replace them.


#### 2.6.2 Treat state as read-only 

In other words, you should **treat any JavaScript object that you put into state as read-only**.

```jsx
// src/components/UpdateMembersInfo.jsx


import { useState } from "react";
import "./UpdateMembersInfo.css";

export function UpdateMembersInfo() {

    const [membersInfo, setMembersInfo] = useState([
        {
            "id": 1,
            "firstName": "Peter",
            "lastName": "Olum",
            "emailAddress": "olumpeter@gmail.com"
        },
        {
            "id": 2,
            "firstName": "Michael",
            "lastName": "Njoroge",
            "emailAddress": "michaelnjoroge@gmail.com"
        },
    ]);

    const tableRows = [];
    let index = 0;
    for (const memberInfo of membersInfo) {
        tableRows.push(
            <tr key={index}>
                <td>{memberInfo.id}</td>
                <td>{memberInfo.firstName}</td>
                <td>{memberInfo.lastName}</td>
                <td>{memberInfo.emailAddress}</td>
            </tr>
        );
        index++;
    }

    function addMembersInfo() {
        const id = membersInfo.length + 1;
        const firstName = prompt("First name: ").trim();
        const lastName = prompt("Last name: ").trim();
        const emailAddress = prompt("Email address: ").trim();

        if (firstName !== "" && lastName !== "" && emailAddress !== "") {
            setMembersInfo([...membersInfo, {
                "id": id,
                "firstName": firstName,
                "lastName": lastName,
                "emailAddress": emailAddress
            }]);
        }
    }

    function deleteMembersInfo() {
        const id = Number(prompt("ID: ").trim());

        // const newMembersInfor = []
        //     for (const memberInfo of membersInfo) {
        //         if (memberInfo.id !== id) {
        //             newMembersInfor.push(memberInfo)
        //         }
        //     }

        const newMembersInfor = membersInfo.filter(memberInfo => memberInfo.id !== id);

        setMembersInfo(newMembersInfor);
    }

    return (
        <>
            <h1>Members Information</h1>
            <div>
                <button type="button" onClick={addMembersInfo}>ADD</button>
                <button type="button" onClick={deleteMembersInfo}>DELETE</button>
            </div>

            <table id="members-info-table">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Address</th>
                    </tr>
                    {tableRows}
                </tbody>

            </table>
        </>
    );
}
```

```css
/* src/components/UpdateMembersInfo.css */


table {
    display: inline-block;
    overflow-x: auto;
    margin: .5em 0 2.5em;
    max-width: 100%;
    width: auto;
    border-spacing: 0;
    border-collapse: collapse;
    font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
    font-display: swap;
    font-size: 1.6rem;
    white-space: nowrap;
    vertical-align: top;    
}

tbody {
    display: table-row-group;
    vertical-align: middle;
    unicode-bidi: isolate;
    border-color: inherit;
}

table th {
    color: #1b1b32;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: .2px;
    text-align: left;
    text-transform: uppercase;
    background-color: #dfdfe2;
}

table td, 
table th {
    padding: 6px 12px;
    border: #dfdfe2 1px solid;
}

th {
    display: table-cell;
    vertical-align: inherit;
    font-weight: bold;
    text-align: -internal-center;
    unicode-bidi: isolate;
}

.members-info-table {
    position: relative;
    margin: 0 auto;
    padding: 70px 150px 0;
    min-height: 230px;
    font-family: Lato,sans-serif;
    font-display: swap;
    font-size: 2.2rem;
    line-height: 1.6em;
    background: #fff;
}

table td:first-child {
    background-image: linear-gradient(to right,#fff 50%,rgba(255,255,255,0) 100%);
    background-size: 20px 100%;
    background-repeat: no-repeat;
}

button {
    display: inline-block;
    margin-left: 10px;
}
```

```jsx
// App.css

import { UpdateMembersInfo } from "./components/UpdateMembersInfo.jsx";

function App() {
  return (
    <div id="app">
      <h1>LEARN REACT</h1>
      <h2>1. Describing the UI</h2>

      ...

      <h3>2.6 Updating Objects in State</h3>
      <div id="queueing-a-series-of-state-updates" className="sub-topic-container" >
        <h4>2.6.1 Treat state as read-only</h4>
        <div id="treat-state-as-read-only">
          <UpdateMembersInfo />
        </div>
      </div>
    </div>
  );
};

export default App;
```

#### 2.6.3 Copying objects with the spread syntax 

Often, you will want to include existing data as a part of the new object you’re creating. For example, you may want to update only one field in a form, but keep the previous values for all other fields.

```jsx
// src/components/MessageForm.jsx


import { useState } from "react";
import "./MembersInfoForm.css";

export function MembersInfoForm() {

    const [membersInfo, setMembersInfo] = useState(
        {
            "firstName": "Peter",
            "lastName": "Olum",
            "email": "olumpeter@gmail.com"
        }
    );

    function handleFirstNameChange(e) {
        setMembersInfo(
            {
                // "firstName": e.target.value,
                // "lastName": membersInfo.lastName,
                // "email": membersInfo.email
                ...membersInfo,
                "firstName": e.target.value
            }
        );
    }

    function handleLastNameChange(e) {
        setMembersInfo(
            {
                // "firstName": membersInfo.firstName,
                // "lastName": e.target.value,
                // "email": membersInfo.email
                ...membersInfo,
                "lastName": e.target.value,
            }
        );
    }

    function handleEmailChange(e) {
        setMembersInfo(
            {
                // "firstName": membersInfo.firstName,
                // "lastName": membersInfo.lastName,
                // "email": e.target.value
                ...membersInfo,
                "email": e.target.value
            }
        );
    }

    return (
        <>
            <form id="membersInfoForm">
                <div>
                    <label htmlFor="first-name">
                        First name:{" "}
                        <input id="first-name" type="text" name="firstName"
                            value={membersInfo.firstName}
                            onChange={handleFirstNameChange} />
                    </label>
                </div>
                <div>
                    <label htmlFor="last-name">
                        Last name:{" "}
                        <input id="last-name" type="text" name="lastName"
                            value={membersInfo.lastName}
                            onChange={handleLastNameChange} />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">
                        Email:{" "}
                        <input id="email" type="text" name="email"
                            value={membersInfo.email}
                            onChange={handleEmailChange} />
                    </label>
                </div>


            </form>
            <p>
                {membersInfo.firstName} {membersInfo.lastName} ({membersInfo.email})
            </p>
        </>
    );
}
```

```css
/* src/components/MessageForm.css */

#membersInfoForm > div {
    margin-bottom: 10px;
}
```

```jsx
// App.jsx

import { MembersInfoForm } from "./components/MembersInfoForm.jsx";

function App() {
  return (
    <div id="app">
      <h1>LEARN REACT</h1>
      <h2>1. Describing the UI</h2>

      ...
        
        <h4>2.6.2 Copying objects with the spread syntax</h4>
        <div id="treat-state-as-read-only">
          <MembersInfoForm />
        </div>

      </div>
      
    </div>
  );
};

export default App;
```

For example, this line mutates the state from a past render:

```jsx
membersInfo.firstName = e.target.value;
```

The reliable way to get the behavior you’re looking for is to create a new object and pass it to `setPerson`. But here, you want to also copy the existing data into it because only one of the fields has changed:

```jsx
setMembersInfo(
    {
      "firstName": e.target.value, // New first name from the input
      "lastName": membersInfo.lastName,
      "email": membersInfo.email
    }
);
```

You can use the `...` object spread syntax so that you don’t need to copy every property separately.

```jsx
setMembersInfo(
    {
        // "firstName": e.target.value,
        // "lastName": membersInfo.lastName,
        // "email": membersInfo.email
        ...membersInfo,
        "firstName": e.target.value
    }
);
```

Now the form works!

Notice how you didn’t declare a separate state variable for each input field. For large forms, keeping all data grouped in an object is very convenient—as long as you update it correctly!


#### 2.6.4 Updating a nested object

Consider a nested object structure like this:

```jsx
// src\components\MembersArtwork.jsx


import { useState } from "react";
import "./MembersArtwork.css";

export function MembersArtwork() {

    const [membersArtwork, setMembersArtwork] = useState(
        {
            "name": "Niki de Saint Phalle",
            "artwork": {
                "title": "Blue Nana",
                "city": "Hamburg",
                "ImageUrl": "https://i.imgur.com/Sd1AgUOm.jpg"
            }
        }
    );

    function editName() {
        const newName = prompt("Enter new name: ").trim()
        if (newName !== "") {
            setMembersArtwork(
                {
                    ...membersArtwork,
                    name: newName 
                }
            )
        }
        else {
            alert("Invalid edit. Name cannot be empty.")
        }
    }

    function editTitle() {
        const newTitle = prompt("Enter new title: ").trim()
        if (newTitle !== "") {
            setMembersArtwork(
                {
                    ...membersArtwork,
                    artwork: {
                        ...membersArtwork.artwork,
                        title: newTitle
                    } 
                }
            )
        }
        else {
            alert("Invalid edit. Artwork title cannot be empty.")
        }
    }

    function editCity() {
        const newCity = prompt("Enter new city: ").trim()
        if (newCity !== "") {
            setMembersArtwork(
                {
                    ...membersArtwork,
                    artwork: {
                        ...membersArtwork.artwork,
                        city: newCity
                    } 
                }
            )
        }
        else {
            alert("Invalid edit. Artwork city cannot be empty.")
        }
    }

    function editImageUrl() {
        const newImageUrl = prompt("Enter new image URL: ").trim()
        if (newImageUrl !== "") {
            setMembersArtwork(
                {
                    ...membersArtwork,
                    artwork: {
                        ...membersArtwork.artwork,
                        ImageUrl: newImageUrl
                    } 
                }
            )
        }
        else {
            alert("Invalid edit. Artwork city cannot be empty.")
        }
    }

    return (
        <>
            <form id="members-artwork-form">
                <div>
                    <label htmlFor="name">
                        Name:{" "}
                        <input id="name" type="text" readOnly name="name"
                            value={membersArtwork.name}/>
                    </label>
                    <button type="button" className="edit-button" onClick={editName}>
                        <img src="./public/images/edit-button.svg" alt="Edit"
                            width={20} height={20} />
                    </button>
                </div>
                <div>
                    <label htmlFor="title">
                        Title:{" "}
                        <input id="title" type="text" readOnly name="title" 
                            value={membersArtwork.artwork.title}/>
                    </label>
                    <button type="button" className="edit-button" onClick={editTitle}>
                        <img src="./public/images/edit-button.svg" alt="Edit"
                            width={20} height={20} />
                    </button>
                </div>
                <div>
                    <label htmlFor="city">
                        City:{" "}
                        <input id="city" type="text" readOnly name="city" 
                            value={membersArtwork.artwork.city}/>
                    </label>
                    <button type="button" className="edit-button" onClick={editCity}>
                        <img src="./public/images/edit-button.svg" alt="Edit"
                            width={20} height={20} />
                    </button>
                </div>
                <div>
                    <label htmlFor="image-url">
                        Image URL:{" "}
                        <input id="image-url" type="text" readOnly name="imageUrl"
                            value={membersArtwork.artwork.ImageUrl}/>
                    </label>
                    <button type="button" className="edit-button" onClick={editImageUrl}>
                        <img src="./public/images/edit-button.svg" alt="Edit"
                            width={20} height={20} />
                    </button>
                </div>
            </form>
            <p>
                <i>{membersArtwork.artwork.title}</i> by {membersArtwork.name}<br/>
                (located in {membersArtwork.artwork.city})
            </p>
            <div id="artwork-image">
                <img src={membersArtwork.artwork.ImageUrl} 
                    alt={membersArtwork.artwork.title} />
            </div>
        </>
    );
}
```

```css
/* src\components\MembersArtwork.css */

#members-artwork-form > div {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    font-size: 20px;
}

#members-artwork-form .edit-button {
    font-size: 20px;
    padding: 0;
    margin-left: 5px;
    border: 0px;
}

#members-artwork-form input {
    width: auto;
}

#artwork-image img {
    width: 200px;
    height: 200px;
}
```

```jsx
// App.css

import { MembersArtwork } from "./components/MembersArtwork.jsx";

function App() {
  return (
    <div id="app">
      <h1>LEARN REACT</h1>
      <h2>1. Describing the UI</h2>

    ...
        
        <h4>2.6.3 Updating a nested object</h4>
        <div id="updating-nested-object">
          <MembersArtwork />
        </div>

      </div>
      
    </div>
  );
};

export default App;
```

Consider a nested object structure like this:

```jsx
const [membersArtwork, setMembersArtwork] = useState(
    {
        "name": "Niki de Saint Phalle",
        "artwork": {
            "title": "Blue Nana",
            "city": "Hamburg",
            "ImageUrl": "https://i.imgur.com/Sd1AgUOm.jpg"
        }
    }
);
```

If you wanted to update `membersArtwork.artwork.city`, it’s clear how to do it with mutation:

```jsx
membersArtwork.artwork.city = 'New Delhi';
```

But in React, you treat state as immutable! In order to change city, you would first need to produce the new artwork object (pre-populated with data from the previous one), and then produce the new person object which points at the new artwork:

```jsx
const nextArtwork = { ...person.artwork, city: 'New Delhi' };
const nextPerson = { ...person, artwork: nextArtwork };
setPerson(nextPerson);
```

Or, written as a single function call:

```jsx
setPerson({
  ...person, // Copy other fields
  artwork: { // but replace the artwork
    ...person.artwork, // with the same one
    city: 'New Delhi' // but in New Delhi!
  }
});
```

This gets a bit wordy, but it works fine for many cases:

#### 2.6.5 Write concise update logic with Immer 

If your state is deeply nested, you might want to consider [flattening it](https://react.dev/learn/choosing-the-state-structure#avoid-deeply-nested-state). But, if you don’t want to change your state structure, you might prefer a shortcut to nested spreads. Immer is a popular library that lets you write using the convenient but mutating syntax and takes care of producing the copies for you. With Immer, the code you write looks like you are "breaking the rules" and mutating an object:

```jsx
updateMembersArtwork(draft => {
  draft.artwork.city = 'Lagos';
});
```

But unlike a regular mutation, it doesn’t overwrite the past state!

##### 2.6.5.1 How does Immer work? 

The `draft` provided by Immer is a special type of object, called a [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy), that "records" what you do with it. This is why you can mutate it freely as much as you like! Under the hood, Immer figures out which parts of the draft have been changed, and produces a completely new object that contains your edits.

To try Immer:

1. Run `npm install use-immer` to add Immer as a dependency
2. Then replace `import { useState } from 'react'` with `import { useImmer } from 'use-immer'`

Here is the above example converted to Immer:

```jsx
// src\components\MembersArtwork.jsx

// import { useState } from "react";
import { useImmer } from "use-immer";
import "./MembersArtworkUpdateWithImmer.css";

export function MembersArtworkUpdateWithImmer() {

    const [membersArtwork, setMembersArtwork] = useImmer(
        {
            "name": "Niki de Saint Phalle",
            "artwork": {
                "title": "Blue Nana",
                "city": "Hamburg",
                "ImageUrl": "https://i.imgur.com/Sd1AgUOm.jpg"
            }
        }
    );

    function editName() {
        const newName = prompt("Enter new name: ").trim()
        if (newName !== "") {
            // setMembersArtwork(
            //     {
            //         ...membersArtwork,
            //         name: newName 
            //     }
            // )
            setMembersArtwork(
                draft => {
                    draft.name = newName
                }
            )
        }
        else {
            alert("Invalid edit. Name cannot be empty.")
        }
    }

    function editTitle() {
        const newTitle = prompt("Enter new title: ").trim()
        if (newTitle !== "") {
            // setMembersArtwork(
            //     {
            //         ...membersArtwork,
            //         artwork: {
            //             ...membersArtwork.artwork,
            //             title: newTitle
            //         } 
            //     }
            // )
            setMembersArtwork(
                draft => {
                    draft.artwork.title = newTitle
                }
            )
        }
        else {
            alert("Invalid edit. Artwork title cannot be empty.")
        }
    }

    function editCity() {
        const newCity = prompt("Enter new city: ").trim()
        if (newCity !== "") {
            // setMembersArtwork(
            //     {
            //         ...membersArtwork,
            //         artwork: {
            //             ...membersArtwork.artwork,
            //             city: newCity
            //         } 
            //     }
            // )
            setMembersArtwork(
                draft => {
                    draft.artwork.city = newCity
                } 
            )
        }
        else {
            alert("Invalid edit. Artwork city cannot be empty.")
        }
    }

    function editImageUrl() {
        const newImageUrl = prompt("Enter new image URL: ").trim()
        if (newImageUrl !== "") {
            // setMembersArtwork(
            //     {
            //         ...membersArtwork,
            //         artwork: {
            //             ...membersArtwork.artwork,
            //             ImageUrl: newImageUrl
            //         } 
            //     }
            // )
            setMembersArtwork(
                draft => {
                    draft.artwork.ImageUrl = newImageUrl
                }
            )
        }
        else {
            alert("Invalid edit. Artwork city cannot be empty.")
        }
    }

    return (
        <>
            <form id="members-artwork-form">
                <div>
                    <label htmlFor="name">
                        Name:{" "}
                        <input id="name" type="text" readOnly name="name"
                            value={membersArtwork.name}/>
                    </label>
                    <button type="button" className="edit-button" onClick={editName}>
                        <img src="./public/images/edit-button.svg" alt="Edit"
                            width={20} height={20} />
                    </button>
                </div>
                <div>
                    <label htmlFor="title">
                        Title:{" "}
                        <input id="title" type="text" readOnly name="title" 
                            value={membersArtwork.artwork.title}/>
                    </label>
                    <button type="button" className="edit-button" onClick={editTitle}>
                        <img src="./public/images/edit-button.svg" alt="Edit"
                            width={20} height={20} />
                    </button>
                </div>
                <div>
                    <label htmlFor="city">
                        City:{" "}
                        <input id="city" type="text" readOnly name="city" 
                            value={membersArtwork.artwork.city}/>
                    </label>
                    <button type="button" className="edit-button" onClick={editCity}>
                        <img src="./public/images/edit-button.svg" alt="Edit"
                            width={20} height={20} />
                    </button>
                </div>
                <div>
                    <label htmlFor="image-url">
                        Image URL:{" "}
                        <input id="image-url" type="text" readOnly name="imageUrl"
                            value={membersArtwork.artwork.ImageUrl}/>
                    </label>
                    <button type="button" className="edit-button" onClick={editImageUrl}>
                        <img src="./public/images/edit-button.svg" alt="Edit"
                            width={20} height={20} />
                    </button>
                </div>
            </form>
            <p>
                <i>{membersArtwork.artwork.title}</i> by {membersArtwork.name}<br/>
                (located in {membersArtwork.artwork.city})
            </p>
            <div id="artwork-image">
                <img src={membersArtwork.artwork.ImageUrl} 
                    alt={membersArtwork.artwork.title} />
            </div>
        </>
    );
}
```

```css
/* src\components\MembersArtwork.css */


#members-artwork-form > div {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    font-size: 20px;
}

#members-artwork-form .edit-button {
    font-size: 20px;
    padding: 0;
    margin-left: 5px;
    border: 0px;
}

#members-artwork-form input {
    width: auto;
}

#artwork-image img {
    width: 200px;
    height: 200px;
}
```

```jsx
// App.jsx

import { MembersArtworkUpdateWithImmer } from "./components/MembersArtworkUpdateWithImmer.jsx";

function App() {
  return (
    <div id="app">
      <h1>LEARN REACT</h1>
      <h2>1. Describing the UI</h2>

      ...
        
        <h4>2.6.4 Write concise update logic with Immer</h4>
        <div id="write-concise-update-logic-with-immer">
          <MembersArtworkUpdateWithImmer />
        </div>

      </div>
    </div>
  );
};

export default App;
```

Notice how much more concise the event handlers have become. You can mix and match `useState` and `useImmer` in a single component as much as you like. Immer is a great way to keep the update handlers concise, especially if there’s nesting in your state, and copying objects leads to repetitive code.


### 2.7 Updating Arrays in State

Arrays are mutable in JavaScript, but you should treat them as immutable when you store them in state. Just like with objects, when you want to update an array stored in state, you need to create a new one (or make a copy of an existing one), and then set state to use the new array.

#### 2.7.1 Updating arrays without mutation 

In JavaScript, arrays are just another kind of object. Like with objects, you should treat arrays in React state as read-only. This means that you shouldn’t reassign items inside an array like `arr[0] = 'bird'`, and you also shouldn’t use methods that mutate the array, such as `push()` and `pop()`.

Instead, every time you want to update an array, you’ll want to pass a new array to your state setting function. To do that, you can create a new array from the original array in your state by calling its non-mutating methods like `filter()` and `map()`. Then you can set your state to the resulting new array.

Here is a reference table of common array operations. When dealing with arrays inside React state, you will need to avoid the methods in the left column, and instead prefer the methods in the right column:

|         |**avoid (mutates the array)**      |**prefer (returns a new array)**|
|:--------|:----------------------------------|:-------------------------------|
|adding   |`push`, `unshift`                  |`concat`, `[...array]`          |
|removing |`pop`, `shift`, `splice`           |`filter`, `slice`               |
|replacing|`splice`, `arr[i]=...` assignment  |`map`                           |
|sorting  |`reverse`, `sort`                  |copy the array first            |

Alternatively, you can [use Immer](https://react.dev/learn/updating-arrays-in-state#write-concise-update-logic-with-immer) which lets you use methods from both columns.

>**Pitfall:** 
>Unfortunately, `slice` and `splice` are named similarly but are very different:
>
> - `slice` lets you copy an array or a part of it.
> - `splice` mutates the array (to insert or delete items).
> 
>In React, you will be using slice (no p!) a lot more often because you don’t want to mutate objects or arrays in state. [Updating Objects](https://react.dev/learn/updating-objects-in-state) explains what mutation is and why it’s not recommended for state.

#### 2.7.2 Adding to an array

```jsx
// src\components\ListOfFriends.jsx

import { useState } from "react";
import "./ListOfFriends.css";

let index = 0;

export function ListOfFriends() {

    const [friend, setFriend] = useState("");
    const [friends, setFriends] = useState([]);

    function addFriend(e) {
        if (friend.trim() !== "") {
            setFriends([
                ...friends,
                { "id": index, "name": friend }
            ]);
        }
        index++;
        setFriend("");
    }

    return (
        <>
            <h1>Your amazing friends: </h1>
            <input id="input-a-friend" type="text" name="friend" value={friend}
                onChange={e => setFriend(e.target.value)} />
            <button id="add-a-friend" type="button"
                onClick={addFriend}>Add</button>
            <ul>
                {
                    friends.map(friend => (
                        <li key={friend.id}>{friend.name}</li>
                    ))
                }
            </ul>
        </>
    );
}
```

```css
/* src\components\ListOfFriends.jsx */

#input-a-friend,
#add-a-friend {
    display: inline-block;
    font-size: 20px;
}
```

```jsx
// App.jsx

import { ListOfFriends } from "./components/ListOfFriends.jsx";

function App() {
  return (
    <div id="app">
      <h1>LEARN REACT</h1>
      <h2>1. Describing the UI</h2>

    ...

        <h3>2.7 Updating Arrays in State</h3>
        <div id="updating-arrays-in-state" className="sub-topic-container" >
          <h4>2.7.1 Adding to an array</h4>
          <div id="adding-to-an-array">
            <ListOfFriends />
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
```

`push()` will mutate an array, which you don’t want:

Instead, create a new array which contains the existing items and a new item at the end. There are multiple ways to do this, but the easiest one is to use the `...` [array spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_array_literals) syntax:

```jsx
function addFriend(e) {
    if (friend.trim() !== "") {
        setFriends([ // Replace the state with a new array
            ...friends, // that contains all the old items
            { "id": index, "name": friend } // and one new item at the end
        ]);
    }
    index++;
    setFriend("");
}
```

The array spread syntax also lets you prepend an item by placing it *before* the original `...artists`:

```jsx
function addFriend(e) {
    if (friend.trim() !== "") {
        setFriends([
          { "id": index, "name": friend }
            ...friends, // Put old items at the end
        ]);
    }
    index++;
    setFriend("");
}
```

In this way, spread can do the job of both `push()` by adding to the end of an array and `unshift()` by adding to the beginning of an array.

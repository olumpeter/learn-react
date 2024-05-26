
const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink"
  }
};

import "./App.css";
import { Gallery } from "./components/Gallery";
import { Avatar } from "./components/Avatar";
import { PackingList } from "./components/PackingList";
import { PackingList2 } from "./components/PackingList";
import { PackingList3 } from "./components/PackingList";
import { PeopleDataList } from "./components/PeopleDataList";
import { MathematiciansDataList } from "./components/PeopleDataList";
import { ChemistsDataList } from "./components/PeopleDataList";
import { PhysicistsDataList } from "./components/PeopleDataList";
import { AstrophysicistsDataList } from "./components/PeopleDataList";
import SpicedChaiRecipe from "./components/SpicedChaiRecipe";
import FancyText from "./components/FancyText";
import InspirationGenerator from "./components/InspirationGenerator"
import Copyright from "./components/Copyright";


function App() {
  return (
    <>
      <h1>LEARN REACT</h1>
      <h2>1. Describing the UI</h2>

      <h3>1.1 Your first component</h3>
      <div id="your-first-component" className="sub-topic-container">
        <section id="amazing_scientists">
          <h1>Amazing Scientist</h1>
          <Gallery />
        </section>
      </div>


      <h3>1.2. Writing markup with JSX</h3>
      <div id="writing-markup-with-jsx " className="sub-topic-container">
        <h1>Hedy Lamarr's Todos</h1>
        <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr"
          className="photo" />
        <ul id="hedy-todo-list">
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve spectrum technology</li>
        </ul>
      </div>


      <h3>1.3. JavaScript in JSX with curly braces</h3>
      <div id="javaScript-in-jsx-with-curly-braces" className="sub-topic-container"
        style={person.theme}
        /* style={{backgroundColor: "black", color: "pink"}} */>
        <h1>{person.name}'s Todos</h1>
        <img src="https://i.imgur.com/7vQD0fPs.jpg" alt={person.name}
          className="photo" />
        <ul id="hedy-todo-list">
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>


      <h3>1.4. Passing props to a component</h3>
      <div id="passing-props-to-a-component" className="sub-topic-container" >
        <Avatar imageSource="https://i.imgur.com/7vQD0fPs.jpg"
          imageName="Gregorio Y. Zara" imageWidth="100" imageHeight="100" />
      </div>


      <h3>1.5. Conditional Rendering</h3>
      <div id="conditional-rendering" className="sub-topic-container" >

        <h3>1.5.1 Conditionally returning JSX</h3>
        <div id="conditionally-returning-jsx">
          <h1>Sally Ride's Packing List</h1>
          <PackingList />
        </div>

        <h3>1.5.2 Conditionally returning nothing with null</h3>
        <div id="conditionally-returning-nothing-with-null">
          <h1>Sally Ride's Packing List</h1>
          <PackingList2 />
        </div>

        <h3>1.5.3 Conditional (ternary) operator</h3>
        <div id="conditional_ternary_operator">
          <h1>Sally Ride's Packing List</h1>
          <PackingList3 />
        </div>

      </div>

      <h3>1.6. Rendering Lists</h3>
      <div id="rendering-lists" className="sub-topic-container" >
        <h3>1.6.1 Rendering data from arrays</h3>
        <div id="rendering-data-from-arrays">
          <h1>People's data list</h1>
          <PeopleDataList />
        </div>

        <h3>1.6.2 Filtering arrays of items</h3>
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

      <h3>1.7. Keeping Components Pure</h3>
      <div id="keeping-components-pure" className="sub-topic-container" >
        <h3>1.7.1 Purity: Components as formulas</h3>
        <div id="purity-components-as-formulas">
          <SpicedChaiRecipe/>
        </div>
      </div>

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

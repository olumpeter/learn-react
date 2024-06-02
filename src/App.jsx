
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
import { SpicedChaiRecipe } from "./components/SpicedChaiRecipe";
import { FancyText } from "./components/FancyText";
import { InspirationGenerator } from "./components/InspirationGenerator";
import { Copyright } from "./components/Copyright";
import { Toolbar } from "./components/Toolbar";
import { SculptureGallery } from "./components/SculptureGallery";
import { MessageForm } from "./components/MessageForm.jsx";
import { IncrementCountByOne } from "./components/IncrementCountByOne.jsx";
import { SendMessageTo } from "./components/SendMessageTo.jsx";
import { TrafficLight } from "./components/TrafficLight.jsx";
import { ReactBatchStateUpdates } from "./components/BatchStateUpdates.jsx";
import { UpdateSameStateMultipleTimes } from "./components/UpdateSameStateMultipleTimes.jsx";
import { UpdateMembersInfo } from "./components/UpdateMembersInfo.jsx";
import { MembersInfoForm } from "./components/MembersInfoForm.jsx";
import { MembersArtwork } from "./components/MembersArtwork.jsx";
import { MembersArtworkUpdateWithImmer } from "./components/MembersArtworkUpdateWithImmer.jsx";
import { ListOfFriends } from "./components/ListOfFriends.jsx";

function App() {
  return (
    <div id="app">
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

        <h4>1.5.1 Conditionally returning JSX</h4>
        <div id="conditionally-returning-jsx">
          <h1>Sally Ride's Packing List</h1>
          <PackingList />
        </div>

        <h4>1.5.2 Conditionally returning nothing with null</h4>
        <div id="conditionally-returning-nothing-with-null">
          <h1>Sally Ride's Packing List</h1>
          <PackingList2 />
        </div>

        <h4>1.5.3 Conditional (ternary) operator</h4>
        <div id="conditional_ternary_operator">
          <h1>Sally Ride's Packing List</h1>
          <PackingList3 />
        </div>

      </div>

      <h3>1.6. Rendering Lists</h3>
      <div id="rendering-lists" className="sub-topic-container" >
        <h4>1.6.1 Rendering data from arrays</h4>
        <div id="rendering-data-from-arrays">
          <h1>People's data list</h1>
          <PeopleDataList />
        </div>

        <h4>1.6.2 Filtering arrays of items</h4>
        <div id="filtering-arrays-of-items">
          <h1>Scientists' accomplishment by profession: </h1>
          <h2>Mathematician</h2>
          <MathematiciansDataList />
          <h2>Chemist</h2>
          <ChemistsDataList />
          <h2>Physicist</h2>
          <PhysicistsDataList />
          <h2>Astrophysicist</h2>
          <AstrophysicistsDataList />
        </div>
      </div>

      <h3>1.7. Keeping Components Pure</h3>
      <div id="keeping-components-pure" className="sub-topic-container" >
        <h4>1.7.1 Purity: Components as formulas</h4>
        <div id="purity-components-as-formulas">
          <SpicedChaiRecipe />
        </div>
      </div>

      <h3>1.8. Understanding Your UI as a Tree</h3>
      <div id="understanding-your-ui-as-a-tree" className="sub-topic-container" >
        <h4>1.8.1 The Render Tree </h4>
        <div id="the-render-tree ">
          <FancyText title text={"Get Inspired App"} />
          <InspirationGenerator>
            <Copyright year={2024} />
          </InspirationGenerator>
        </div>
      </div>

      <h2>2. Adding Interactivity</h2>

      <h3>2.1 Responding to events</h3>
      <div id="responding-to-events" className="sub-topic-container" >
        <Toolbar />
      </div>

      <h3>2.2 State: a component's memory</h3>
      <div id="state-a-components-memory" className="sub-topic-container" >
        <SculptureGallery />
      </div>

      <h3>2.3 Render and Commit</h3>
      <div id="render-and-commit" className="sub-topic-container" >
        <h4>2.3.1 Setting state triggers renders</h4>
        <div id="setting-state-triggers-renders">
          <MessageForm />
        </div>

        <h4>2.3.2 Rendering takes a snapshot in time</h4>
        <div id="rendering-takes-a-snapshot-in-time">
          <IncrementCountByOne />
        </div>

        <h4>2.3.3 State over time </h4>
        <div id="state-over-time">
          <SendMessageTo />
        </div>

        <h4>2.3.4 Challenge: Implement a traffic light</h4>
        <div id="state-over-time">
          <TrafficLight />
        </div>
      </div>

      <h3>2.5 Queueing a Series of State Updates</h3>
      <div id="queueing-a-series-of-state-updates" className="sub-topic-container" >
        
        <h4>2.5.1 React batches state updates</h4>
        <div id="state-over-time" >
          <ReactBatchStateUpdates />
        </div>

        <h4>2.5.2 Updating the same state multiple times before the next render</h4>
        <div id="updating-same-state-multiple-times">
          <UpdateSameStateMultipleTimes />
        </div>
      </div>

      <h3>2.6 Updating Objects in State</h3>
      <div id="queueing-a-series-of-state-updates" className="sub-topic-container" >
        <h4>2.6.1 Treat state as read-only</h4>
        <div id="treat-state-as-read-only">
          <UpdateMembersInfo />
        </div>
        
        <h4>2.6.2 Copying objects with the spread syntax</h4>
        <div id="copying-objects-with-spread-syntax">
          <MembersInfoForm />
        </div>
        
        <h4>2.6.3 Updating a nested object</h4>
        <div id="updating-nested-object">
          <MembersArtwork />
        </div>
        
        <h4>2.6.4 Write concise update logic with Immer</h4>
        <div id="write-concise-update-logic-with-immer">
          <MembersArtworkUpdateWithImmer />
        </div>

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

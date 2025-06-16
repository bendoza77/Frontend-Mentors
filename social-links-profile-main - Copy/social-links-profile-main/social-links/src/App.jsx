import "./CSS/App.css"
import Top from "./components/Top.jsx";
import Bottom from "./components/Bootom.jsx";

const App = () => {

  
  return (
    <>
      <main>
        <div>
          <Top />
        </div>

        <div className="buttonDiv">
          <Bottom text={"Gihub"}/>
          <Bottom text={"Frontend Mentor"}/>
          <Bottom text={"Linkedin"}/>
          <Bottom text={"Twitter"}/>
          <Bottom text={"Instagram"}/>
        </div>
      </main>
    </>
  );



}





export default App

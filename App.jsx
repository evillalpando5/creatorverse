import Cozy from './assets/Cozy.gif'
// import AddCreator from "./pages/AddCreator.jsx";
import './css/App.css'
import {Link} from "react-router-dom";
import {Outlet} from "react-router-dom";
import ShowCreators from "./pages/ShowCreators.jsx";

function App() {
  return (
      <>
          <main className="header">
            <div className="cozyImg">
              <img src={Cozy} className="base" alt="" />
            </div>
            <div>
              <h1> CREARTORVERSE </h1>
              <p>
                A World Full of Your Favorite People!
              </p>
            </div>
            <div>
                <a href="#show_creators">
                <button className="button"> Show Creators </button>
                </a>
                {/* add a function to move you to lower part of screen */}
                <Link to={"/AddCreator"}>
                    <button className="button"> Add Creator </button>
                </Link>
            </div>
          </main>
          <main className={"allCreators"}>
          <Outlet/>
          </main>
    </>
  )
}
export default App

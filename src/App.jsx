import Header from "./components/header/header.jsx";
import Seaction from "./components/seaction/seaction.jsx";
import Main from "./components/main/main.jsx";
import Menu from "./components/menu/menu.jsx";


export default function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <Header />
        </div>
      </div>

      <div className="section">
        <Seaction />
        <Main />
        <Menu />
      </div>
    </>
  )

}
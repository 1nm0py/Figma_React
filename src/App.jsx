import Header from "./components/header/header.jsx";
import Seaction from "./components/seaction/seaction.jsx";
import Main from "./components/main/main.jsx";
import Menu from "./components/menu/menu.jsx";
import Redline from "./components/RedLine/RedLine.jsx"
import Input from "./components/inputPart/input.jsx"
import Finish from "./components/finish/finish.jsx"


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
      <div className="RedLine_005">
        <div className="RedLine_007">
          <Redline />
        </div>
      </div>
      <div className="section">
        <Input />
        <Finish />
      </div>
    </>
  )

}
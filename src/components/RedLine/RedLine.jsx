import "./RedLine.css"
import PLayMar from "../../assets/QizilLine.img/playMarket.jpg";
import APP from "../../assets/QizilLine.img/App.jpg";
import WIN from "../../assets/QizilLine.img/windows.jpg";

import bg_01 from "../../assets/QizilLine.img/Video_bg.jpg";
import bg_02 from "../../assets/QizilLine.img/Video_bg1.jpg";
import bg_03 from "../../assets/QizilLine.img/Video_bg2.jpg";





export default function RedLine() {
    return (
        <>
            <div className="game">
                <div className="container__game">
                    <div className="game__text">
                        <h1 className="StayOn">Stay focused on saving <br /> money</h1>
                        <div className="game__text__text">
                            <p>It is important to stay focused on saving money in any way you can. We help you
                                monitor your spending habits so you can easily spot and cut any unnecessary
                                expenses. Simply join today to get started!</p>
                        </div>
                    </div>
                    <div className="game__logo">
                        <div className="game__logo__smoll">
                            <img src={PLayMar} alt="" />
                            <img src={APP} alt="" />
                            <img src={WIN} alt="" />
                        </div>
                    </div>
                </div>
                <div className="game__big__img__smoll__play">
                    <div className="game__big__img">
                        <div className="game__big__img__smoll__img">
                            <div className="game__big__img__big">
                                <img src={bg_01} className="game_img_Border"/>
                            </div>
                            <div className="game__big__img__smoll">
                                <img src={bg_02} className="game_img_Border"/>
                            </div>
                        </div>
                        <div className="game__big__img__smoll__play">
                            <img src={bg_03} className="game__img__smoll__img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

import bg_main_01 from "../../assets/Main.img/bg_main01.jpg";
import bg_main_02 from "../../assets/Main.img/bg_main02.jpg";
import bg_main_03 from "../../assets/Main.img/bg_main03.jpg";
import "./main.css"

export default function main() {
    return (
        <>
            <div className="immer__text">
                <h1>Features</h1>
            </div>
            <div className="immer">
                <div className="immer__container">
                    <div className="immer_img">
                        <img src={bg_main_01} className="img" />
                    </div>
                    <div className="immer__play">
                        <div className="immer__text__start">
                            <div className="immer__text__play">
                                <h3>Supports All Currencies and <br /> Cards</h3>
                                <p className="text">We support all popular currencies and is fully customizable to add</p>
                                <button className="immer__button">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="immer__container">
                    <div className="immer_img">
                        <img src={bg_main_02} className="img" />
                    </div>
                    <div className="immer__play">
                        <div className="immer__text__start">
                            <h3>Manage your expenses on <br /> the go</h3>
                            <p className="text">You can access your account from anywhere in the world on any device</p>
                            <button className="immer__button">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="immer__container">
                    <div className="immer_img">
                        <img src={bg_main_03} alt="" className="img" />
                    </div>
                    <div className="immer__play">
                        <div className="immer__text__start">
                            <h3>Cloud Budget Management <br /> Software</h3>
                            <p className="text">Our software is made so you can and manage your budget</p>
                            <button className="immer__button">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

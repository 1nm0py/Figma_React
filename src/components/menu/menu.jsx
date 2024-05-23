import no01 from "../../assets/Menu.img/01.jpg"
import no02 from "../../assets/Menu.img/02.jpg"
import no03 from "../../assets/Menu.img/03.jpg"
import no04 from "../../assets/Menu.img/04.jpg"

import miniLogo01 from "../../assets/Menu.img/dawnload.jpg"
import miniLogo02 from "../../assets/Menu.img/secure.jpg"
import miniLogo03 from "../../assets/Menu.img/PDF.jpg"
import miniLogo04 from "../../assets/Menu.img/CSV.jpg"

import "./menu.css"


export default function menu() {
    return (
        <>
            <div className="container_002">
                <div className="notebook__opsh">
                    <div className="notebook__big__text">
                        <h1>Technology</h1>
                    </div>
                    <div className="notebook">
                        <div className="notebook__play">

                            <div className="notebook__01">
                                <img src={no01} />
                            </div>
                            <div className="notebook__img">
                                <img src={miniLogo01} />
                            </div>
                            <div className="notebook__text">
                                <h1>Cloud Storage</h1>
                            </div>
                            <div className="notebook__small__text">
                                <p>Access your account from anywhere in the world on any device</p>
                            </div>
                        </div>
                        <div className="notebook__play">
                            <div className="notebook__01">
                                <img src={no02} />
                            </div>
                            <div className="notebook__img__1">
                                <img src={miniLogo02} />
                            </div>
                            <div className="notebook__text">
                                <h1>Secure</h1>
                            </div>
                            <div className="notebook__small__text">
                                <p>All your information is stored on secure cloud servers</p>
                            </div>
                        </div>
                        <div className="notebook__play">

                            <div className="notebook__01">
                                <img src={no03} />
                            </div>
                            <div className="notebook__img__2">
                                <img src={miniLogo03} />
                            </div>
                            <div className="notebook__text">
                                <h1>PDF Download</h1>
                            </div>
                            <div className="notebook__small__text">
                                <p>Download any of your reports in PDF format</p>
                            </div>
                        </div>
                        <div className="notebook__play">
                            <div className="notebook__01">
                                <img src={no04} />
                            </div>
                            <div className="notebook__img__3">
                                <img src={miniLogo04} />
                            </div>
                            <div className="notebook__text">
                                <h1>CSV Download</h1>
                            </div>
                            <div className="notebook__small__text">
                                <p>All your information is stored on secure cloud servers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

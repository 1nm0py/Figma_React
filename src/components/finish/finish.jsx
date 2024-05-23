import "./finish.css"

export default function finish() {
    return (
        <>
            <div className="cloudy">
                <div className="cloudy__cloudy">
                    <div className="cloudy__text">
                        <h1>Address</h1>
                    </div>
                    <div className="cloudy__text__smoll">
                        <p>Pipang Ltd, Griva Digeni,<br /> 81-83 Jacovides Tower, 1st Floor <br /> 1090 Picosia USA</p>
                    </div>
                    <div className="cloudy__text__text">
                        <p>Copyright 2018 CloudBudget</p>
                    </div>
                </div>
                <div className="cloudy__text">
                    <h1>Services</h1>
                    <div className="cloudy__text__text__t">
                        Poverview <br /> Features <br /> Technology <br /> Terms & Conditions <br /> Privecy
                    </div>
                </div>
                <div className="cloudy__text__clody__play">
                    <div className="cloudy__text">
                        <h1>Get in Touch</h1>
                    </div>
                    <div className="cloudy__text__smoll__play">
                        <p>info@cloudbudget.com</p>
                        <br />
                        <p>+1 844-721-7120</p>
                    </div>
                    {/* <img src="img/Social.png" /> */}
                </div>
                <div className="cloudy__text__clody">
                    <div className="cloudy__text">
                        <h1>We Support</h1>
                    </div>
                    <div className="cloudy__text__smoll">
                        {/* <img src="img/visa.png" className="cloudy__text__button" /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

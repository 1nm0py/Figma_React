import "./input.css"

export default function input() {
    return (
        <>
            <div className="emmet__gap">
                <div className="emmet__text__big">
                    <div className="emmet__text">
                        <h1>Contact</h1>
                    </div>
                    <div className="emmet__text__smoll">
                        <p>Questions or concerns? Just fill out the form below and our support <br /> team will get back to
                            you within 24 hours</p>
                    </div>
                </div>
                <div className="emmet__form">
                    <div className="emmer__form__gap">
                        <input type="text" placeholder="     First Name" className="emmer__play" />
                        <input type="text" placeholder="     Last Name" className="emmer__play" />
                    </div>
                    <div className="emmer__play__big">
                        <input type="text" placeholder="     Phone Number" className="emmer__buutton__play" /><br /><br />
                        <input type="text" placeholder="     Select Service" className="emmer__buutton__play" /><br /><br />
                        <button className="emmer__buutton">Submit Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

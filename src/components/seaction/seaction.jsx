import BG_img from "../../assets/Section.img/videoLesson.jpg"
import "./seaction.css"
export default function seaction() {
  return (
    <>
      <section className="Seaction_001">
            <div className="section__flex__elems">
                <div className="section__left__box">
                    <h1 className="section__text">Easy to Use Cloud Budget Management Software</h1>
                    <p className="section__paragrof">Our software is made so you can access and manage your budget and
                        expenses
                        online at any time from any device. It provides detailed income and expense reports with graphs
                        so
                        you can easilly see your spending patterns and budget at a glance. Read below to find out more.
                    </p>
                    <button className="section__btn">Learn More</button>
                </div>
                <div className="section__right__box">
                    <div className="section__position">
                        <img src={BG_img} alt="" />
                    </div>
                </div>
            </div>
    </section>
    </>
  )
}

import React from "react"
import workHistory from "../ExData"
import "./style.css"
function Experience() {
    return (
        <div id="Experience">
            <section className="my-28 px-5" id="projects">
                <header className="text-2xl font-bold pt-10">
                    <h2>Experiências</h2>
                </header>
                <div className="main-cont">
                    <section id="cd-timeline" className="cd-container">
                        {workHistory && workHistory.map((work) => (
                            <div className="cd-timeline-block">
                                <div className="cd-timeline-img cd-picture"></div>
                                <div className="cd-timeline-content">
                                    <h1 className="uppercase font-bold text-2xl pl-3 pt-2 flex">{work?.companyName}</h1>
                                    <h4 className="uppercase font-bold text-base pl-3 pt-2">{work?.role}</h4>
                                    <div class="timeline-content-info">
                                        <h5 className="text-sm" style={{ marginLeft: "1px" }}>{work.duration}</h5>
                                    </div>
                                    <div className="pl-2">
                                        {work?.workDes && work.workDes.map((x, index) => (
                                            <h4 className="text-base pt-2" key={index}>
                                                <span className="text-2xl">-</span> {x}
                                            </h4>
                                        ))}
                                    </div>
                                    <div className="flex overflow-auto space-x-3 pb-2 md:flex-wrap">
                                        {work?.exposer && work.exposer.map((ex, index) => (
                                            <span className="border border-gray-500 px-2 py-1 mt-3 ml-1 rounded-lg text-sm" key={index}>
                                                {ex}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Experience

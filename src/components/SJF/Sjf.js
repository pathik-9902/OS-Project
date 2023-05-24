import React from 'react'
import './sjf_code'
import './s_code'

function Sjf() {

    

    return (
        <div>
            <div className="header">

                <div className="content">
                    <div className="theory">
                        <div className="theory-heading">
                            <div>SHORTEST JOB FIRST</div>
                            <div>S.J.F.</div>
                        </div>

                        <div className="visualizer">
                            <div className="error">Invalid Input</div>
                            <div className="container">
                                <div>
                                    <div className="buttons">
                                        <div className="play">PLAY</div>
                                        <div className="reset">RESET</div>
                                    </div>

                                    <div className="avg-tat">Average TAT : <span id="one">0</span></div>
                                    <div className="avg-wt">Average WT : <span id="two">0</span></div>
                                    <div className="avg-rt">Average RT : <span id="three">0</span></div>
                                </div>
                                <div>
                                    <div className="add-process">
                                        <div className="input">
                                            <div className="arrival">
                                                <label htmlFor="arrival-time"> Arrival Time :</label>
                                                <input type="text" id="arrival-time" />
                                            </div>

                                            <div className="burst">
                                                <label htmlFor="burst-time">Burst Time :</label>
                                                <input type="text" id="brust-time" />
                                            </div>
                                        </div>
                                        <div className="add">ADD</div>
                                    </div>

                                    <div className="table">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>PID</th>
                                                    <th>AT</th>
                                                    <th>BT</th>
                                                    <th>ST</th>
                                                    <th>CT</th>
                                                    <th>RT</th>
                                                    <th>WT</th>
                                                    <th>TAT</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="chart">
                        <table id="am">
                            <tbody>
                            <tr className="r" id="row1"></tr>
                            <tr className="r" id="row2"></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sjf;
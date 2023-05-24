import React from 'react'

function Body(props) {
    return (
        <div className="algo">
            <a href='/Sjf'> 
                <div className="box">
                    <div className="content1">
                        <div className="theory">
                            <div className="theory-heading">
                                <div>SHORTEST JOB FIRST</div>
                                <div>(S.J.F.)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <a href='/Dpp'> 
                <div className="box">
                    <div className="content1">
                        <div className="theory">
                            <div className="theory-heading">
                                <div>Dining Philosophers Problem Using Semaphores</div>
                                <div>(D.P.P)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <a href='/Lds'> 
                <div className="box">
                    <div className="content1">
                        <div className="theory">
                            <div className="theory-heading">
                                <div>Look/C-Look Disk Scheduling Algorithm</div>
                                <div>(L.D.S)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </a><a href='/Fifo'> 
                <div className="box">
                    <div className="content1">
                        <div className="theory">
                            <div className="theory-heading">
                                <div>First-in-First-Out Page Replacement Algorithm</div>
                                <div>(F.I.F.O)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Body

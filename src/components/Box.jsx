import React from 'react'
import "./Box.css"

const Box = (props) => {
    const { x } = props
    return (
        <div className="main">
            <div className="banner">
                <div className="banner-left">
                    {x % 2 === 0 ? <h1>December 2020</h1> : <h1></h1>}
                </div>
                <div className="banner-right">
                    {x % 2 !== 0 ? <h1>December 2020</h1> : <h1></h1>}
                </div>
            </div>
            <div className="content">
                <div className="vertical-lines">
                    {x % 2 !== 0 ? <h1>Journey Begins</h1> : <h1></h1>}
                </div>
                <div className="text">
                    <div className="inner-text">
                        <h2>2 November</h2>
                        <div className="line"></div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolorem natus cum voluptates aperiam culpa quae distinctio cumque sequi praesentium hic expedita qui. Maxime totam ipsam, necessitatibus expedita rem consectetur, odit dicta dolores explicabo ea ut, delectus quae dolorem voluptatem deleniti praesentium et esse sequi neque. Hic iure sequi explicabo.
                        </p>
                    </div>
                </div>
                <div className="circle">
                    <div className="cir-1">
                        {x < 2 ? (
                            <h1>B</h1>
                        ) : (
                            <div className="circle-inside">
                                <h2>Creating</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero beatae eos esse assumenda obcaecati consequatur ipsum inventore consectetur id. Fugit?</p>
                            </div>
                        )}

                    </div>
                    <div className="cir-2">
                    </div>
                    <div className="line-2"><div className="insider"></div></div>
                </div>
                <div className="text-2">
                    <div className="inner-text-2">
                        <h2>2 November</h2>
                        <div className="line"></div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, cupiditate, laboriosam omnis, eos asperiores quod eius itaque ipsum enim impedit reiciendis repellat! Hic architecto tempore, reprehenderit illum saepe quidem magnam ea aliquid porro aperiam voluptatum vero dolorum quas fuga placeat asperiores unde explicabo deserunt tempora aliquam impedit illo cupiditate inventore.
                        </p>
                    </div>
                </div>
                <div className="empty">
                    <div className="vertical-lines">
                        {x % 2 === 0 ? <h1>Journey Begins</h1> : <h1></h1>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Box
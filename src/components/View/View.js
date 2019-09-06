import React from 'react';
import './View.css';

const view = (props) => {
    return (
        <div id="quote-box" className="quote-box">
            <div className="title-autor">
                <div className="quote-icon">
                    <i className="fa fa-quote-left" />
                    <div id="text" className="text">
                        {props.currentQuots.title}
                    </div>
                </div>

                <div id="author" className="author">
                    {'- ' + props.currentQuots.writer}
                </div>
            </div>
            <div className="next-twetter-logo">
                <a
                    id="tweet-quote"
                    href={`https://twitter.com/intent/tweet/?text="${
                        props.currentQuots.title
                        }"%20-%20${props.currentQuots.writer}`}
                    target="blank"
                >
                    <i className="fab fa-twitter" />
                </a>
                <a>
                    <i
                        id="id-refresh"
                        className="fa fa-sync-alt"
                        onClick={props.randomQuots}
                    />
                </a>
            </div>

        </div>
    )
};

export default view;


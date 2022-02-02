import React, { useState } from "react";
import API from "../../../api";
import "./usefulHints.css";
const UsefulHints = () => {
    const [hints] = useState(API.hints.fetchAll());
    return (
        <>
            <div className="hints__container">
                <h4 className="hint__headline">Полезные привычки</h4>
                {hints.map((hint) => {
                    return (
                        <div key={hint.id} className="hint__box">
                            <div className="hint__container">
                                <div className="hint__photo">
                                    <img
                                        className="hint__img"
                                        width="400"
                                        src={hint.url}
                                        alt="Вода"
                                    />
                                </div>
                            </div>
                            <div className="hint__text">
                                <div className="hint__title">{hint.title}</div>
                                <div className="hint__description">
                                    {hint.description}
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className="quote">
                    Не откладывай до ужина того, что можешь съесть за обедом.
                </div>
            </div>
        </>
    );
};

export default UsefulHints;

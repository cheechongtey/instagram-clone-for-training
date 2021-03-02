import React, { Component } from "react";

export default class Subheader extends Component {
    constructor(props) {
        super(props);
        this.state = { record: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] };
        this.story = this.story();
    }

    story() {
        return this.state.record.map((value, key) => {
            return (
                <li className="story__item-wrapper" key={key}>
                    <div className="story__item">
                        <button type="button" className="story__item-button">
                            <div className="inner">
                                <span className="avatar">
                                    <img
                                        src="https://instagram.fkul13-1.fna.fbcdn.net/v/t51.2885-19/s150x150/121499314_193566715633210_7595590612455371078_n.jpg?_nc_ht=instagram.fkul13-1.fna.fbcdn.net&_nc_ohc=YBnek6ixTQkAX8wK9tq&tp=1&oh=fcc576e686905f1442d0cc775dc09a8e&oe=5FEE2BEE"
                                        alt=""
                                    />
                                </span>
                                <div className="user">{value}</div>
                                {/* {value} */}
                            </div>
                        </button>
                    </div>
                </li>
            );
        });
    }

    render() {
        return (
            <section id="story__header-container" className="story__header-container p-3">
                <div className="story__header-wrapper">
                    <div className="story__header-content">
                        <ul className="story__item-container">{this.story}</ul>
                    </div>
                </div>
            </section>
        );
    }
}

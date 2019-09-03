import React from 'react';
import styles from './style.module.css';


export default class EventEntry extends React.Component {

    render() {
        return (
            <div className={styles["event-card"]}>
                <div className={styles["event-logo"]}>
                    <a target="_blank"><img className={styles["logos"]} src={this.props.details.imgsrc} /></a>
                </div>
                <div className={styles["event"]}>
                    <div className={styles["event-name"]}>
                        <b>{this.props.details.name}</b>
                    </div>
                    <div className={styles["event-description"]}>
                        {this.props.details.description}
                    </div>
                </div>
                <div className={styles["learnmore-container"]}>
                    <button className={styles["learn-more"]}><a href="#">Learn More</a></button>
                </div>
            </div>

        );
    }
}
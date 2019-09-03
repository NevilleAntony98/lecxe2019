import React from 'react'
import asyncComponent from '../../utils/asyncComponent'
import styles from './style.module.css'
import dhoni from '../../img/dhoni.jpeg'
import hello from'../../img/hello.jpeg'

const EventCardImport = () => import('components/contacts-event-card')

const EventCard = asyncComponent(EventCardImport)


export default class ContactsPage extends React.Component {
    

    constructor(props) {
        super(props)
        this.state={
            people: [
                {
                    name:"MS Dhoni",
                    imgsrc: dhoni,
                    description:"Designation",
                    emailId:"msdhoni@gmail.com",
                    tele:"+910000000000",
                },
                {
                    name: "MS Dhoni",
                    imgsrc: dhoni,
                    description: "Designation",
                    emailId: "msdhoni@gmail.com",
                    tele: "+910000000000",
                    linkedin: "www.hai.com",
                },
                {
                    name: "MS Dhoni",
                    imgsrc: dhoni,
                    description: "Description",
                    emailId:  "msdhoni@gmail.com",
                    tele: "+910000000000"
                },
                {
                    name: "MS Dhoni",
                    imgsrc: dhoni,
                    description: "Description",
                    emailId:  "msdhoni@gmail.com",
                    tele: "+910000000000"
                },
                {
                    name: "MS Dhoni",
                    imgsrc: dhoni,
                    description: "Description",
                    emailId:  "msdhoni@gmail.com",
                    tele: "+910000000000"
                },
                {
                    name: "MS Dhoni",
                    imgsrc: dhoni,
                    description: "Description",
                    emailId:  "msdhoni@gmail.com",
                    tele: "+910000000000"
                }
                
            ]
        }

    }
    render() {
        console.log(styles["contacts"])
        var grid = []
        var people = this.state.people
        for (var i in people) {
            var gridItem = (<a target="_blank" key={i} className={styles["people"]} href={people[i].link} >
                <EventCard details={
                people[i]
            } />            
            </a>)       
            grid.push(gridItem)
        }
        return(
            <div className={styles["contacts"]}>            
                <div className={styles["test-container"]}>
                    {/*<h1 className={styles["color-white-sayhello"]}>Say hello</h1>*/}
                    <img src={hello} className={styles["color-white-image"]}></img>
                    <p className={styles["color-white-dialogue"]}>Questions,kudos or karma...</p>
                    <p className={styles["color-white-dialogue"]}>Send a message to our Slack</p>
                    <hr className={styles["hrline"]}/>                  
                </div>                
                <div id={styles["event-grid"]}>                    
                    {grid}
                </div> 
            </div>            
        );
    }
}




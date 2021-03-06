import React, {Component} from 'react';
import styles from './style.module.css';
import ContactCard from 'components/contact-card';

export default class Contacts extends Component{

    constructor(props){
        super(props)
        this.state={
            cardInfo:[
               {descp:"Chairman",name:"hello",email:"abc@email.com",phno:"+91 0393843959",img:"https://placeimg.com/640/480/people",linkln:"https://in.linkedin.com/"},
               {descp:"Secretary",name:"hello",email:"abc@email.com",phno:"+91 90393843959",img:"https://placeimg.com/640/480/people",linkln:"https://in.linkedin.com/"},
               {descp:"Lorem",name:"hello",email:"abc@email.com",phno:"+91 90393843959",img:"https://placeimg.com/640/480/people",linkln:"https://in.linkedin.com/"},
               {descp:"Lorem",name:"hello",email:"abc@email.com",phno:"+91 90393843959",img:"https://placeimg.com/640/480/people",linkln:"https://in.linkedin.com/"},
               {descp:"Lorem",name:"hello",email:"aabc@email.com",phno:"+91 90393843959",img:"https://placeimg.com/640/480/people",linkln:"https://in.linkedin.com/"},
               {descp:"Lorem",name:"hello",email:"aabc@email.com",phno:"+91 90393843959",img:"https://placeimg.com/640/480/people",linkln:"https://in.linkedin.com/"},
               {descp:"Lorem",name:"hello",email:"bc@email.com",phno:"+91 90393843959",img:"https://placeimg.com/640/480/people",linkln:"https://in.linkedin.com/"}
            ]
        }
    }
    render(){
        var grid = []
        for(var i=0 ; i<this.state.cardInfo.length ; i++){
			var gridItem = <ContactCard details={this.state.cardInfo[i]} />
               grid.push(gridItem) 
        }  
        return(
            <div>
               <div>
               <div className={styles["header"]}>
                    <a className={styles["title"]}>Excel 2019 Talks!</a>
                </div>
                    <div className={styles["container"]}>
                        {grid}
                    </div>
                </div>
            </div>
        )
    }
}
import React from 'react'
import asyncComponent from './utils/asyncComponent'
import {Switch, Route} from 'react-router-dom'
import './App.css'

const ContactsPageImport = () => import('pages/contacts')
const ContactsPage = asyncComponent(ContactsPageImport)

const HomeImport = () => import('pages/home')
const Home = asyncComponent(HomeImport)


const TestPageImport = () => import('pages/sample-component')
const TestPage = asyncComponent(TestPageImport)

const EventsImport = () => import('pages/events')
const Events = asyncComponent(EventsImport)

export default class App extends React.Component {
    render() {
        return(
            <div className="pageContainer">
                <Switch>
                    <Route path="/contacts" component={ContactsPage} />
                    <Route path="/home" component={Home} />
                    <Route path="/test" component={TestPage} />
                    <Route path="/events" component={Events} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        )
    }
}   

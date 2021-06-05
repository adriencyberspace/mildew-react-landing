import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { About } from './About'
import { Subscribe } from './Subscribe'
import { Home } from './Home'

const Main = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/about' component={About}></Route>
                <Route exact path='/subscribe' component={Subscribe}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export { Main }

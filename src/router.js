import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Home, UploadScreen} from './Screens'


const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Switch>
            <Route path='/' component={Home} exact={true}/>
            <Route path='/upload' component={UploadScreen}/>
            </Switch>
        </BrowserRouter>
    )
}

export {AppRoutes}

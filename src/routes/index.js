import React from 'react'
import { Switch, Route } from "react-router-dom";
import GetTogether from '../pages/Get-together';
import Graduation from '../pages/Graduation';
import Marriage from '../pages/Marriage';
import Menu from '../pages/Menu';

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/'>
                <Menu />
            </Route>
            <Route path='/gettogether'>
                <GetTogether />
            </Route>
            <Route path='/graduation'>
                <Graduation />
            </Route>
            <Route path='/marriage'>
                <Marriage />
            </Route>
        </Switch>
    )
}

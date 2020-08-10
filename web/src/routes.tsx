import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/landing';
import TeacherList from './pages/teacherList';
import TeacherForm from './pages/teacherForm';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact={true} component={Landing}></Route>
            <Route path="/study" component={TeacherList}></Route>
            <Route path="/give-classes" component={TeacherForm}></Route>
        </BrowserRouter>
    )
}

export default Routes;
import './Planzajec.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Post from './PostonMainPage';
import Menu from './Menu'
import { Container, Row, Col, Button } from 'react-bootstrap';
import GridPosts from './GridPosts';
import 'devextreme/dist/css/dx.light.css'; 
import { Scheduler,View } from 'devextreme-react/cjs/scheduler';

    const initialData = [];

export const Shedule = function(){

    const [classes,setClasses] = useState([]);
    const onClassAdded = (e)=>{
        setClasses([...classes, e.initialData]);
    };
    const onClassDeleted = (e)=>{
        const filteredClasses = classes.filter(currentClass=>currentClass.id !== e.initialData.id);
        setClasses(filteredClasses);
    }


    return(
        <>
            <Scheduler 
            dataSource={initialData}
            defaultCurrentView='workWeek' 
            allDayPanelMode='hidden'
            showCurrentTimeIndicaton={true}
            onAppointmentAdded={onClassAdded}
            height={600}
            >
                <View
                type="workWeek"
                startDayHour={8}
                endDayHour={21}
                />
            </Scheduler> 
        </>
    );
}

export default Shedule;
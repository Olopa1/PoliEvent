import './Planzajec.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Post from './PostonMainPage';
import Menu from './Menu'
import { Container, Row, Col, Button } from 'react-bootstrap';
import GridPosts from './GridPosts';
import 'devextreme/dist/css/dx.light.css'; 
import { Scheduler,View } from 'devextreme-react/cjs/scheduler';
import userService from '../restFunctionalities/user.service';

//    const initialData = [];

export const Shedule = function(){

    const [classes,setClasses] = useState([]);
    /*const onClassAdded = (e)=>{
        setClasses(prevCLasses => [...classes, e.appointmentData]);
        console.log(classes);
    };*/

    const onClassAdded = (e) => {
        setClasses(prevClasses => {
            const isDuplicate = prevClasses.some(item => item.id === e.appointmentData.id);
            if (isDuplicate) {
                console.log("Duplicate detected. No changes made.");
                return prevClasses;
            }
            const updatedClasses = [...prevClasses, e.appointmentData];
            console.log("Class added. Updated classes:", updatedClasses);
            return updatedClasses;
        });
    };
    
    const onClassDeleted = (e)=>{
        setClasses([...classes, e.appointmentData]);
        console.log(classes);
        //    const filteredClasses = classes.filter(currentClass=>currentClass.id !== e.initialData.id);
    //    setClasses(filteredClasses);
    }

    const addField = ()=>{
        const updatedClass = classes.map((cls)=>({
            ...cls,
            userId: 1
        }));
        setClasses(updatedClass);
        return updatedClass;
    }

    const addToDb = (e)=>{
        e.preventDefault();
        const updateClass = addField();
        console.log(updateClass);
        console.log(classes);
        userService.saveShedule(updateClass).then((res)=>{
            console.log("added successfully");
        }).catch((error)=>{
            console.log(error);       
        })
    }

    return(
        <>  
        <Container>
            <Row>
            <Col>
                <Scheduler 
                dataSource={classes}
                defaultCurrentView='workWeek' 
                allDayPanelMode='hidden'
                showCurrentTimeIndicaton={true}
                onAppointmentAdded={onClassAdded}
                height={600}
                width={1000}
                >
                        <View
                        type="workWeek"
                        startDayHour={8}
                        endDayHour={21}
                        />
                    </Scheduler>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={(e)=>addToDb(e)}>Zapisz plan</Button>
                </Col>
            </Row> 
        </Container>
        </>
    );
}

export default Shedule;
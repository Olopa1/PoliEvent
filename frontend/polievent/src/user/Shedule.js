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

    //const initialData = [];

export const Shedule = function(){

    const [classes,setClasses] = useState([]);
    const [initialData,setInitData] = useState([]);
    const [temp,setTemp] = useState([]);
    const onClassAdded = (e)=>{
        setClasses([...classes, e.initialData]);
        console.log(initialData);
    };
    
    const onClassDeleted = (e)=>{
        const filteredClasses = classes.filter(currentClass=>currentClass.id !== e.initialData.id);
        setClasses(filteredClasses);
    }

    const addField = ()=>{
        setTemp([...initialData]);
        console.log(classes);
        console.log(temp);
        for(var i = 0 ; i < classes.length;i++){
            temp[i].userId = 1; //Index of current logged user
        }        
        setClasses(temp);
    }

    const addToDb = (e)=>{
        e.preventDefault();
        addField();
        console.log(classes);
        userService.saveShedule(classes).then((res)=>{
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
                dataSource={initialData}
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
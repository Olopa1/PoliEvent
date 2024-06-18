import './Planzajec.css';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'devextreme/dist/css/dx.light.css'; 
import { Scheduler,View } from 'devextreme-react/cjs/scheduler';
import userService from '../restFunctionalities/user.service';


export const Shedule = function(){

    const [classes,setClasses] = useState([]);
    const [classesChanged,setClassesChanged] = useState(false);
    useEffect(() => {
        userService.getInitalDataForShedule(1).then((res)=>{
            console.log(res.data);
            setClasses(res.data);
            console.log(classes);
        }).catch((err)=>{
            console.log(err.response.data);
        })
    }, []);

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
        setClassesChanged(true);
    };
    
    const onClassDeleted = (e)=>{
        const idToDelete = e.appointmentData.id;
        const updatedClasses = classes.filter(item=> item.id !== idToDelete);
        setClasses(updatedClasses);
        setClassesChanged(true);
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
        if(classesChanged == true){
            userService.deleteShedulesWithId(1).then((res)=>{
                console.log(res.data);
            }).catch((err)=>{
                console.log(err);
            })
        }
        const updateClass = addField();
        console.log(updateClass);
        console.log(classes);
        userService.saveShedule(updateClass).then((res)=>{
            console.log("added successfully");
        }).catch((error)=>{
            console.log(error.response.data);       
        })
        setClassesChanged(false);
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
                onAppointmentDeleted={onClassDeleted}
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
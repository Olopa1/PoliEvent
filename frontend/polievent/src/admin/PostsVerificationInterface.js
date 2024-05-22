import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import './PostsVerificationInterface.css';

const PostCard = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    
    <div className="post-card">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 col-sm-12 mb-3" style={{fontSize:30}}>
              <h5 className="card-title">Nazwa wydarzenia</h5>
              <p className="card-text" >{event.name} </p>
            </div>
            <div className="col-md-4 col-sm-12 mb-3 " style={{fontSize:30}}>
              <h5 className="card-title">Organizator</h5>
              <p className="card-text">{event.organizer}</p>
            </div>
            <div className="col-md-4 col-sm-12 mb-3" style={{fontSize:30}}>
              <h5 className="card-title">Data</h5>
              <p className="card-text">{event.date}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Button className="btn btn-success mr-2" style={{marginRight:15}}>Zatwierdź</Button>
              <Button className="btn btn-danger mr-2" style={{marginRight:15}}>Usuń</Button>
              <Button className="btn btn-primary mr-2 " onClick={toggleExpand}>
                {isExpanded ? 'Zwiń' : 'Rozwiń'}
              </Button>
              {isExpanded && (
                <div className="expanded-content">
                  <hr />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione inventore sed nisi unde! Qui consequatur, voluptates velit suscipit dicta, nostrum a praesentium rem omnis quo repellat adipisci cum aut? Quos.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

export const Verification = () => {
  const event1 = {
    name: 'Food trucki na PŁ',
    organizer: 'Stowarzyszenie F.O.O.D',
    date: '27.04.2024'
  };
  const event2 = {
    name: 'Food trucki na PŁ',
    organizer: 'Stowarzyszenie F.O.O.D',
    date: '27.04.2024'
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 style={{ textAlign: 'center', marginBottom: '20px' }} className="header"><b>Posty do weryfikowania</b></h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <PostCard event={event1} />
          <PostCard event={event2} />

        </div>
      </div>

      <div className="row justify-content-end">
        <div className="col-md-1">
          <button className="btn btn-danger float-right wyloguj mb-3" >Wyloguj</button>
        </div>
      </div>
    </div>
  );
};

export default Verification;

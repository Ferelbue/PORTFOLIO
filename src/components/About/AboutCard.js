import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fernando Elegido </span>
            from <span className="purple"> Valencia, Spain.</span>
            <br />
            <br />
            I am currently studing a full stack developer bootcamp on GeeksHubs Academy.
            <br />
            I am graduated from the Polytechnic University of Valencia with a bachelor's degree in Industrial and Automatic Electronics Engineering.
            <br />
            <br />
            The last 9 years I have been working as a maintenance and programming technician in FORD MOTOR COMPANY.
            <br />
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

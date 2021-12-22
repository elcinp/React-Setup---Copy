import React from "react";
import {Row,Col,Container} from "react-bootstrap"
import MyCard from "./MyCard"

const Courses = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Container>
        <Row>
          {data.map((course) => {
            return <Col key={course.id} xs={12} md={6} lg={4}>
                <MyCard course={course}/>
            </Col>;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;

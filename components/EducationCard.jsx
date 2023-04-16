import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-reveal";
import Experience from "../containers/Experience";

const EducationCard = ({ education }) => {
  return (
    <Fade left duration={2000}>
      <Card className="card-lift--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <Badge color="info" className="mr-1">
                {"2 Years +"}
              </Badge>
              {education.grade && (
                <Badge color="primary" className="mr-1">
                  {"Experienced"}
                </Badge>
              )}
              <p className="description mt-3"></p>
              <ul>
                {education.descBullets
                  ? education.descBullets.map((desc) => {
                      return <li key={desc}>{desc}</li>;
                    })
                  : null}
              </ul>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default EducationCard;

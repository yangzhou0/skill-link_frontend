import React from 'react'
import { Card, Badge, Button } from 'react-bootstrap'
export default function JobTitles(props) {

let jobs = props.jobs

  return (
    <div>
      {jobs.map((job) => (
        <Card>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <div>
                <Card.Title>
                  {job["OccupationTitle"]}
                </Card.Title>
                <Card.Subtitle className="text-muted mb-2">
                  Average annual wage - ${job["AnnualWages"]}
                </Card.Subtitle>
                <Card.Subtitle className="text-muted mb-2">
                  {job["EduCode"] === 7.0 ? "No formal education required" : "Typical education - " + job["TypicalEducation"]}
                </Card.Subtitle>
                <Badge variant="secondary">
                  Job Outlook - {job["Outlook"]}
                </Badge>
                <div>
                  <br/>
                  <Button variant="primary">
                    Full Occupation Details
                  </Button>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
    ))}
    </div>
  )
}

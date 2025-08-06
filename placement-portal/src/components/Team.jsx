import React from "react";
import {teamData} from "../assets/projectData.js";

const Team = () => {
  return (
    <div className="container mb-5">
      <h3 className="text-center mb-4">Our Team</h3>
      <div className="row text-center">
        {teamData.map((member, index) => (
          <div className="col-md-3 team-member" key={index}>
            <img
              src={member.img}
              alt={member.name}
              className="rounded-circle"
              style={{ width: 120, height: 120, objectFit: "cover" }}
            />
            <h5>{member.name}</h5>
            <p>{member.role} <br /> {member.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

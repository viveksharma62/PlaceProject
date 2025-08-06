import React from "react";
import Team from "./Team";
import WhyUs from "./WhyUs";

const About = () => {
  return (
    <section id="home">
      {/* About Card */}
      <div className="container my-5">
        <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://i.pinimg.com/474x/da/8c/ec/da8cec60774b806f61732b3e75a17103.jpg"
                className="img-fluid rounded-start"
                alt="About Us"
                style={{ objectFit: "cover", height: "100%" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">About Us</h5>
                <p className="card-text">
                    We are a passionate and hardworking team of students from Marwadi University, working together in the field of Web Technologies. Our main goal is to help students get good jobs in top companies. We do this by building strong connections with recruiters and inviting them to visit our college for placement drives.<br/><br/>

                    Our team focuses not only on finding companies but also on helping students become job-ready. We arrange regular training sessions, coding practice, mock interviews, and group discussions. We also work on real-time projects, so students can learn by doing. These activities help students improve both their technical and soft skills, such as communication and teamwork.<br/><br/>

                    We believe every student has potential. With the right support and preparation, anyone can succeed. That’s why we guide students personally and help them understand the current industry needs. We keep ourselves updated with the latest technologies and trends in web development.<br/><br/>

                    Our team works with full energy, passion, and unity. We believe in teamwork, honesty, and continuous learning. Together, we are building a strong link between students and companies, and helping shape a better future for everyone involved.<br/><br/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <WhyUs />

      {/* Team Members */}
      <Team />
    </section>
  );
};

export default About;

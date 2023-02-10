import React from "react";
import "./servicess.css";

const Services = () => {
  return (
    <div>
      <h2 className="header">Our Services</h2>
      <div className="grid-container">
        <div>
          <div className="grid-item">
            <h3>Customer Service</h3>
            <p>
              M/S Mitali International delivers a variety of personalized
              services for everything from collections to billing, service
              inquiries and problem resolution, to help you boost your
              customer's acquisition, retention and grow your brand.
            </p>
          </div>
        </div>
        <div>
          <div className="grid-item">
            <h3>Technical Support</h3>
            <p>
              We provide Support Solutions through inbound call, live chat and
              emails to maximize customer's satisfaction and loyalty and
              increase revenue with solutions designed to address the most
              complex customers.
            </p>
          </div>
        </div>
        <div>
          <div className="grid-item">
            <h3>Lead Generation</h3>
            <p>
              We support the business-to-consumer (B2C) and business-to-business
              (B2B) sectors to maintain a continous flow of sales leads,
              managing from prospects qualification to win-back initiatives and
              up-selling, cross-selling programs.
            </p>
          </div>
        </div>
      </div>

      <div className="grid-container">
        <div>
          <div className="grid-item">
            <h3>Data Entry</h3>
            <p>
              Our highly experienced team has the capability to handle large
              volumes of data entry and analysis, providing accurate and timely
              data entry services such as: Data entry from images, Online order
              entry and follow up and mailing list for a variety of industries
              and companies.
            </p>
          </div>
        </div>
        <div>
          <div className="grid-item">
            <h3>Audience Development and Direct Response</h3>
            <p>
              We have the tools in our extensive portfolio of solutions to
              engage with your target audience. This includes agents
              specializing in phone and digital solutions, up-sell and
              cross-sell capabilities, SMS texting and automated IVR that
              specializing in phone and digital solutions, up-sell and
              cross-sell capabilities, SMS texting and automated IVR that
              provide both stand-alone or agent integration and bilingual
              agents.
            </p>
          </div>
        </div>
        <div>
          <div className="grid-item">
            <h3>Back Office Solutions</h3>
            <p>
              By integrating Back Office solutions to your company you will
              simplify day-to-day tasks and we will help you to significantly
              lower overhead costs and streamline your operations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import "./addworker.scss";

const Addworker = () => {
  const onFinish = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <>
      <div className="add-worker-parent parent">
        <div className="add-worker-cont cont">
          <form action="#">
            <div className="first-group">
              <input
                type="text"
                id="worker_name"
                name="worker_name"
                placeholder="Enter worker's name"
                required
              />

              <input
                type="tel"
                id="worker_mobile"
                name="worker_mobile"
                placeholder="Enter mobile number"
                required
              />
            </div>

            <div className="first-group">
              <input
                type="email"
                id="worker_mail"
                name="worker_mail"
                placeholder="Enter email address"
                required
              />

              <input
                type="text"
                id="worker_roll"
                name="worker_roll"
                placeholder="Enter worker's role"
                required
              />
            </div>

            <div className="first-group">
            <input
              type="date"
              id="worker_dob"
              name="worker_roll"
              //   placeholder="Enter worker's role"
              required
            />
            <input
              type="text"
              id="worker_team"
              name="worker_team"
                placeholder="Enter Team Name"
              required
            />
            </div>

           
            <textarea
              type="text"
              id="worker_jobdesc"
              rows={1}
              name="worker_jobdesc"
                placeholder="Enter Full Work Description"
              required
            /> 
             <textarea
              type="text"
              id="worker_address"
              rows={1}
              name="worker_address"
                placeholder="Enter Full Address"
              required
            /> 
<div className="first-group">
            <input
              type="date"
              id="worker_dob"
              name="worker_roll"
              //   placeholder="Enter worker's role"
              required
            />
            <input
              type="text"
              id="worker_team"
              name="worker_team"
                placeholder="Enter Team Name"
              required
            />
            </div>
            <div className="first-group">
            <input
              type="date"
              id="worker_dob"
              name="worker_roll"
              //   placeholder="Enter worker's role"
              required
            />
            <input
              type="text"
              id="worker_team"
              name="worker_team"
                placeholder="Enter Team Name"
              required
            />
            </div>
            <input
              type="file"
              id="worker_team"
              name="worker_team"
                placeholder="Select File"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addworker;

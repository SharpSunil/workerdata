import React, { useEffect, useState } from "react";
import "./addworker.scss";
import { Await } from "react-router-dom";
import axios from "axios";

const Addworker = () => {
  const [savedata, setSavedata] = useState({
    worker_name: "",
    worker_mobile: "",
    worker_mail: "",
    worker_roll: "",
    worker_dob: "",
    worker_jobdesc: "",
    worker_address: "",
    worker_team: "",
    worker_card_number: "",
    worker_uid_number: "",
    worker_pan_number: "",
    worker_nominee_name: "",
    worker_image: "",
  });
  const handleAddworker = async () => {};
  console.log(savedata, "JKHGHJGFHjf");

  useEffect(() => {
    handleAddworker();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/worker/createworker`,
        savedata
      );
      console.log(response, "dfslkdslfksdfkljksldf");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="add-worker-parent parent">
        <div className="add-worker-cont cont">
          <form onSubmit={handleSubmit}>
            <div className="first-group">
              <input
                type="text"
                id="worker_name"
                name="worker_name"
                placeholder="Enter worker's name"
                value={savedata.worker_name}
                onChange={(e) =>
                  setSavedata({ ...savedata, worker_name: e.target.value })
                }
                required
              />

              <input
                type="tel"
                id="worker_mobile"
                name="worker_mobile"
                placeholder="Enter mobile number"
                value={savedata.worker_mobile}
                onChange={(e) =>
                  setSavedata({ ...savedata, worker_mobile: e.target.value })
                }
                required
              />
            </div>

            <div className="first-group">
              <input
                type="email"
                id="worker_mail"
                name="worker_mail"
                placeholder="Enter email address"
                value={savedata.worker_mail}
                onChange={(e) =>
                  setSavedata({ ...savedata, worker_mail: e.target.value })
                }
                required
              />
              <input
                type="text"
                id="worker_roll"
                name="worker_roll"
                placeholder="Enter worker's roll"
                value={savedata.worker_roll}
                onChange={(e) =>
                  setSavedata({ ...savedata, worker_roll: e.target.value })
                }
                required
              />
            </div>

            <div className="first-group2">
              <label>Date of Birth: </label>
              <input
                type="date"
                id="worker_dob"
                name="worker_dob"
                value={savedata.worker_dob}
                onChange={(e) =>
                  setSavedata({ ...savedata, worker_dob: e.target.value })
                }
                required
              />
            </div>

            <textarea
              type="text"
              id="worker_jobdesc"
              rows={1}
              name="worker_jobdesc"
              placeholder="Enter Full Work Description"
              value={savedata.worker_jobdesc}
              onChange={(e) =>
                setSavedata({ ...savedata, worker_jobdesc: e.target.value })
              }
              required
            />
            <textarea
              type="text"
              id="worker_address"
              rows={1}
              name="worker_address"
              placeholder="Enter Full Address"
              value={savedata.worker_address}
              onChange={(e) =>
                setSavedata({ ...savedata, worker_address: e.target.value })
              }
              required
            />

            <div className="first-group">
              <input
                type="text"
                id="worker_team"
                name="worker_team"
                value={savedata.worker_team}
                placeholder="Enter Team Name"
                onChange={(e) =>
                  setSavedata({ ...savedata, worker_team: e.target.value })
                }
                required
              />

              <input
                type="text"
                id="worker_card_number"
                name="worker_card_number"
                placeholder="Enter Valid Card Number"
                value={savedata.worker_card_number}
                onChange={(e) =>
                  setSavedata({
                    ...savedata,
                    worker_card_number: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="first-group">
              <input
                type="text"
                id="worker_uid_number"
                name="worker_uid_number"
                placeholder="Enter Valid UID Number"
                value={savedata.worker_uid_number}
                onChange={(e) =>
                  setSavedata({
                    ...savedata,
                    worker_uid_number: e.target.value,
                  })
                }
                required
              />
              <input
                type="text"
                id="worker_pan_number"
                name="worker_pan_number"
                placeholder="Enter Valid PAN Card Number"
                value={savedata.worker_pan_number}
                onChange={(e) =>
                  setSavedata({
                    ...savedata,
                    worker_pan_number: e.target.value,
                  })
                }
                required
              />
            </div>
            <input
              type="text"
              id="worker_nominee_name"
              name="worker_nominee_name"
              placeholder="Enter Worker Nominee Name"
              value={savedata.worker_nominee_name}
              onChange={(e) =>
                setSavedata({
                  ...savedata,
                  worker_nominee_name: e.target.value,
                })
              }
              required
            />
            <div className="first-group3">
              <label>Upload Profile Picture: </label>
              <input
                type="file"
                id="worker_image"
                name="worker_image"
                value={savedata.worker_image}
                onChange={(e) =>
                  setSavedata({ ...savedata, worker_image: e.target.value })
                }
              />
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addworker;

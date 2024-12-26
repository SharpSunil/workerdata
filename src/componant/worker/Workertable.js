import React, { useEffect, useState } from "react";
import "./worker.scss";
import { Table as AntTable } from "antd";
import axios from "axios";
const Workertable = () => {
  const [worker, setWorker] = useState([]);

  const handlesetWorker = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/worker/viewworker`
      );

      setWorker(response.data.data);
    
      
     
    } catch (error) {
      console.log(error);
    }
  };
useEffect (()=>{
  handlesetWorker();
},[])



  const columns = [
    {
      title: "Worker Name",
      dataIndex: "worker_name",
      key: "name",
    },
    {
      title: "Contact Number",
      dataIndex: "worker_card_number",
      key: "contact",
    },
    {
      title: "Email",
      dataIndex: "worker_mail",
      key: "email",
    },
    {
      title: "Roll",
      dataIndex: "worker_roll",
      key: "roll",
    },
    {
      title: "Birth Date",
      dataIndex: "worker_dob",
      key: "birth date",
    },
    {
      title: "Job Description",
      dataIndex: "worker_jobdesc",
      key: "job description",
    },
    {
      title: "Address",
      dataIndex: "worker_address",
      key: "address",
    },
    {
      title: "Team",
      dataIndex: "worker_team",
      key: "team",
    },
    {
      title: "Card Number",
      dataIndex: "worker_card_number",
      key: "card number",
    },
    {
      title: "UID Number",
      dataIndex: "worker_uid_number",
      key: "uid number",
    },
    {
      title: "Pan Number",
      dataIndex: "worker_pan_number",
      key: "pan number",
    },
    {
      title: "Nominee Name",
      dataIndex: "worker_nominee_name",
      key: "nominee name",
    },
    {
      title: "Image",
      dataIndex: "worker_image",
      key: "image",
    },
  ];

  // Define the data for the table


  return (
    <div className=" table_parent parent">
      <div className="cont table_cont">
        <AntTable
          columns={columns}
          dataSource={worker}
          pagination={{ pageSize: 10 }}
          rowClassName="editable-row"
          scroll={{ x: "max-content" }}
          bordered={true}
          className="table"
        />
      </div>
    </div>
  );
};

export default Workertable;

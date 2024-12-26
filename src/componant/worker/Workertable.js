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

      console.log(response, "sdflkdfksjljkldsfjklsdfjkljkldsf");
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
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Contact Number",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Roll",
      dataIndex: "roll",
      key: "roll",
    },
    {
      title: "Birth Date",
      dataIndex: "birth_date",
      key: "birth date",
    },
    {
      title: "Job Description",
      dataIndex: "job_desc",
      key: "job description",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Team",
      dataIndex: "team",
      key: "team",
    },
    {
      title: "Card Number",
      dataIndex: "card_number",
      key: "card number",
    },
    {
      title: "UID Number",
      dataIndex: "uid_number",
      key: "uid number",
    },
    {
      title: "Pan Number",
      dataIndex: "pan_number",
      key: "pan number",
    },
    {
      title: "Nominee Name",
      dataIndex: "nominee_name",
      key: "nominee name",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
    },
  ];

  // Define the data for the table
  const data = [
    {
      key: "1",
      name: "John Doe",
      contact: 9898989856,
      email: "test@gmail.com",
      roll: "tester",
      birth_date: "23 Jan 1990",
      job_desc: "a tester",
      address: "New York No. 1 Lake Park",
      team: "develop",
      card_number: 233434232,
      uid_number: 34234377443,
      pan_number: "SVG3232DS",
      nominee_name: "vikram",
      image: "dfsjkldfksjsdljfklkjdsf",
    },
    {
      key: "2",
      name: "Alice Smith",
      contact: "9876543210",
      email: "alice.smith@example.com",
      roll: "Developer",
      birth_date: "12 Feb 1988",
      job_desc: "Frontend Developer",
      address: "456 Silicon Valley Blvd, CA",
      team: "UI/UX",
      card_number: "2233445566",
      uid_number: "123456789012",
      pan_number: "XYZP5678Q",
      nominee_name: "Bob Smith",
      image: "https://via.placeholder.com/100",
    },
    {
      key: "3",
      name: "Robert Brown",
      contact: "9123456789",
      email: "robert.brown@example.com",
      roll: "Project Manager",
      birth_date: "05 Mar 1985",
      job_desc: "Oversees project delivery",
      address: "789 Washington Street, DC",
      team: "Management",
      card_number: "9988776655",
      uid_number: "112233445566",
      pan_number: "LMNO9123Z",
      nominee_name: "Sarah Brown",
      image: "https://via.placeholder.com/100",
    },
    {
      key: "4",
      name: "Emily Davis",
      contact: "8912345678",
      email: "emily.davis@example.com",
      roll: "Analyst",
      birth_date: "10 Apr 1992",
      job_desc: "Data Analyst",
      address: "321 Wall Street, NY",
      team: "Business Intelligence",
      card_number: "3344556677",
      uid_number: "556677889900",
      pan_number: "QRST4567T",
      nominee_name: "Michael Davis",
      image: "https://via.placeholder.com/100",
    },
    {
      key: "5",
      name: "Michael Wilson",
      contact: "7812345678",
      email: "michael.wilson@example.com",
      roll: "Designer",
      birth_date: "15 May 1989",
      job_desc: "Graphic Designer",
      address: "654 Broadway, NY",
      team: "Creative",
      card_number: "1122334455",
      uid_number: "667788990011",
      pan_number: "UVWX8912A",
      nominee_name: "Emma Wilson",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div className=" table_parent parent">
      <div className="cont table_cont">
        <AntTable
          columns={columns}
          dataSource={data}
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

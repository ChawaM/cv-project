import { useState } from "react";
import "./style.css";

function App() {
  const [input, setInput] = useState({});

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <>
      <h1 className="personal"> Personal Details </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={input.firstName || ""}
          placeholder="First Name"
          onChange={handleChange}
          className="firstName"
        />
        <br></br>
        <input
          type="text"
          name="lastName"
          value={input.lastName || ""}
          placeholder="Last name"
          onChange={handleChange}
          className="lastName"
        />
        <br></br>
        <input
          type="date"
          name="age"
          value={input.age || ""}
          placeholder="Date of Birth"
          onChange={handleChange}
          className="age"
        />
        <br></br>
        <input
          type="email"
          name="email"
          value={input.email || ""}
          placeholder="Email Address"
          onChange={handleChange}
          className="email"
        />
        <br></br>
        <input
          type="phonenumber"
          name="number"
          value={input.number || ""}
          placeholder="Phone Number"
          onChange={handleChange}
          className="number"
        />
        <br></br>
        <h1>Educational Background </h1>

        <input
          type="text"
          name="school1"
          value={input.school1 || ""}
          onChange={handleChange || ""}
          placeholder="School/University"
          className="school1"
        />

        <br></br>

        <input
          type="text"
          name="degree1"
          value={input.degree1}
          onChange={handleChange || ""}
          placeholder="Degree or Diploma"
          className="degree1"
        />

        <br></br>

        <input
          type="text"
          name="study1"
          value={input.study1}
          onChange={handleChange || ""}
          placeholder="Field of Study"
          className="study1"
        />

        <br></br>

        <input
          type="date"
          name="startdate1"
          value={input.startdate1}
          onChange={handleChange || ""}
          placeholder="Start Date"
          className="startdate1"
        />

        <br></br>

        <input
          type="date"
          name="enddate1"
          value={input.enddate1 || ""}
          onChange={handleChange || ""}
          placeholder="End Date"
          className="enddate1"
        />

        <br></br>
        <h3 className="edu2"> Educational Background 2</h3>

        <input
          type="text"
          name="school2"
          value={input.school2 || ""}
          onChange={handleChange || ""}
          placeholder="School/University"
          className="school2"
        />

        <br></br>

        <input
          type="text"
          name="degree2"
          value={input.degree2}
          onChange={handleChange || ""}
          placeholder="Degree or Diploma"
          className="degree2"
        />

        <br></br>

        <input
          type="text"
          name="study2"
          value={input.study2}
          onChange={handleChange || ""}
          placeholder="Field of Study"
          className="study2"
        />

        <br></br>

        <input
          type="date"
          name="startdate2"
          value={input.startdate2}
          onChange={handleChange || ""}
          placeholder="Start Date"
          className="startdate2"
        />

        <br></br>

        <input
          type="date"
          name="enddate2"
          value={input.enddate2 || ""}
          onChange={handleChange || ""}
          placeholder="End Date"
          className="enddate2"
        />

        <br></br>
      </form>
      <h1 className="personal">Personal Details </h1>
      <div className="first">First Name: {input.firstName}</div>
      <div className="last">Last Name: {input.lastName}</div>
      <div className="DOB">Date of Birth: {input.age}</div>
      <div className="emailAd">Email Address: {input.email}</div>
      <div className="phonenumber">Phone Number: {input.number}</div>
      <h1 className="eduback">Educational Background</h1>
      <div className="schooluni">School/University: {input.school1}</div>
      <div className="dip">Diploma/Degree: {input.degree1}</div>
      <div className="starting">Start Date: {input.startdate1}</div>
      <div className="ending">End Date: {input.enddate1}</div>
      <h3 className="eduback">Educational Background</h3>
      <div className="schooluni">School/University: {input.school2}</div>
      <div className="dip">Diploma/Degree: {input.degree2}</div>
      <div className="starting">Start Date: {input.startdate2}</div>
      <div className="ending">End Date: {input.enddate2}</div>
    </>
  );
}
export default App;

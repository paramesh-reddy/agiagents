import React, { Component, useState } from "react";
import Navbar from "../../layout2/navbar2/Navbar2";
import "./Index.css";
const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    appLink: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, e.g., sending data to an API.
    console.log(formData);
  };

  return (
    <div>
      <Navbar />
      <h2 className="Project">Project Submission Form</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "50%",
          margin: "0 auto",
          padding: "20px",
          background: "#f9f9f9",
          borderRadius: "10px",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
            placeholder="Enter name"
            required
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
            placeholder="example@gmail.com"
            required
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
            placeholder="Enter your text"
            required
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="appLink">Link to your app</label>
          <input
            type="url"
            id="appLink"
            name="appLink"
            value={formData.appLink}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
            placeholder="Enter URL"
            required
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="file">Upload demo recording or deck</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background:
              "linear-gradient(90deg, rgba(255,0,150,1) 0%, rgba(0,255,255,1) 100%)",
            border: "none",
            borderRadius: "5px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
//   return (
//     <div>
//       <Navbar/>
//       <div class="card">
//   <div class="card-body">
//   <input type="text"

//     </div>
// </div>
//     </div>
//   );
// };

export default Index;

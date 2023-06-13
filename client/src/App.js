import "./App.css";
import React, { useState } from "react";
import axios from "axios";
const server = "http://localhost:4000";

function App() {
  const [avatar, setAvatar] = useState([]);
  const [loading, setloading] = useState(false);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };
  console.log(avatar);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const newForm = new FormData();

    newForm.append("file", avatar);
    setloading(true);
    axios
      .post(`${server}/multer/createImages`, newForm, config)
      .then((res) => {
        alert(res.data.message);
        setloading(false);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            name="images"
            accept=".jpg,.jpeg,.png"
            onChange={handleFileInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;

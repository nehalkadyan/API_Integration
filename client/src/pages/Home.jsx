import React, { useState } from "react";

const Home = () => {
  //

  return (
    <div>
      <h1>Home Page</h1>
      <h3>Update Username</h3>

      <form>
        <input
          style={{ padding: 10, backgroundColor: "white", color: "black",
            margin: 10, borderRadius: 10, outline: "none"
           }}
          type="text"
          placeholder="Enter new username"
        />
        <br />
        <button type="submit">Update Username</button>
      </form>
    </div>
  );
};

export default Home;

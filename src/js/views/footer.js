import React from "react";

const Footer = () => (
  <footer
    style={{
      backgroundColor: "#7c7577",
      color: "#252b2e",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100px",
      fontSize: "30px",
      fontFamily: "Arial",
      fontWeight: "light",
    }}
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/1024px-Harry_Potter_wordmark.svg.png"
      alt="Harry Potter logo"
      style={{ width: "200px", marginRight: "20px" }}
    />
    <p>© 2023 4GEEKS - PT35</p>
  </footer>
);

export default Footer;

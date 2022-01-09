import React from "react";
import colors from "../Colors";

import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

function Home() {
  return (
    <div className="container-fluid">
      <p style={{ color: colors.GREY }}>Hey Awesome</p>

      <div className="row">
        {/* link container  */}
        <div className="col d-flex flex-column">
          <AiFillGithub color={colors.PINK} size={25} />
          <AiFillFacebook color={colors.PINK} size={25} />
          <AiFillInstagram color={colors.PINK} size={25} />
          <AiFillLinkedin color={colors.PINK} size={25} />
        </div>
        {/* name container  */}
        <div className="col">
          <p style={{ color: colors.GREY }}>I'm</p>
          <h1 style={{ color: colors.PINK }}>
            Asnan <p style={{ color: colors.GREY }}>Ashfaq</p>
          </h1>
          <p style={{ color: colors.GREY }}>
            a <h3 style={{ color: colors.PINK }}>Software Developer.</h3>
          </p>
        </div>
        {/* image container  */}
        <div className="col">
          <img
            src={require("../../src/assets/images/ME.png")}
            alt=""
            style={{ width: 600, height: 600 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

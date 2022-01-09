import React, { FC } from "react";
import colors from "../Colors";
type props = {
  heading: string;
  text: string;
  video: string;
  built_with: Array<any>;
  links: Array<any>;
};
const Card: FC<props> = (props) => {
  return (
    <div className="container-fluid">
      <div className="d-flex flex-row">
        <div className="col">
          <div
            style={{
              backgroundColor: colors.CARD_BACKGROUND_COLOR,
              borderRadius: 10,
            }}
          >
            <p style={{ color: colors.PINK, textAlign: "center" }}>
              {props.heading}
            </p>
            <p style={{ color: colors.GREY, textAlign: "center" }}>
              {props.text}
            </p>
            <p style={{ color: colors.GREY, textAlign: "center" }}>
              Built With
            </p>
            <div className="d-flex flex-row justify-content-around align-items-center">
              {props.built_with.map((built) => (
                <p style={{ color: colors.PINK, textAlign: "center" }}>
                  {built}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="col">
          <p style={{ color: colors.GREY }}>This is the video section</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

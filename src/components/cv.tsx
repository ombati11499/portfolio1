import React from "react";
import { FaHeart } from "react-icons/fa";
interface Props {
  close: () => void;
}
const Cv = ({ close }: Props) => {
  return (
    <div
      style={{
        backgroundColor: "maroon",
        display: "flex",
        height: "100%",
        width: "100%",
        zIndex: 1,
        justifyContent: "center",
        opacity: 0.9,
      }}
    >
      {/* <p>CV</p> */}
      <div
        style={{
          margin: 40,
          backgroundColor: "white",
          display: "flex",
          zIndex: 2,
          height: "100%",
          width: "50%",
          opacity: 1,
          borderRadius: 10,
          // flex:1
        }}
      >
        <button
          onClick={close}
          style={{
            marginTop: 30,
            marginLeft: 5,
            backgroundColor: "maroon",
            height: 40,
            alignContent: "center",
          }}
        >
          <text
            style={{
              // color: "black",
              fontSize: 40,
              position: "relative",
              fontWeight: "700",
              // textAlign: "center",
            }}
          >
            x
          </text>
        </button>
        <div>
          <FaHeart />
        </div>
      </div>
    </div>
  );
};
export default Cv;

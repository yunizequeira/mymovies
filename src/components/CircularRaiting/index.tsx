'use client';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularRaiting = ({value}:{value:number}) => {
  return (
    <div style={{ width: '100%', height: "100%"  }}>
      <CircularProgressbar value={value} text={`${value}%`} backgroundPadding={6} styles={{path:{stroke:'#22c55e'},text:{fill:'#22c55e'}}}/>
    </div>
  );
};

export default CircularRaiting;

import React from "react";

interface BodyProps {
  content: JSX.Element;
}

const Body: React.FC<BodyProps> = ({ content }) => {
  return <div className="absolute top-20  ">{content}</div>;
};
export default Body;

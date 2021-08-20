import React from "react";

export default (props) => (
  <div
    className="periphery-container"
    dangerouslySetInnerHTML={{ __html: props.peripheryList }}
  />
);

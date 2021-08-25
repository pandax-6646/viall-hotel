import React from "react";

export default (props) => {
  return (
    <div className="list">
      <ul>
        {props.list.map((item) => {
          return (
            <li className="item flex bg-fff mb-10" key={item.hashid}>
              <div>
                <img src={item.imageUrl} alt="" />
              </div>
              <div className="mt-10 ml-15">
                <span className="f14">{item.title}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

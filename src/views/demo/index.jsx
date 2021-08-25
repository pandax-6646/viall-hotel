import { Carousel, WingBlank } from "antd-mobile";
import React from "react";

class Demo extends React.Component {
  state = {
    data: [
      "../../img/detail(1).png",
      "../../img/record.png",
      "../../img/swiper.png",
    ],
    imgHeight: 176,
  };
  render() {
    return (
      <WingBlank className="swiper">
        <Carousel
          autoplay={true}
          infinite
          afterChange={(index) => console.log("slide to", index)}
        >
          {this.state.data.map((val, index) => (
            <img
              src={val}
              alt="图片"
              style={{ width: "100%", verticalAlign: "top" }}
              key={index}
            />
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

export default Demo;

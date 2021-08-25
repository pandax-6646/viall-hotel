import React from "react";
import { Carousel, WingBlank } from "antd-mobile";

export default (props) => {
  let { swiperImgList } = props;

  return (
    <WingBlank className=" swiper mt-30">
      <Carousel
        autoplay={true}
        infinite
        afterChange={(index) => console.log("slide to", index)}
      >
        {swiperImgList.legth != 0 &&
          swiperImgList.map((val, index) => (
            <img
              src={val}
              key={index}
              alt="图片"
              style={{ width: "100%", verticalAlign: "top" }}
            />
          ))}
      </Carousel>
    </WingBlank>
  );
};

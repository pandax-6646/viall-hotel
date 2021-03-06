import { ListView } from "antd-mobile";
import React from "react";

const data = [
  {
    img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
    title: "Meet hotel",
    des: "不是所有的兼职汪都需要风吹日晒",
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    title: "McDonald's invites you",
    des: "不是所有的兼职汪都需要风吹日晒",
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png",
    title: "Eat the week",
    des: "不是所有的兼职汪都需要风吹日晒",
  },
];
const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = pIndex * NUM_ROWS + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
    };
  }


  // 组件渲染后调用
  componentDidMount() {
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 600);
  }


  // 上拉触底触发
  onEndReached = (event) => {
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log("reach end", event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  };

  render() {

    let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div key={rowID} style={{ padding: "0 15px" }}>
          <div
            style={{
              lineHeight: "50px",
              color: "#888",
              fontSize: 18,
              borderBottom: "1px solid #F6F6F6",
            }}
          >
            {obj.title}
          </div>
          <div
            style={{
              display: "-webkit-box",
              display: "flex",
              padding: "15px 0",
            }}
          >
            <img
              style={{ height: "64px", marginRight: "15px" }}
              src={obj.img}
              alt=""
            />
            <div style={{ lineHeight: 1 }}>
              <div style={{ marginBottom: "8px", fontWeight: "bold" }}>
                {obj.des}
              </div>
              <div>
                <span style={{ fontSize: "30px", color: "#FF6E27" }}>
                  {rowID}
                </span>
                ¥
              </div>
            </div>
          </div>
        </div>
      );
    };
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderFooter={() => (
          <div style={{ padding: 30, textAlign: "center" }}>
            {this.state.isLoading ? "Loading..." : "Loaded"}
          </div>
        )}
        renderRow={row}
        className="am-list"
        pageSize={10}
        useBodyScroll

        onEndReached={this.onEndReached}
      />
    );
  }
}

export default Demo;

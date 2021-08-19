import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import demo1_1 from "./pages/demo1.1";
import demo1_2 from "./pages/demo1.2";
import demo2 from "./pages/demo2";
import demo3 from "./pages/demo3";
import demo4 from "./pages/demo4";
import demo5_1 from "./pages/demo5.1";
import demo5_2 from "./pages/demo5.2";
import demo6 from "./pages/demo6";
import demo7 from "./pages/demo7";
import demo8 from "./pages/demo8";
import demo8_2 from "./pages/demo8.2";
import demo9_1 from "./pages/demo9.1";
import demo9_2 from "./pages/demo9.2";
import demo10 from "./pages/demo10";
import demo11 from "./pages/demo11"; 
export default function () {
  return (
    <div className="app">
      <Router>
        <Route path="/demo1_1" component={demo1_1} />
        <Route path="/demo1_2" component={demo1_2} />
        <Route path="/demo2" component={demo2} />
        <Route path="/demo3" component={demo3} />
        <Route path="/demo4" component={demo4} />
        <Route path="/demo5_1" component={demo5_1} />
        <Route path="/demo5_2" component={demo5_2} />
        <Route path="/demo6" component={demo6} />
        <Route path="/demo7" component={demo7} />
        <Route path="/demo8" component={demo8} />
        <Route path="/demo8.2" component={demo8_2} />
        <Route path="/demo9_1" component={demo9_1} />
        <Route path="/demo9_2" component={demo9_2} />
        <Route path="/demo10" component={demo10} />
        <Route path="/demo11" component={demo11} /> 


        <div className="links">
          <Link to="/demo1_1">(1.1)react组件</Link>
          <Link to="/demo1_2">(1.2)react组件</Link>
          <Link to="/demo2">(2)react静态</Link>
          <Link to="/demo3">(3)react生命周期</Link>
          <Link to="/demo4">(4)jsx语法和注释</Link>
          <Link to="/demo5_1"> (5.1)事件绑定</Link>
          <Link to="/demo5_2"> (5.2)事件绑定</Link>
          <Link to="/demo6">(6)列表渲染</Link>
          <Link to="/demo7">(7)条件渲染</Link>
          <Link to="/demo8">(8)state和setState</Link>
          <Link to="/demo8.2">(8)state和setState的性能优化</Link>
          <Link to="/demo9_1">(9.1)表单输入</Link>
          <Link to="/demo9_2">(9.2)多个输入框</Link>
          <Link to="/demo10">(10)获取真实的 DOM 节点</Link>
          <Link to="/demo11">(11)父子组件通信</Link>
        </div>
      </Router>
    </div>
  );
}

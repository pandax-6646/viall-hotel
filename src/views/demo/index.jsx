

export default () => {
  return (
    <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => console.log("onLeftClick")}
    >
      NavBar
    </NavBar>
  );
};

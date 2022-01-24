import { Menu } from "antd";
import { AppstoreOutlined, PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const AppMenu = () => {
  return (
    <Menu mode="horizontal" style={{ backgroundColor: "transparent" }}>
      <Menu.Item key="market" icon={<AppstoreOutlined />}>
        Market
        <Link to="/market" />
      </Menu.Item>
      <Menu.Item key="mint" icon={<PlusOutlined />}>
        Mint
        <Link to="/mint" />
      </Menu.Item>
    </Menu>
  );
};

export default AppMenu;

import { Layout, Row, Col } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import Market from "../containers/Market";
import Minter from "../containers/Minter";
import AppMenu from "../menu/AppMenu";
import Account from "../components/Account";
import logo from "../images/opensea.png";
import { Route, Routes } from "react-router-dom";

const AppLayout = () => {
  return (
    <Row>
      <Col span={14} offset={5}>
        <Layout style={{ minHeight: "100vh" }}>
          <Header style={{ backgroundColor: "lightgray" }}>
            <Row align="center" gutter={20}>
              <Col>
                <img src={logo} width={40} height={40} />
              </Col>
              <Col>
                <h1>NFT Market</h1>
              </Col>
              <Col flex="auto"></Col>
              <Col>
                <AppMenu />
              </Col>
              <Col>
                <Account />
              </Col>
            </Row>
          </Header>
          <Content>
            <Routes>
              <Route path="/" element={<Market />} />
              <Route path="/market" element={<Market />} />
              <Route path="/mint" element={<Minter />} />
            </Routes>
          </Content>
          <Footer
            style={{
              position: "sticky",
              bottom: 0,
              backgroundColor: "lightgray",
            }}
          >
            All rights reserved by Daniel Armstrong.
          </Footer>
        </Layout>
      </Col>
    </Row>
  );
};

export default AppLayout;

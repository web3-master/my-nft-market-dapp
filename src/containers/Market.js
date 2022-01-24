import { Button, Card, Form, Input, Upload, Row, Col, List } from "antd";
import { useState } from "react";

const Market = () => {
  const [nfts] = useState([]);

  return (
    <Row style={{ margin: 60 }}>
      <Col span={24}>
        <Card title="All NFTs">
          <List
            locale={{ emptyText: "There's nothing to show!" }}
            dataSource={nfts}
            renderItem={(nft) => <span>111</span>}
            pagination={{ position: "bottom", pageSize: 10 }}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default Market;

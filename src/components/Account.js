import { WalletOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";

const Account = () => {
  const [connected, setConnected] = useState(false);
  return (
    <Button icon={<WalletOutlined />} ghost>
      {connected ? "0xAAAA" : "Connect"}
    </Button>
  );
};

export default Account;

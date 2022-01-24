import { Button, Card, Form, Input, Upload, Row, Col } from "antd";
import { useForm } from "antd/lib/form/Form";
import { UploadOutlined } from "@ant-design/icons";

const Minter = () => {
  const [form] = useForm();

  return (
    <Row style={{ margin: 60 }}>
      <Col span={24}>
        <Card title="Create your own NFT!">
          <Form form={form} layout="vertical" labelCol={8} wrapperCol={16}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: "Please input description!" }]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item
              label="Upload"
              name="image"
              rules={[{ required: true, message: "Please select image!" }]}
            >
              <Upload name="image">
                <Button icon={<UploadOutlined />}>CLick to upload</Button>
              </Upload>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
              <Button type="primary">Create</Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Minter;

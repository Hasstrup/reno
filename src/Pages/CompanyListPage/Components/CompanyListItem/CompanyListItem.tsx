import React, { FC } from "react";
import { Card, Typography, Divider, Row, Col } from "antd";
import { RightOutlined, CloseCircleFilled } from "@ant-design/icons"
import { CompanyListItemProps } from "./CompanyListItem.types";

// style ant card body to reduce padding
// padding 24px on antlist item
export const CompanyListItem: FC<CompanyListItemProps> = (props) => {
  return (
    <>
      <Card title={"Something here"}>
        <Row> 
          <Col span={4}><RightOutlined /></Col>
          <Col span={16}>
          <Typography.Paragraph style={{ fontSize: '12px' }}>{"Something"}</Typography.Paragraph>
          </Col>
          <Col span={4}><CloseCircleFilled /></Col>
        </Row>
        <Divider />
        <Typography.Paragraph style={{ fontSize: '12px' }}>{"Something"}</Typography.Paragraph>
      </Card>
    </>
  );
};

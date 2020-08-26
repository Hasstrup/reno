import React, { FC } from "react";
import { Card, Typography, Divider, Row, Col, Image } from "antd";
import {
  RightOutlined,
  CloseCircleFilled,
  CloseOutlined,
} from "@ant-design/icons";
import { CompanyListItemStyles } from "./CompanyListItem.styles";
import { CompanyListItemProps } from "./CompanyListItem.types";

// style ant card body to reduce padding
// padding 24px on antlist item
export const CompanyListItem: FC<CompanyListItemProps> = (props) => {
  const classes = CompanyListItemStyles();

  const HeaderTitle = (props) => {
    return (
      <Row style={{ height: "200px" }}>
        <Col span={4}></Col>
        <Col span={16} className={classes.ImageContainer}>
            <Image
              className={classes.HeaderImage}
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
              }
            />
          <Typography className={classes.Text}>Google</Typography>
        </Col>
        <Col span={4} className={classes.IconContainer}>
            <CloseOutlined />
        </Col>
      </Row>
    );
  };

  return (
    <>
      <Card
        title={
          <span>
            <HeaderTitle />
          </span>
        }
        className={classes.CardContainer}
      >
        <Row>
          <Col span={4}>
            <RightOutlined />
          </Col>
          <Col span={16}>
            <Typography.Paragraph className={classes.Text}>
              {"Something"}
            </Typography.Paragraph>
          </Col>
          <Col span={4}>
            <CloseCircleFilled />
          </Col>
        </Row>
        <Divider className={classes.Divider}/>
        <Typography.Paragraph style={{ fontSize: "12px" }}>
          {"Something"}
        </Typography.Paragraph>
      </Card>
    </>
  );
};

import React, { FC } from "react";
import { Card, Typography, Divider, Row, Col, Image, Progress } from "antd";
import clsx from "classnames"
import {
  RightOutlined,
  CloseCircleFilled,
  CloseOutlined,
} from "@ant-design/icons";
import { CompanyListItemStyles } from "./CompanyListItem.styles";
import { CompanyListItemProps } from "./CompanyListItem.types";

export const CompanyListItem: FC<CompanyListItemProps> = (props) => {
  const classes = CompanyListItemStyles();

  const HeaderTitle = (props) => {
    return (
      <Row className={classes.RowContainer}>
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
      <Card title={<HeaderTitle />} className={classes.CardContainer}>
        {/* { This should start the items} */}
        <Row className={clsx(classes.Row)}>
          <Col span={2}>
            <RightOutlined className={classes.Caret} size={8}/>
          </Col>
          <Col span={20}>
            <Typography.Paragraph className={clsx(classes.Text, classes.MainText)}>
              {"Something"}
            </Typography.Paragraph>
          </Col>
          <Col span={2}>
            <CloseCircleFilled className={classes.CloseIcon} />
          </Col>
        </Row>
        <Divider className={classes.Divider} />
        {/* Show children here */}
        <Row className={clsx(classes.Row, classes.ChildRow)}>
          <Col span={20}>
            <Typography.Paragraph className={clsx(classes.Text, classes.MainText)}>
              {"Something"}
            </Typography.Paragraph>
          </Col>
        </Row>
        <Divider className={classes.Divider} />
        <Row className={clsx(classes.Row, classes.ChildRow)}>
          <Col span={20}>
            <Typography.Paragraph className={clsx(classes.Text, classes.MainText)}>
              {"Something"}
            </Typography.Paragraph>
          </Col>
        </Row>

        {/* End of item */}
        <Divider className={classes.Divider} />
        <Row className={clsx(classes.Row, classes.CompanyEntryContainer)}>
          {/* <Col span={2}>
            <RightOutlined />
          </Col> */}
          <Col span={24} className={classes.ContentContainer}>
            <Progress type="circle" percent={75} format={(percent: any) => `${percent / 10}`}/>
          </Col>
          {/* <Col span={2}>
            <CloseCircleFilled />
          </Col> */}
        </Row>
      </Card>
    </>
  );
};

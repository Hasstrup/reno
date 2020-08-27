import React, { FC, useState } from "react";
import clsx from "classnames";
import { Row, Divider, Col, Typography, Progress } from "antd";
import { RightOutlined, CloseCircleFilled } from "@ant-design/icons";
import { CompanyListItemStyles as useStyles } from "@/Pages/CompanyListPage/Components/CompanyListItem/CompanyListItem.styles";
import { LineItemProps } from "@/Pages/CompanyListPage/Components/CompanyListItem/CompanyListItem.types";

export const LineItem: FC<LineItemProps> = (props) => {
  const classes = useStyles();

  const LegendLineItem = () => (
    <>
      <Row className={classes.Row}>
        {props.cell.children?.length && (
          <Col span={2}>
            <RightOutlined className={classes.Caret} size={8} />
          </Col>
        )}

        <Col span={20}>
          <Typography.Paragraph
            className={clsx(classes.Text, classes.MainText)}
          >
            {props.cell.value}
          </Typography.Paragraph>
        </Col>
        <Col span={2}>
          <CloseCircleFilled className={classes.CloseIcon} />
        </Col>
      </Row>
      <Divider className={classes.Divider} />
    </>
  );

  const StandardLineItem = () => (
    <>
      <Row className={clsx(classes.Row, classes.CompanyEntryContainer)}>
        <Col span={24} className={classes.ContentContainer}>
          {props.cell.type === "rating" ? (
            <Progress
              type="circle"
              percent={props.cell.value as number}
              format={(percent: any) => `${percent / 10}`}
            />
          ) : (
            <Typography.Paragraph
              className={clsx(classes.Text, classes.MainText)}
            >
              {props.cell.value}
            </Typography.Paragraph>
          )}
        </Col>
      </Row>
      <Divider className={classes.Divider} />
    </>
  );

  const ChildLineItem = (props: any) => (
    <>
      <Row
        className={
          props.legendNode ? clsx(classes.Row, classes.ChildRow) : classes.Row
        }
      >
        <Col
          span={24}
          className={clsx(classes.ContentContainer, classes.TextContainer)}
        >
          <Typography.Paragraph
            className={clsx(classes.Text, classes.MainText)}
          >
            {props.child.value}
          </Typography.Paragraph>
        </Col>
      </Row>
      <Divider className={classes.Divider} />
    </>
  );

  return (
    <>
      {props.legendNode ? <LegendLineItem /> : <StandardLineItem />}
      {props.childNodesVisible &&
        props.childrenNodes.map((item: any) => (
          <ChildLineItem child={item} {...props} />
        ))}
    </>
  );
};

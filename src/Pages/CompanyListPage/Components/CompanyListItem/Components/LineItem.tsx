import React, { FC } from "react";
import clsx from "classnames";
import { Row, Divider, Col, Typography, Progress } from "antd";
import {
  RightOutlined,
  CloseCircleFilled,
  DownOutlined,
} from "@ant-design/icons";
import { CompanyListItemStyles as useStyles } from "@/Pages/CompanyListPage/Components/CompanyListItem/CompanyListItem.styles";
import {
  LineItemProps,
  ListItemCell,
} from "@/Pages/CompanyListPage/Components/CompanyListItem/CompanyListItem.types";

const RATING_IDENTIFIER = "rating";

export const LineItem: FC<LineItemProps> = (props) => {
  const classes = useStyles();
  const LegendLineItem = () => (
    <>
      <Row
        className={clsx(classes.Row, classes.Clickable)}
        onClick={(_) => props.toggleChildNodesVisible(props.identifier)}
      >
        {props.cell.children?.length && (
          <Col span={2}>
            {props.childNodesVisible ? (
              <DownOutlined className={classes.Caret} size={8} />
            ) : (
              <RightOutlined className={classes.Caret} size={8} />
            )}
          </Col>
        )}

        <Col span={props.cell.children?.length ? 18 : 20}>
          <Typography.Paragraph
            className={clsx(classes.Text, classes.MainText)}
          >
            {props.cell.value}
          </Typography.Paragraph>
        </Col>
        <Col span={2}>
          <CloseCircleFilled
            onClick={(_) => props.removeCriterion(props.identifier)}
            className={clsx(classes.CloseIcon, classes.Clickable)}
          />
        </Col>
      </Row>
      <Divider className={classes.Divider} />
    </>
  );

  const StandardLineItem = () => (
    <>
      <Row className={clsx(classes.Row, classes.CompanyEntryContainer)}>
        <Col span={24} className={classes.ContentContainer}>
          {props.cell.type === RATING_IDENTIFIER ? (
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
          className={
            props.legendNode
              ? clsx(classes.ContentContainer, classes.TextContainer)
              : classes.ContentContainer
          }
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
        props.childrenNodes.map((item: ListItemCell) => (
          <ChildLineItem child={item} key={item.value} {...props} />
        ))}
    </>
  );
};

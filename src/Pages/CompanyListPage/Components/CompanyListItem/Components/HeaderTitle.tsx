import React, { FC } from "react";
import { Image, Col, Row, Typography } from "antd";
import clsx from "classnames";
import { CompanyListItemStyles as useStyles } from "@/Pages/CompanyListPage/Components/CompanyListItem/CompanyListItem.styles";
import { HeaderTitleProps } from "@/Pages/CompanyListPage/Components/CompanyListItem/CompanyListItem.types";
import { CloseOutlined } from "@ant-design/icons";

export const HeaderTitle: FC<HeaderTitleProps> = (props) => {
  const handleClick = (_: any) => props.legend && props.handleAddNode();
  const classes = useStyles();

  return (
    <Row
      className={
        !props.legend
          ? classes.RowContainer
          : clsx(classes.RowContainer, classes.Clickable)
      }
      onClick={handleClick}
    >
      <Col span={4}></Col>
      <Col span={16} className={classes.ImageContainer}>
        <Image
          className={classes.HeaderImage}
          src={props.image}
          preview={false}
        />
        <Typography className={classes.Text}>{props.name}</Typography>
      </Col>
      {!props.legend && (
        <Col
          span={4}
          className={clsx(classes.IconContainer, classes.Clickable)}
          onClick={(_: any) => props.handleRemoveNode(props.colIdentifier)}
        >
          <CloseOutlined />
        </Col>
      )}
    </Row>
  );
};

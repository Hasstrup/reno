import React, { FC } from "react";
import { Image, Col, Row, Typography } from "antd";
import { CompanyListItemStyles as useStyles } from "@/Pages/CompanyListPage/Components/CompanyListItem/CompanyListItem.styles";
import { HeaderTitleProps } from "@/Pages/CompanyListPage/Components/CompanyListItem/CompanyListItem.types";
import { CloseOutlined } from "@ant-design/icons";

export const HeaderTitle: FC<HeaderTitleProps> = (props) => {
  const classes = useStyles();
  return (
    <Row className={classes.RowContainer}>
      <Col span={4}></Col>
      <Col span={16} className={classes.ImageContainer}>
        <Image
          className={classes.HeaderImage}
          src={props.image}
        />
        <Typography className={classes.Text}>{props.name}</Typography>
      </Col>
      <Col span={4} className={classes.IconContainer}>
        <CloseOutlined />
      </Col>
    </Row>
  );
};

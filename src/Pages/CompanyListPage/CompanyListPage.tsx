import React, { FC } from "react";
import { List, Typography } from "antd";
import { CompanyListPageProps } from "./CompanyListPage.types";
import { CompanyListPageStyles as useStyles } from "./CompanyListPage.styles"
import { CompanyListItem } from "@/Pages/CompanyListPage/Components/CompanyListItem/CompanyListItem";

export const CompanyListPage: FC<CompanyListPageProps> = (props) => {
  const classes = useStyles()
  return (
    <List
      grid={{ gutter: 1, column: 4 }}
      header={<Typography>{`Add new criteria`}</Typography>}
      dataSource={[1,2,3,4]}
      bordered
      renderItem={(item) => {
        return (
          <List.Item className={classes.ListItemContainer}>
            <CompanyListItem {...item} />
          </List.Item>
        );
      }}
    />
  );
};

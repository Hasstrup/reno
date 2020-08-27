import React, { FC, useState } from "react";
import { List, Typography } from "antd";
import { CompanyListPageProps } from "./CompanyListPage.types";
import { CompanyListPageStyles as useStyles } from "./CompanyListPage.styles"
import { CompanyListItem } from "@/Pages/CompanyListPage/Components/CompanyListItem/CompanyListItem";
import { ListItem } from "@/Pages/CompanyListPage/Components/CompanyListItem/CompanyListItem.types"
import store from "./Store/store.json";


export const CompanyListPage: FC<CompanyListPageProps> = (props) => {
  const classes = useStyles()
  const source = JSON.parse(JSON.stringify(store)).data as ListItem[]
  console.log(source)
  const [dataSource, setDataSource] = useState(source)

  return (
    <List
      grid={{ gutter: 1, column: 4 }}
      header={<Typography>{`Add new criteria`}</Typography>}
      dataSource={dataSource}
      bordered
      renderItem={(item: ListItem) => {
        return (
          <List.Item className={classes.ListItemContainer}>
            <CompanyListItem item={item} />
          </List.Item>
        );
      }}
    />
  );
};

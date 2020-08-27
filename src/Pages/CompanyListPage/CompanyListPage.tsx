import React, { FC, useState } from "react";
import { List,  Button } from "antd";
import { CompanyListPageProps } from "./CompanyListPage.types";
import { CompanyListPageStyles as useStyles } from "./CompanyListPage.styles";
import { CompanyListItem } from "@/Pages/CompanyListPage/Components/CompanyListItem/CompanyListItem";
import { ListItem } from "@/Pages/CompanyListPage/Components/CompanyListItem/CompanyListItem.types";
import store from "./Store/store.json";

const MIN_THRESHOLD_HIT_MESSAGE = "Oops you have to leave at least one vendor";
const MIN_THRESHOLD_COUNT = 2;

export const CompanyListPage: FC<CompanyListPageProps> = () => {
  const classes = useStyles();
  const source = JSON.parse(JSON.stringify(store)).data as ListItem[];
  const [dataSource, setDataSource] = useState(source);
  const [visibilityMap, settVisibilityMap] = useState({});

  const toggleChildNodesVisible = (key: string) =>
    settVisibilityMap({
      ...visibilityMap,
      [key]: !(visibilityMap as any)[key],
    });

  const addNewVendor = () => {
    const _source = [...dataSource];
    _source.shift(); // remove first entry, to prevent unintentionally adding the legend column
    const target = {
      ..._source[Math.floor(Math.random() * _source.length)],
    } as ListItem;
    setDataSource([...dataSource, target]);
  };

  const removeVendor = (key: string) => {
    const _source = [...dataSource];
    if (_source.length === MIN_THRESHOLD_COUNT) {
      return alert(MIN_THRESHOLD_HIT_MESSAGE);
    }
    const splitKey = key.split("-");
    const index = parseInt(splitKey[splitKey.length - 1]);
    _source.splice(index, 1);
    setDataSource(_source);
  };

  const addNewCriterion = () => {
    let _source = [...dataSource];
    const criteriaKey = `criteria-${Math.floor(Math.random() * 100)}`;
    // add to the legend
    _source[0].cells.push({ value: criteriaKey, type: "string", children: [] });
    _source = _source.map((item: ListItem, index: number) => {
        if(!index) return item; // should skip the first entry
        return {
          ...item,
          cells: [
            ...item.cells,
            {
              value: `value for criteria: ${criteriaKey} on col: ${index}`,
              type: "string",
              children: [],
            },
          ],
        };
    });
    setDataSource(_source)
  };

  const removeCriterion = (key: string) => {
    const _source = [...dataSource]
    const splitKey = key.split("-");
    const targetIndex = parseInt(splitKey[splitKey.length - 1]);
    _source.forEach((item: ListItem) => {
      item.cells.splice(targetIndex, 1)
    })
    setDataSource(_source)
  }

  return (
    <List
      grid={{ gutter: 1, column: dataSource.length }}
      header={<Button onClick={addNewCriterion}>{`Add new criteria`}</Button>}
      dataSource={dataSource}
      bordered
      renderItem={(item: ListItem, index: number) => {
        return (
          <List.Item className={classes.ListItemContainer}>
            <CompanyListItem
              item={item}
              toggleChildNodesVisible={toggleChildNodesVisible}
              visibilityMap={visibilityMap}
              addNewVendor={addNewVendor}
              removeVendor={removeVendor}
              identifier={`col-${index}`}
              removeCriterion={removeCriterion}
            />
          </List.Item>
        );
      }}
    />
  );
};

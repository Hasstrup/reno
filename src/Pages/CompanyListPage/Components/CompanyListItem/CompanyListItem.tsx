import React, { FC } from "react";
import { Card } from "antd";
import { CompanyListItemStyles } from "./CompanyListItem.styles";
import { CompanyListItemProps, ListItemCell } from "./CompanyListItem.types";
import { HeaderTitle } from "./Components/HeaderTitle";
import { LineItem } from "./Components/LineItem";

export const CompanyListItem: FC<CompanyListItemProps> = (props) => {
  const classes = CompanyListItemStyles();
  const { item } = props;
  return (
    <>
      <Card
        title={
          <HeaderTitle
            name={item.title}
            image={item.imageUrl}
            legend={!!item.legend}
            colIdentifier={props.identifier}
            handleAddNode={props.addNewVendor}
            handleRemoveNode={props.removeVendor}
          />
        }
        className={classes.CardContainer}
      >
        {item.cells.map((cell: ListItemCell, index: number) => (
          <LineItem
            key={`cell-${index}`}
            cell={cell}
            legendNode={!!item.legend}
            childNodesVisible={props.visibilityMap[`cell-${index}`]}
            childrenNodes={cell.children || []}
            toggleChildNodesVisible={props.toggleChildNodesVisible}
            identifier={`cell-${index}`}
          />
        ))}
      </Card>
    </>
  );
};

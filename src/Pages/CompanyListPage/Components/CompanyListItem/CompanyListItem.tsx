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
        title={<HeaderTitle name={item.title} image={item.imageUrl} />}
        className={classes.CardContainer}
      >
        {item.cells.map((cell: ListItemCell) => (
          <LineItem
            cell={cell}
            legendNode={!!item.legend}
            childNodesVisible={true}
            childrenNodes={cell.children || []}
          />
        ))}
      </Card>
    </>
  );
};

export interface CompanyListItemProps {
    item: ListItem
}

export interface HeaderTitleProps {
   image?: string;
   name?: string;
   handleRemoveNode?: () => null
}

export interface LineItemProps {
    cell: ListItemCell
    legendNode: boolean;
    childNodesVisible: boolean;
    childrenNodes: ListItemCell[];
    toggleChildNodesVisible?: () => void
}


export interface ListItem {
    legend?: boolean;
    title: string;
    imageUrl: string;
    cells: ListItemCell[];
}

export interface ListItemCell {
    value: string | number;
    type: string;
    children: Array<ListItemCell>;
}
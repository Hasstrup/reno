export interface CompanyListItemProps {
    item: ListItem
    toggleChildNodesVisible: (key: string) => void;
    visibilityMap: any;
    addNewVendor: () => void;
    removeVendor: (key: string) => void;
    removeCriterion: (key: string) => void;
    identifier: string;
}

export interface HeaderTitleProps {
   image?: string;
   name?: string;
   legend: boolean;
   colIdentifier: string;
   handleRemoveNode: (key: string) => void
   handleAddNode: () => void
}

export interface LineItemProps {
    cell: ListItemCell
    legendNode: boolean;
    childNodesVisible: boolean;
    childrenNodes: ListItemCell[];
    toggleChildNodesVisible: (key: string) => void
    removeCriterion: (key: string) => void;
    identifier: string
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
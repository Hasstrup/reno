import { createUseStyles } from "react-jss";

export const CompanyListItemStyles = createUseStyles({
  CardContainer: {
    padding: 0,
    "& .ant-card-body": {
      padding: "0 !important",
    },
    "& .ant-card-head": {
      height: "100px",
    },
  },
  HeaderImage: {
    height: "50px",
    borderRadius: "50%",
    width: "50px",
  },
  MainText: {
    textAlign: "left !important",
    paddingTop: "2px",
  },
  Divider: {
    margin: 0,
  },
  Text: {
    textAlign: "center",
    fontSize: "12px",
  },
  ChildRow: {
      paddingLeft: '40px'
  },
  ImageContainer: {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  IconContainer: {
    height: "20px",
    position: "absolute",
    right: "5px",
  },
  RowContainer: {
    height: "150px",
  },
  CompanyEntryContainer: {
    paddingBottom: "2%",
  },
  Row: {
    height: "40px",
    paddingTop: "7px",
  },
  ContentContainer: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    "& .ant-progress-inner": {
      width: "30px !important",
      height: "30px !important",
      fontSize: "12px !important",
    },
  },
  CloseIcon: {
    color: "red",
  },
  Caret: {
    fontSize: "12px",
  },
});

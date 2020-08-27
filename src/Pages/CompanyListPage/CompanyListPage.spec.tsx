import React from "react";
import { CompanyListPage } from "./CompanyListPage";
import { shallow } from "enzyme";

describe("<CompanyListPage />", () => {
  let wrapper: any;
  describe("Context: Shallow rendering",
    () => {
      beforeEach(() => {
        wrapper = shallow(<CompanyListPage />);
      });

      it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
      });
    });
});

import React from "react";
import { CompanyListPage } from "./CompanyListPage";
import { shallow, mount } from "enzyme";

describe("<CompanyListPage />", () => {
  let wrapper: any;
  describe("Context: Shallow rendering", () => {
    beforeEach(() => {
      wrapper = shallow(<CompanyListPage />);
    });

    it("renders correctly", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("Context: Deep rendering", () => {
    beforeEach(() => {
      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: jest.fn(),
          removeListener: jest.fn(),
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
      });

      wrapper = mount(<CompanyListPage />);
    });

    it("adds a new criteria when the add criteria button is clicked", () => {
       expect(wrapper.find('LegendLineItem')).toHaveLength(6)
       wrapper.find("button.add__new__criteria").simulate('click')
       expect(wrapper.find('LegendLineItem')).toHaveLength(7)
    });
  });
});

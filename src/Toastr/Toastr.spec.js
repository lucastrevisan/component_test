import React from "react";
import { shallow } from "enzyme";

import Toastr from "./Toastr";

const listenMock = jest.fn();

const history = {
  listen: listenMock
};

const closeToastr = listenMock;

describe("Toastr component", () => {
  it("should match snapshot with toastrSettings as false", () => {
    expect(
      shallow(<Toastr toastrSettings={false} history={history} closeToastr={closeToastr} />)
    ).toMatchSnapshot();
  });

  it("should match snapshot with toastrSettings as an object", () => {
    expect(
      shallow(<Toastr toastrSettings={{ text: "text" }} history={history} closeToastr={closeToastr} />)
    ).toMatchSnapshot();
  });

  it("should invoke listen function", () => {
    shallow(<Toastr toastrSettings={{ text: "text" }} history={history} closeToastr={closeToastr} />);
    expect(listenMock).toHaveBeenCalled();
  });

  describe("toggle", () => {
    it("shouldn't update the state before the timeout", () => {
      const instance = shallow(
        <Toastr toastrSettings={{ text: "text" }} history={history} closeToastr={closeToastr} />
      ).instance();

      instance.toggle();

      expect(instance.state.mounted).toBe(false);
    });

    it("should update the state after the timeout", done => {
      const instance = shallow(
        <Toastr toastrSettings={{ text: "text" }} history={history} closeToastr={closeToastr} />
      ).instance();

      instance.toggle();

      setTimeout(() => {
        expect(instance.state.mounted).toBe(true);
        done();
      }, 500);
    });
  });
});

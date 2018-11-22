import toastr from "./index";

describe("toastr action", () => {
  it("Should return an action object", () => {
    expect(typeof toastr() === "object").toBeTruthy();
    expect(Object.keys(toastr())).toEqual(["openToastr", "closeToastr"]);
  });

  describe("openToastr", () => {
    it("Should change state to have an open toastr", () => {
      const { openToastr } = toastr();
      expect(openToastr(null, { text: "Test" })).toEqual({
        toastrSettings: { text: "Test", isOpen: true }
      });
    });
  });

  describe("closeToastr", () => {
    it("Should change state to have no toastr", () => {
      const { closeToastr } = toastr();
      expect(closeToastr()).toEqual({
        toastrSettings: false
      });
    });
  });
});

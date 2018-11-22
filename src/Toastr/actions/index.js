export default () => ({
  openToastr: (_, config) => {
    return { toastrSettings: { isOpen: true, ...config } };
  },
  closeToastr: () => ({ toastrSettings: false })
});

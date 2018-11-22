import React from "react";
import { string } from "prop-types";

import { Span } from "./styles";

export const icons = {
  Arrow: require("./Arrow").default,
  BoldArrow: require("./BoldArrow").default,
  BoldDoubleArrow: require("./BoldDoubleArrow").default,
  AssetPosition: require("./AssetPosition").default,
  Attention: require("./Attention").default,
  Bank: require("./Bank").default,
  Cash: require("./Cash").default,
  CashTransfer: require("./CashTransfer").default,
  Check: require("./Check").default,
  Checked: require("./Checked").default,
  Close: require("./Close").default,
  ForeignExchange: require("./ForeignExchange").default,
  EmptyWallet: require("./EmptyWallet").default,
  Document: require("./Document").default,
  Download: require("./Download").default,
  Email: require("./Email").default,
  Summary: require("./Summary").default,
  SmallArrow: require("./SmallArrow").default,
  Filter: require("./Filter").default,
  Signatures: require("./Signatures").default,
  SignatureGroup: require("./SignatureGroup").default,
  Info: require("./Info").default,
  Lock: require("./Lock").default,
  LinkArrow: require("./LinkArrow").default,
  Logo: require("./Logo").default,
  Logout: require("./Logout").default,
  Menu: require("./Menu").default,
  Transactions: require("./Transactions").default,
  MenuClose: require("./MenuClose").default,
  BrandLogo: require("./BrandLogo").default,
  Papers: require("./Papers").default,
  Portfolio: require("./Portfolio").default,
  Wallet: require("./Wallet").default,
  NotFound: require("./NotFound").default,
  Keyboard: require("./Keyboard").default,
  FlagBR: require("./FlagBR").default,
  FlagUSA: require("./FlagUSA").default,
  FlagCN: require("./FlagCN").default,
  Erase: require("./Erase").default,
  ToastrClose: require("./ToastrClose").default,
  WaitingWarning: require("./WaitingWarning").default,
  SentMail: require("./SentMail").default,
  Transfers: require("./Transfers").default
};

function Icon({ type, color, width, height, dataTest, ...props }) {
  const IconSvg = icons[type];
  if (IconSvg) {
    return (
      <Span
        color={color}
        width={width}
        height={height}
        data-test={dataTest}
        {...props}
      >
        <IconSvg />
      </Span>
    );
  }
  return null;
}

Icon.defaultProps = {
  color: null,
  height: null,
  width: null
};

Icon.propTypes = {
  color: string,
  height: string,
  width: string,
  type: string.isRequired // eslint-disable-line react/no-typos
};

export default Icon;

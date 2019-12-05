import React from "react";
import MenuItems from "../MenuItems/MenuItems";
import MenuItem from "../MenuItem/MenuItem";
import { closeDrawer } from "../../../store/actions/loginActions";
import { connect } from "react-redux";

import * as RouterPaths from "../../../utils/RouterPaths";

const Menu = props => {
  return (
    <div className="menu">
      <MenuItems>
        <MenuItem
          exact
          href={RouterPaths.ROUTE_PATH}
          icon="home"
          label="New Reservation"
          onclick={() => props.onDrawerOpenClicked()}
        />
        <MenuItem
          href={RouterPaths.SEARCH}
          icon="layers"
          label="Search Booking"
          onclick={() => props.onDrawerOpenClicked()}
        />
        <MenuItem
          href={RouterPaths.CONFIG}
          icon="business"
          label="Airline Configuration"
          onclick={() => props.onDrawerOpenClicked()}
        />
      </MenuItems>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    onDrawerOpenClicked: () => dispatch(closeDrawer())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Menu);

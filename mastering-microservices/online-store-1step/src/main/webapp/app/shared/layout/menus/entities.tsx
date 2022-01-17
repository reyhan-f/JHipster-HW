import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { Translate, translate } from 'react-jhipster';
import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown
    icon="th-list"
    name={translate('global.menu.entities.main')}
    id="entity-menu"
    data-cy="entity"
    style={{ maxHeight: '80vh', overflow: 'auto' }}
  >
    <>{/* to avoid warnings when empty */}</>
    <MenuItem icon="asterisk" to="/product">
      <Translate contentKey="global.menu.entities.product" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/product-category">
      <Translate contentKey="global.menu.entities.productCategory" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/customer-details">
      <Translate contentKey="global.menu.entities.customerDetails" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/shopping-cart">
      <Translate contentKey="global.menu.entities.shoppingCart" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/product-order">
      <Translate contentKey="global.menu.entities.productOrder" />
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);

import React, { useState, useCallback } from 'react';
import { Menu } from 'semantic-ui-react';
import { useHistory, useLocation } from 'react-router-dom';

import RouteEnum from '../../../constants/RouteEnum';

const OnBoardHeader = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [activeItem, setActiveItem] = useState(pathname);

  const handleItemClick = useCallback(
    (_, { path }) => {
      setActiveItem(path);
      history.push(path);
    },
    [history]
  );

  return (
    <Menu inverted>
      <Menu.Item path={RouteEnum.Home} name="home" active={activeItem === RouteEnum.Home} onClick={handleItemClick} />
      <Menu.Item path={RouteEnum.SignIn} name="sign in" active={activeItem === RouteEnum.SignIn} onClick={handleItemClick} />
      <Menu.Item path={RouteEnum.SignUp} name="sign up" active={activeItem === RouteEnum.SignUp} onClick={handleItemClick} />
    </Menu>
  );
};

export default OnBoardHeader;

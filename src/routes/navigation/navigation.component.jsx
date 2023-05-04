import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles';

const Navigation = () => {
 
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>


        <NavLinks>
          <NavLink to='/interests'>My Interests</NavLink>
        </NavLinks>
       
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

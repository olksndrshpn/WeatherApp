import React from 'react';
import { useState } from 'react';
import {CNavbar, CContainer,CNavLink,CForm, CFormInput, CButton, CNavbarBrand,CNavbarToggler,CCollapse,CNavbarNav,CNavItem, CDropdown, CDropdownToggle, CDropdownItem, CDropdownMenu,CDropdownDivider,} from '@coreui/react';
import { Link } from 'react-router-dom';
import PostFilter from './PostFilter'
function Navi (props){



return (


      
<div> <Link className='link' to="/posts">Головна</Link>
      <Link className='link' to="/weather">Погода</Link>
      </div>
     

     
 
)
};


export default Navi;

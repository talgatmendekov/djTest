import React, { FC, useState } from 'react'
import classes from './header.module.scss'
import { BurgerMenu, Logo } from '../../../assets/icons'
import { Link, useLocation } from 'react-router-dom'
import { Typography } from '@mui/material'
import { ROUTES } from '../../../utils/constants/general'
import { findDj } from '../../../store/djSlice'
import { useAppDispatch } from '../../../store'
import { HEADER_OPTIONS } from '../../../utils/constants/general'

export const Header: FC = () => {
   const dispatch = useAppDispatch()
   const [showProfileMenu, setProfileMenu] = useState(false)

   const findDjHandler = () => {
      dispatch(findDj())
   }

   const toggleProfileMenu = () => {
      setProfileMenu((prevState) => !prevState)
   }

   const { pathname } = useLocation()

   const foundPath = HEADER_OPTIONS.find((item) => item.path === pathname)
   return (
      <header className={classes.header}>
         <Link to={ROUTES.HOME}>
            <Logo />
         </Link>

         <div className={classes.container}>
            {foundPath?.headerKey === 'findDj' && (
               <div className={classes.headerLeft}>
                  <Typography variant="h6" onClick={findDjHandler}>
                     Find Dj
                  </Typography>

                  <div className={classes.groupedContainer}>
                     <div className={classes.menuContainer}>
                        <BurgerMenu onClick={toggleProfileMenu} />
                        <div className={classes.avatar}></div>
                     </div>
                     {showProfileMenu && (
                        <div className={classes.profileContainer}>
                           <Link
                              to={ROUTES.MY_BUSINESS_PROFILE}
                              className={classes.link}
                           >
                              My Profile
                           </Link>
                           <hr />
                           <Link to={ROUTES.HOME} className={classes.link}>
                              Logout
                           </Link>
                        </div>
                     )}
                  </div>
               </div>
            )}
            {foundPath?.headerKey === 'login' && (
               <div>
                  <Typography variant="h6">Login</Typography>
               </div>
            )}
            {foundPath?.headerKey === 'findEvent' && (
               <div className={classes.headerLeft}>
                  <Typography variant="h6" className={classes.h6}>
                     Find Event
                  </Typography>

                  <div className={classes.groupedContainer}>
                     <div className={classes.menuContainer}>
                        <BurgerMenu onClick={toggleProfileMenu} />
                        <div className={classes.avatar}></div>
                     </div>
                     {showProfileMenu && (
                        <div className={classes.profileContainer}>
                           <Link
                              to={ROUTES.MYDJPROFILE}
                              className={classes.link}
                           >
                              My Profile
                           </Link>
                           <hr />
                           <Link to={ROUTES.HOME} className={classes.link}>
                              Logout
                           </Link>
                        </div>
                     )}
                  </div>
               </div>
            )}

            {foundPath?.headerKey === 'nav' && (
               <ul className={classes.menu}>
                  <li>
                     <Link to={ROUTES.DJ_DISCOVERY}>
                        <Typography
                           color={'white'}
                           variant={'h6'}
                           onClick={findDjHandler}
                        >
                           Find DJ
                        </Typography>
                     </Link>
                  </li>
                  <li>
                     <Link to={ROUTES.EVENT}>
                        <Typography color={'white'} variant={'h6'}>
                           Find Event
                        </Typography>
                     </Link>
                  </li>
                  <li>
                     <Link to={ROUTES.LOGIN}>
                        <Typography color={'white'} variant={'h6'}>
                           Login
                        </Typography>
                     </Link>
                  </li>
               </ul>
            )}
         </div>
      </header>
   )
}

export default Header

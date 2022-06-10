import {
   NavLink,
   Outlet,
   useLocation,
   useNavigate,
   Link,
} from 'react-router-dom'
import { Button } from '../../components/atoms'
import { ROUTES } from '../../utils/constants/general'
import classes from './BusinessDashboard.module.css'

export const BusinessDashboard = () => {
   const navigate = useNavigate()

   const navigateHandler = () => {
      navigate(ROUTES.BUSINESS_BOOKINGS)
   }
   return (
      <main className={classes.mainContainer}>
         <div className={classes.groupedContainer}>
            <div className={classes.infoAction}>
               <Button onClick={navigateHandler}>Bookings</Button>
               <Button>Calendar</Button>
            </div>
         </div>
         <div className={classes.editProfileContainer}>
            <div className={classes.test}>
               <ul>
                  <NavLink
                     to={ROUTES.EDITPROFILE}
                     className={({ isActive }) =>
                        isActive ? classes.isActive : classes.nonActive
                     }
                  >
                     Edit profile
                  </NavLink>
                  <NavLink
                     to={ROUTES.ONLINEPRESENCE}
                     className={({ isActive }) =>
                        isActive ? classes.isActive : classes.nonActive
                     }
                  >
                     Online presence
                  </NavLink>
                  <NavLink
                     to={ROUTES.ACCOUNTSETTINGS}
                     className={({ isActive }) =>
                        isActive ? classes.isActive : classes.nonActive
                     }
                  >
                     Account settings
                  </NavLink>
                  <NavLink
                     to={ROUTES.PAYMENTSETTINGS}
                     className={({ isActive }) =>
                        isActive ? classes.isActive : classes.nonActive
                     }
                  >
                     Payment settings
                  </NavLink>
               </ul>
            </div>
            <Outlet />
         </div>
      </main>
   )
}

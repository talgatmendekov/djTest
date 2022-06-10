import { Route, Routes } from 'react-router-dom'

//Routers
import { ROUTES } from '../utils/constants/general'

//Pages
import {
   Home,
   SignupDjTwo,
   SignupBusiness,
   Signup,
   SignupDj,
   Events,
   EventApplied,
} from '../pages'
import {
   DiscoveryDj,
   Login,
   DetailsDj,
   EventDetails,
   RequestDj,
   Payment,
   DjBookings,
} from '../pages'
import {
   BusinessCalendar,
   DjCalendar,
   AdminDashBoard,
   BusinessBookings,
   EventCreation,
} from '../pages'
import {
   MyBusinessProfile,
   EventRequest,
   SignupBusinessTwo,
   MyProfileDj,
   EditProfile,
} from '../pages'
import {
   PaymentSettings,
   OnlinePresence,
   AccountSettings,
   BusinessDashboard,
} from '../pages'
import {
   BusinessPaymentSettings,
   BusinessEditProfile,
   BusinessOnlinePresence,
   BusinessAccountSettings,
} from '../pages'

export const AppRoutes = () => {
   return (
      <Routes>
         <Route path={ROUTES.HOME} element={<Home />} />
         <Route path={ROUTES.SIGNUP} element={<Signup />} />
         <Route path={ROUTES.SIGNUPDJ} element={<SignupDj />} />
         <Route path={ROUTES.SIGNUPDJTWO} element={<SignupDjTwo />} />
         <Route path={ROUTES.EVENT} element={<Events />} />
         <Route path={ROUTES.EVENT_DETAILS} element={<EventDetails />} />
         <Route path={ROUTES.LOGIN} element={<Login />} />
         <Route path={ROUTES.DJ_DISCOVERY} element={<DiscoveryDj />} />
         <Route path={ROUTES.DJ_DETAILS} element={<DetailsDj />} />
         <Route path={ROUTES.REQUEST_DJ} element={<RequestDj />} />
         <Route path={ROUTES.PAYMENT} element={<Payment />} />
         <Route path={ROUTES.DJ_BOOKINGS} element={<DjBookings />} />
         <Route path={ROUTES.DJ_CALENDAR} element={<DjCalendar />} />
         <Route
            path={ROUTES.BUSINESS_CALENDAR}
            element={<BusinessCalendar />}
         />
         <Route path={ROUTES.ADMIN_DASHBOARD} element={<AdminDashBoard />} />
         <Route
            path={ROUTES.BUSINESS_BOOKINGS}
            element={<BusinessBookings />}
         />
         <Route path={ROUTES.CREATE_EVENT} element={<EventCreation />} />
         <Route
            path={ROUTES.MY_BUSINESS_PROFILE}
            element={<MyBusinessProfile />}
         />
         <Route path={ROUTES.EVENT_APPLIED} element={<EventApplied />} />
         <Route path={ROUTES.EVENT_REQUEST} element={<EventRequest />} />
         <Route path={ROUTES.SIGNUPBUSINESS} element={<SignupBusiness />} />

         <Route
            path={ROUTES.SIGNUPBUSINESSTWO}
            element={<SignupBusinessTwo />}
         />

         <Route path={ROUTES.MYDJPROFILE} element={<MyProfileDj />}>
            <Route path={ROUTES.EDIT_PROFILE} element={<EditProfile />} />
            <Route path={ROUTES.ONLINE_PRESENCE} element={<OnlinePresence />} />
            <Route
               path={ROUTES.ACCOUNT_SETTINGS}
               element={<AccountSettings />}
            />
            <Route
               path={ROUTES.PAYMENT_SETTINGS}
               element={<PaymentSettings />}
            />
         </Route>

         <Route
            path={ROUTES.BUSINESS_DASHBOARD}
            element={<BusinessDashboard />}
         >
            <Route
               path={ROUTES.EDITPROFILE}
               element={<BusinessEditProfile />}
            />
            <Route
               path={ROUTES.ONLINEPRESENCE}
               element={<BusinessOnlinePresence />}
            />
            <Route
               path={ROUTES.ACCOUNTSETTINGS}
               element={<BusinessAccountSettings />}
            />
            <Route
               path={ROUTES.PAYMENTSETTINGS}
               element={<BusinessPaymentSettings />}
            />
         </Route>
      </Routes>
   )
}

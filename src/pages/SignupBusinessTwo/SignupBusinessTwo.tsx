import classes from './SignupBusinessTwo.module.css'
import { ReactComponent as Upload } from '../../assets/icons/upload.svg'
import { Button, Input } from '../../components/atoms'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/constants/general'


export const SignupBusinessTwo: React.FC = () => {
   return (
      <main className={classes.mainContainer}>
         <p>
            Welcome to PHONO <span>Studio 338</span>
         </p>
         <p>Please complete your profile to begin.</p>
         <div className={classes.uploadContainer}>
            <Upload />
            <Button className={classes.uploadBtn}>Upload photo</Button>
         </div>
         <form className={classes.formContainer}>
            <label htmlFor="">City</label>
            <Input
               style={{
                  width: '818px',
                  height: '64px',
                  border: '1px solid #FFFFFF',
                  color: '#FFFFFF',
                  fontSize: '24px',
               }}
               fullWidth={true}
            />

            <Link to={ROUTES.BUSINESS_DASHBOARD}>
               <Button className={classes.whiteBtn}>Complete</Button>
            </Link>
         </form>
      </main>
   )
}

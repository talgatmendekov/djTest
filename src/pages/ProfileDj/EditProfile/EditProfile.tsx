import React from 'react'
import { Input, Button } from '../../../components/atoms'
import classes from './EditProfile.module.css'

export const EditProfile = () => {
   const uploadPhotoHandler = () => {
      
   }
   return (
      <div className={classes.editProfileContainer}>
           <div className={classes.upload}>
                     <div>
                        <img src="" alt="" />
                     </div>
                     <Button
                        className={classes.uploadBtn}
                        onClick={uploadPhotoHandler}
                     >
                        Change photo
                     </Button>
                  </div>
         <form className={classes.inputSection}>
            <div className={classes.inputContainer}>
               <label htmlFor="">Name</label>
               <Input
                  className={classes.input}
                  style={{
                     border: '1px solid #FFFFFF',
                  }}
               />
            </div>
            <div className={classes.inputContainer}>
               <label htmlFor="">City</label>
               <Input
                  className={classes.input}
                  style={{
                     border: '1px solid #FFFFFF',
                  }}
               />
            </div>
            <div className={classes.inputContainer}>
               <label htmlFor="">Bio</label>
               <Input
                  className={classes.inputBio}
                  style={{
                     border: '1px solid #FFFFFF',
                  }}
                  sx={{ input: { height: '150px' } }}
               />
            </div>
            <div className={classes.inputContainer}>
               <label htmlFor="">Genres</label>
               <Input
                  className={classes.input}
                  style={{
                     border: '1px solid #FFFFFF',
                  }}
               />
            </div>
            <div className={classes.inputContainer}>
               <label htmlFor="">Hourly rate</label>
               <Input
                  className={classes.input}
                  style={{
                     border: '1px solid #FFFFFF',
                  }}
               />
            </div>
         </form>
      </div>
   )
}

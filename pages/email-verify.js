import { verifyEmailThunk } from '@/Redux/slices/verifyEmail'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function VerifyEmail() {

  const dispatch = useDispatch()
  const router = useRouter()


  useEffect(() => {
    router?.query?.token && dispatch(verifyEmailThunk(router.query.token));
    router.push("/");
  }, [router.query])

  return (
    <div className='verify_email'>
      <div className='verify_email_container'>
        <form className='verify_email_form'>
          <label>Verification Completed!</label>
        </form> 
      </div>
    </div>
  )
}

export default VerifyEmail

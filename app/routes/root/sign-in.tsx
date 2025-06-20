import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import React from 'react'
import { Link, redirect } from 'react-router'
import { loginWithGoogle } from '~/appwrite/auth'
import { account } from '~/appwrite/client'


export async function loader() {
    try {
        // Check for existing session instead of directly accessing account
        const session = await account.getSession('current').catch(() => null)
        if (session) {
            return redirect('/')
        }
        return null
    } catch (error) {
        console.log("Loader error:", error)
        return null
    }
}
const SignIn = () => {

  return (
    <div className='auth'>
        <section className='size-full glassmorphism flex-center'>
            <div className="sign-in-card">
                <header className='header'>
                    <Link to='/'>
                        <img className='size-[30px]' src="/assets/icons/logo.svg" alt="" />
                    </Link>
                    <h1 className='p-28-bold text-dark-100'>TourHabesha</h1>
                </header>
                <article>
                    <h2 className='p-28-semibold text-dark-100 text-center'>Start your Journey</h2>
                    <p className='p-28-regular text-center text-gray-100 !leading-7'>Sign in with Google to manage destinations, and user activity</p>
                </article>

                <ButtonComponent
                    type='button'
                    iconCss='e-search-icon'
                    className='button-class !h-11 !w-full'
                    onClick={loginWithGoogle}
                >
                    <img src="/assets/icons/google.svg" 
                    className='size-5 '
                    alt=""
                    /> 
                    <span className='p-18-semibold'> Sign in with Google</span>
                </ButtonComponent>
            </div>
        </section>
    </div>
  )
}

export default SignIn
'use client'
import { signUp, autoSignIn } from 'aws-amplify/auth';
import { Amplify } from 'aws-amplify';
import config from '/src/aws-exports.js';
// import { handleSignUpConfirmation } from './confirmRegister';
import { redirect } from 'next/navigation';

Amplify.configure(config);

export async function handleRegister(prevState, formData) {
  console.log(formData.get('email'))
  try {
    const { isSignUpComplete, userId, nextStep} = await signUp({
      username:formData.get('email'),
      password:formData.get('password'),
      options: {
        userAttributes: {
            email: formData.get('email'),
            name: formData.get('first_name'),
            family_name: formData.get('last_name')
        },
        // optional
        autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
      }
    });
    if(nextStep.signUpStep == "CONFIRM_SIGN_UP"){
      redirect(`/confirmRegister?username=${formData.get('email')}`)
    }
    console.log('nextStep', nextStep)
  } catch (error) {
    console.log('error signing up:', error);
  }
}
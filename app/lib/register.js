import { signUp, autoSignIn } from 'aws-amplify/auth';
import { Amplify } from 'aws-amplify';
import config from '/src/aws-exports.js';
import { handleSignUpConfirmation } from './confirmRegister';
Amplify.configure(config);

export async function handleRegister({ email, password, firstname, lastname }) {
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username:email,
      password,
      options: {
        userAttributes: {
            email: email,
            name: firstname,
            family_name: lastname
        },
        // optional
        autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
      }
    });
    console.log('nextStep', nextStep)
  } catch (error) {
    console.log('error signing up:', error);
  }
}
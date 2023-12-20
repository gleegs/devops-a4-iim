import { signIn } from 'aws-amplify/auth';
import { Amplify } from 'aws-amplify';
import config from '/src/aws-exports.js';
Amplify.configure(config);

export async function login({ email, password }) {
  try {
    const { isSignedIn, nextStep } = await signIn({ username:email, password });
    console.log('isSignedIn :', isSignedIn)
    console.log('next step :', nextStep)
  } catch (error) {
    console.log('error signing in', error);
  }
}
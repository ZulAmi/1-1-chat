import '../styles/globals.css'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import Login from './login';
import Loading from '../components/Loading';
import { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

/**
 * MyApp - Main application wrapper component
 * Handles authentication state and user data persistence
 */
function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    const updateUserData = async () => {
      try {
        if (user) {
          await db.collection('users').doc(user.uid).set({
            email: user.email,
            lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
            photoURL: user.photoURL,
            displayName: user.displayName || null,
          },
            { merge: true }
          );
        }
      } catch (error) {
        console.error('Error updating user data:', error);
      }
    };

    updateUserData();
  }, [user]);

  // Handle authentication error
  if (error) {
    return (
      <div className="error-container">
        <p>Authentication Error: {error.message}</p>
      </div>
    );
  }

  // Show loading screen while auth state is being determined
  if (loading) return <Loading />;

  // Show login screen if user is not authenticated
  if (!user) return <Login />;

  // Render the actual page component when authenticated
  return <Component {...pageProps} />
}

export default MyApp;

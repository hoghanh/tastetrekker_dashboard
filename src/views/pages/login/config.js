import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyBIc_m2Uc85Qhi__8xGTQ0xhhVOpW70av0',
  authDomain: 'taste-trekker-c362d.firebaseapp.com',
  projectId: 'taste-trekker-c362d',
  storageBucket: 'taste-trekker-c362d.appspot.com',
  messagingSenderId: '317606702412',
  appId: '1:317606702412:web:23e2e61cbfd876970933e9',
  measurementId: 'G-2JYQS798BG',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { auth, provider }

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
} from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDm_LrFPu1itJHem4dyaNP3qbNhk4-Idjg',
  authDomain: 'blog-56157.firebaseapp.com',
  projectId: 'blog-56157',
  storageBucket: 'blog-56157.appspot.com',
  messagingSenderId: '841600142494',
  appId: '1:841600142494:web:680dc37ac51672e924bf8f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of blogs from your database
async function getBlogs(db) {
  const blogsCol = collection(db, 'blogs');
  const blogSnapshot = await getDocs(blogsCol);
  const blogList = blogSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return blogList;
}

async function getBlog(db, id) {
  const docRef = doc(db, 'blogs', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
}

export { getBlogs, getBlog, db };

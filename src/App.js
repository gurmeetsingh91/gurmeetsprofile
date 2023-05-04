import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Navigation from './routes/navigation/navigation.component';

import AboutMe from './routes/aboutme/aboutme.component';
import Interests from './routes/interests/interests.component';

import { setCurrentUser } from './store/user/user.action';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<AboutMe />} />
        <Route path='aboutme/*' element={<AboutMe />} />
        <Route path='/interests' element={<Interests />} />
      </Route>
    </Routes>
  );
};

export default App;

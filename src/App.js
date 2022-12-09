/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import moment from 'moment';
import LocalStorage from './scripts/data/local-storage';
import {
  deleteChildData,
  getUserData,
  login,
  register,
  setChildData,
} from './scripts/data/network-data';
import path from './scripts/utils/path';
import Footer from './scripts/views/components/footer';
import NavBar from './scripts/views/components/navbar';
import TopBar from './scripts/views/components/top-bar';
import AddChildPage from './scripts/views/pages/add-child-page';
import ArticlesPage from './scripts/views/pages/articles-page';
import DevelopmentPage from './scripts/views/pages/development-page';
import GrowthPage from './scripts/views/pages/growth-page';
import LandingPage from './scripts/views/pages/landing-page';
import SignInPage from './scripts/views/pages/sign-in-page';
import SignUpPage from './scripts/views/pages/sign-up-page';
import VaccinesPage from './scripts/views/pages/vaccines-page';
import GrowthDetailChildPage from './scripts/views/pages/growth-detail-child.page';
import UpdateChildPage from './scripts/views/pages/update-child-page';
import DevelopmentDetailChildPage from './scripts/views/pages/development-detail-child-page';
import DevelopmentSurveyPage from './scripts/views/pages/development-survey-page';
import ChildsProfilePage from './scripts/views/pages/childs-profile-page';
import EditChildPage from './scripts/views/pages/edit-child-page';

const {
  root,
  signUp,
  signIn,
  development,
  articles,
  vaccines,
  addChild,
  detailGrowthChild,
  detailDevelopmentChild,
  updateChild,
  developmentSurvey,
  editChild,
  growth,
} = path;

export default function App() {
  const [authedUser, setAuthedUser] = useState('');
  const [childs, setChilds] = useState(['']);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAuthedUser() {
      const user = await LocalStorage.getAccount('get-account');
      if (user) {
        const response = await getUserData(user.id);
        if (!response.error) {
          setChilds(response.data.childs);
        }
        setAuthedUser(user);
      }
    }

    getAuthedUser();
  }, []);

  const signOutHandler = async () => {
    await LocalStorage.deleteAccount('get-account');
    setAuthedUser('');
    setChilds('');
    navigate('/');
  };

  const signInHandler = async ({
    event, email, password,
  }) => {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    const response = await login(data);
    console.log(response);
    if (response.error) {
      alert('error');
      return;
    }
    const account = {
      key: 'get-account',
      ...response.data,
    };
    console.log(account);
    await LocalStorage.putAccount(account);
    const userData = await getUserData(account.id);
    if (!userData.error) {
      setChilds(userData.data.childs);
    }
    setAuthedUser(account);
    alert('succes');
    navigate('/');
  };

  const signUpHandler = async ({
    event, username, email, password,
  }) => {
    event.preventDefault();
    const data = {
      username,
      email,
      password,
    };
    const response = await register(data);
    if (response.error) {
      console.log(response);
      alert('error');
      return;
    }
    console.log(response);
    alert('succes');
    navigate('/sign-in');
  };

  const addChildHandler = async ({
    event,
    name,
    gender,
    birthDate,
    weight,
    height,
    headlength,
  }) => {
    event.preventDefault();
    const age = moment().diff(moment(birthDate, 'YYYY-MM-DD'), 'month');
    const data = {
      age: age === 0 ? 1 : age,
      name,
      gender,
      birthDate,
      weight,
      height,
      headlength,
    };
    if (name === '') {
      alert('nama kosong');
      return;
    }
    if (height <= 1) {
      alert('input tinggi badan salah');
      return;
    }
    if (weight <= 1) {
      alert('input berat badan salah');
      return;
    }
    if (headlength <= 1) {
      alert('input lingkar kepala badan salah');
      return;
    }
    alert('succes');

    const response = await setChildData({ id: authedUser.id, data });

    if (response.error) {
      alert(`error: ${response.message}`);
      return;
    }

    alert('succes');
    console.log(response);
    setChilds([response.data.id, ...childs]);
    navigate('/childs');
  };

  const onDeleteHandler = async ({ childId }) => {
    const { error } = await deleteChildData({ userId: authedUser.id, childId });
    if (error) {
      alert(error.message);
    }
    const tempChilds = [...childs];
    const findedIndex = tempChilds.indexOf(childId);
    if (findedIndex >= 0) {
      tempChilds.splice(findedIndex, 1);
      setChilds([...tempChilds]);
    }
  };

  return (
    <>
      {authedUser
        ? (
          <>
            <TopBar username={authedUser.username} signOutHandler={signOutHandler} />
            <main>
              <Routes>
                <Route
                  path={growth}
                  element={(
                    <GrowthPage
                      childs={childs}
                    />
                  )}
                />
                <Route
                  path={development}
                  element={(
                    <DevelopmentPage
                      childs={childs}
                    />
                  )}
                />
                <Route path={articles} element={<ArticlesPage />} />
                <Route path={vaccines} element={<VaccinesPage />} />
                <Route
                  path={detailGrowthChild}
                  element={<GrowthDetailChildPage />}
                />
                <Route
                  path={detailDevelopmentChild}
                  element={<DevelopmentDetailChildPage />}
                />
                <Route
                  path={addChild}
                  element={<AddChildPage AddChildHandler={addChildHandler} />}
                />
                <Route
                  path={editChild}
                  element={<EditChildPage />}
                />
                <Route
                  path={updateChild}
                  element={<UpdateChildPage />}
                />
                <Route
                  path={root}
                  element={<ChildsProfilePage onDelete={onDeleteHandler} childs={childs} />}
                />
                <Route
                  path={developmentSurvey}
                  element={<DevelopmentSurveyPage />}
                />
              </Routes>
            </main>
          </>
        ) : (
          <>
            <NavBar />
            <main>
              <Routes>
                <Route path={root} element={<LandingPage />} />
                <Route path={signUp} element={<SignUpPage SignUpHandler={signUpHandler} />} />
                <Route path={signIn} element={<SignInPage SignInHandler={signInHandler} />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
    </>
  );
}

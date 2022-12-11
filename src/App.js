/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import moment from 'moment';
import Swal from 'sweetalert2';
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
import GrowthDetailChildPage from './scripts/views/pages/growth-detail-child.page';
import UpdateChildPage from './scripts/views/pages/update-child-page';
import DevelopmentDetailChildPage from './scripts/views/pages/development-detail-child-page';
import DevelopmentSurveyPage from './scripts/views/pages/development-survey-page';
import ChildsProfilePage from './scripts/views/pages/childs-profile-page';
import EditChildPage from './scripts/views/pages/edit-child-page';
import ArticleDetailPage from './scripts/views/pages/article-detail-page';
import LoadingPage from './scripts/views/pages/loading-page';
import NotFoundPage from './scripts/views/pages/not-found-page';

const {
  root,
  signUp,
  signIn,
  development,
  articles,
  articleDetail,
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
  const [initialize, setInitialize] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAuthedUser() {
      const user = await LocalStorage.getAccount('get-account');
      if (user) {
        const response = await getUserData(user.id);
        if (!response.error) {
          setChilds(response.data.childs);
        }
        setInitialize(false);
        setAuthedUser(user);
      } else {
        setInitialize(false);
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
    if (response.error) {
      Swal.fire({
        icon: 'error',
        title: 'Sign In Error',
        text: response.message,
      });
      return;
    }
    const account = {
      key: 'get-account',
      ...response.data,
    };
    await LocalStorage.putAccount(account);
    const userData = await getUserData(account.id);
    if (!userData.error) {
      setChilds(userData.data.childs);
    }
    setAuthedUser(account);
    Swal.fire({
      icon: 'success',
      title: 'Sign In Succes',
    });
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
      Swal.fire({
        icon: 'error',
        title: 'Sign Up Error',
        text: response.message,
      });
      return;
    }
    Swal.fire({
      icon: 'success',
      title: 'Sign Up Succes',
    });
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
      Swal.fire({
        icon: 'warning',
        title: 'Data tidak valid',
        text: 'Input Nama Kosong',
      });
      return;
    }
    if (height <= 1) {
      Swal.fire({
        icon: 'warning',
        title: 'Data tidak valid',
        text: 'Tinggi anak harus lebih dari 1 cm',
      });
      return;
    }
    if (weight <= 1) {
      Swal.fire({
        icon: 'warning',
        title: 'Data tidak valid',
        text: 'Berat badan anak harus lebih dari 1 kg',
      }); return;
    }
    if (headlength <= 1) {
      Swal.fire({
        icon: 'warning',
        title: 'Data tidak valid',
        text: 'Lingkar kepala anak harus lebih dari 1 cm',
      }); return;
    }
    Swal.fire({
      icon: 'success',
      title: 'Simpan data berhasil',
    });

    const response = await setChildData({ id: authedUser.id, data });

    if (response.error) {
      Swal.fire({
        icon: 'error',
        title: 'Error dalam menyimpan data',
        text: response.message,
      });
      return;
    }
    Swal.fire({
      icon: 'success',
      title: 'Simpan data anak berhasil',
    });
    setChilds([response.data.id, ...childs]);
    navigate('/');
  };

  const onDeleteHandler = async ({ childId }) => {
    const { error, message } = await deleteChildData({ userId: authedUser.id, childId });
    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error dalam menghapus data',
        text: message,
      });
    }
    const tempChilds = [...childs];
    const findedIndex = tempChilds.indexOf(childId);
    if (findedIndex >= 0) {
      tempChilds.splice(findedIndex, 1);
      setChilds([...tempChilds]);
    }
    Swal.fire({
      icon: 'success',
      title: 'Berhasil menghapus data',
    });
  };

  const authorizeChildIdHandler = (childId) => {
    const foundedId = childs.indexOf(childId);
    if (foundedId < 0) {
      navigate('/page-not-found');
    }
  };

  if (initialize) {
    return <LoadingPage />;
  }

  return (
    <>
      {authedUser
        ? (
          <>
            <TopBar username={authedUser.username} signOutHandler={signOutHandler} />
            <main>
              <Routes>
                <Route path="/*" element={<NotFoundPage />} />
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
                <Route path={articleDetail} element={<ArticleDetailPage />} />
                <Route
                  path={detailGrowthChild}
                  element={<GrowthDetailChildPage authorizeChildId={authorizeChildIdHandler} />}
                />
                <Route
                  path={detailDevelopmentChild}
                  element={
                    <DevelopmentDetailChildPage authorizeChildId={authorizeChildIdHandler} />
                  }
                />
                <Route
                  path={addChild}
                  element={(
                    <AddChildPage
                      AddChildHandler={addChildHandler}
                    />
                )}
                />
                <Route
                  path={editChild}
                  element={<EditChildPage authorizeChildId={authorizeChildIdHandler} />}
                />
                <Route
                  path={updateChild}
                  element={<UpdateChildPage authorizeChildId={authorizeChildIdHandler} />}
                />
                <Route
                  path={root}
                  element={<ChildsProfilePage onDelete={onDeleteHandler} childs={childs} />}
                />
                <Route
                  path={developmentSurvey}
                  element={<DevelopmentSurveyPage authorizeChildId={authorizeChildIdHandler} />}
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

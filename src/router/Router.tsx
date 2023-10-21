import { BrowserRouter, Route, Routes } from 'react-router-dom';

import WriteQuestion from '../components/WriteQuestion';
import Layout from '../layout/Layout';
import AnswerPage from '../pages/AnswerPage';
import ConfirmPage from '../pages/ConfirmPage';
import MainPage from '../pages/MainPage';
import QuestionConfirmPage from '../pages/QuestionConfirmPage';
import QuestionPage from '../pages/QuestionPage';
import QuestionSharePage from '../pages/QuestionSharePage';

const Paths = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/question/:shareCode" element={<QuestionSharePage />} />
        <Route path="/answer/:shareCode" element={<AnswerPage />} />
        <Route path="/confirm" element={<ConfirmPage />} />
        <Route path="/question/:confirmCode" element={<QuestionConfirmPage />} />
        <Route path="/write-question" element={<WriteQuestion />} />
      </Route>
    </Routes>
  );
};

function Router() {
  return (
    <BrowserRouter>
      <Paths />
    </BrowserRouter>
  );
}

export default Router;

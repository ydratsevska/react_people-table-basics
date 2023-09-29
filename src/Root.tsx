import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './PagesComponents/HomePage';
import { PeoplePage } from './PagesComponents/PeoplePageContent';
import { NoFoundPage } from './PagesComponents/NoFoundPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="people/:slug?" element={<PeoplePage />} />
        <Route path="*" element={<NoFoundPage />} />
        <Route
          path="/home"
          element={
            <Navigate to="/" replace />
          }
        />
      </Route>
    </Routes>
  </Router>
);
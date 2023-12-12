

import { Route, Routes } from 'react-router-dom';
import Faq from '../components/Documents/Faq';
import Regulations from '../components/Documents/Regulations';
import PrivacyPolicy from '../components/Documents/PrivacyPolicy';
import DocumentsList from '../pages/DocumentsList';

const Documents = () => {
  return (
    <Routes>
      <Route path='/' element={<DocumentsList />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/regulations' element={<Regulations />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default Documents;

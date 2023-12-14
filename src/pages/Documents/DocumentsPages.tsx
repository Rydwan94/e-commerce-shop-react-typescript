

import { Route, Routes } from 'react-router-dom';
import SingleDocument from '../../components/Documents/SingleDocument';



const DocumentsPages = () => {
  return (
    <Routes>
      <Route path='/' element={<SingleDocument/>}/>
      <Route path='/:title' element={<SingleDocument />} />    
    </Routes>
  );
};

export default DocumentsPages;

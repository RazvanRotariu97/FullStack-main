import React from 'react';
import { Link } from 'react-router-dom';

function FirstPage() {
  return (
    <div className="first-page">
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
    <img className="text-center" src='Logo librarie.png' alt='logo' width="400px" />
      <h1 className="text-center">Bine ati venit pe pagina librariei noastre!</h1>
      <h5 className="text-center"><i>Aici veti putea sa adaugati titlurile dvs. favorite, sa le ordonati, sa le acordati un rating, dar si sa le stergeti daca nu mai fac parte din preferintele dvs.</i></h5>
      <div className="d-flex justify-content-center">
        <Link to="/add-book" className="btn btn-primary mt-3">Mergi catre Formularul de adaugare</Link>
      </div>
    </div>
    </div>
  );
}

export default FirstPage;
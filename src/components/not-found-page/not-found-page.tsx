import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Header from '../header/header';
import Footer from '../footer/footer';
import Icons from '../icons/icons';


function NotFoundPage(): React.JSX.Element {
  return (
    <>
      <div className="visually-hidden">
        <Icons />
      </div>
      <div className="wrapper" style={{position: 'relative'}}>
        <Header />
        <div className="page-content" style={{margin: '0 auto'}}>
          <h1> Page not found</h1>
          <h2> 404 </h2>
          <p>Sorry we can not find this page</p>
          <Link to={AppRoute.Catalogue}> Return to main page </Link>
        </div>
        <div className="footer-wrapper" style={{position: 'absolute', bottom: 0, width: '100%'}}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;

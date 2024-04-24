import specialist from '../../../../assets/images/avatar/avatar-6.jpg';
import { Link } from 'react-router-dom';

const FeaturedSpecialists = () => {
  return (
    <section className='pt-5 featured-specialists-section mb-4'>
      <h5 className='text-center open-sans text-uppercase mb-5 fw-bold'>
        Featured Specialists
      </h5>
      <div className='d-flex featured-specialists-wrapper justify-content-between mx-5'>
        <Link
          to='/'
          className='featured-specialists-item d-flex align-items-center'
        >
          <div className='avatar-area position-relative align-items-center d-flex flex-column justify-content-center'>
            <img
              src={specialist}
              className='specialist-avatar rounded-circle'
              alt='specialist-avatar'
            />
          </div>
          <div className='details-area position-relative d-flex flex-column ps-4 py-2 pe-2'>
            <ul className='m-0' style={{ fontSize: '11px' }}>
              <li>
                <strong>Name:</strong> Collins Allen
              </li>
              <li>
                <strong>Specialist:</strong> Optician
              </li>
              <li>
                <strong>Jobs Completed:</strong> 6
              </li>
              <li>
                <strong>Ratings:</strong> 4.5 stars
              </li>
              <li>
                <strong>Location:</strong> Gwarimpa
              </li>
              <li>
                <strong>E.T.A:</strong> 1hr
              </li>
            </ul>
          </div>
        </Link>
        <Link
          to='/'
          className='featured-specialists-item d-flex align-items-center'
          style={{
            transform: 'scale(1.15)',
          }}
        >
          <div className='avatar-area position-relative align-items-center d-flex flex-column justify-content-center'>
            <img
              src={specialist}
              className='specialist-avatar rounded-circle'
              alt='specialist-avatar'
            />
          </div>
          <div className='details-area position-relative d-flex flex-column ps-4 py-2 pe-2'>
            <ul className='m-0' style={{ fontSize: '11px' }}>
              <li>
                <strong>Name:</strong> Collins Allen
              </li>
              <li>
                <strong>Specialist:</strong> Optician
              </li>
              <li>
                <strong>Jobs Completed:</strong> 6
              </li>
              <li>
                <strong>Ratings:</strong> 4.5 stars
              </li>
              <li>
                <strong>Location:</strong> Gwarimpa
              </li>
              <li>
                <strong>E.T.A:</strong> 1hr
              </li>
            </ul>
          </div>
        </Link>
        <Link
          to='/'
          className='featured-specialists-item d-flex align-items-center'
        >
          <div className='avatar-area position-relative align-items-center d-flex flex-column justify-content-center'>
            <img
              src={specialist}
              className='specialist-avatar rounded-circle'
              alt='specialist-avatar'
            />
          </div>
          <div className='details-area position-relative d-flex flex-column ps-4 py-2 pe-2'>
            <ul className='m-0' style={{ fontSize: '11px' }}>
              <li>
                <strong>Name:</strong> Collins Allen
              </li>
              <li>
                <strong>Specialist:</strong> Optician
              </li>
              <li>
                <strong>Jobs Completed:</strong> 6
              </li>
              <li>
                <strong>Ratings:</strong> 4.5 stars
              </li>
              <li>
                <strong>Location:</strong> Gwarimpa
              </li>
              <li>
                <strong>E.T.A:</strong> 1hr
              </li>
            </ul>
          </div>
        </Link>
      </div>
    </section>
  );
};
export default FeaturedSpecialists;

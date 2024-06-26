import React from 'react';
import Faqs from './Faqs';
import specialistIcon from '../../../assets/images/icons/specialist-icon.png';
import hospitalIcon from '../../../assets/images/icons/hospital-outline.png';
import patientIcon from '../../../assets/images/icons/patient-icon.png';
import accountIcon from '../../../assets/images/icons/account.png';
import refundIcon from '../../../assets/images/icons/refund.png';
import paymentIcon from '../../../assets/images/icons/payment.png';
import shareIcon from '../../../assets/images/icons/share.png';
import letterIcon from '../../../assets/images/icons/letter.png';
import worldIcon from '../../../assets/images/icons/world.png';
import fraudIcon from '../../../assets/images/icons/fraud.png';
import fileIcon from '../../../assets/images/icons/file.png';

const HelpSupport = () => {
  const otherLinks = [
    {
      id: 1,
      image: accountIcon,
      name: 'My Account',
    },
    {
      id: 2,
      image: refundIcon,
      name: 'Charges and Refund',
    },
    {
      id: 3,
      image: paymentIcon,
      name: 'Payouts',
    },
    {
      id: 4,
      image: shareIcon,
      name: 'Connect',
    },
    {
      id: 5,
      image: letterIcon,
      name: 'Subscription',
    },
    {
      id: 6,
      image: worldIcon,
      name: 'Travels',
    },
    {
      id: 7,
      image: fraudIcon,
      name: 'Fraud',
    },
    {
      id: 8,
      image: fileIcon,
      name: 'Others',
    },
  ];

  return (
    <section className='help-support-section'>
      <div className='custom_plain-wrapper'>
        <header className='d-flex align-items-center justify-content-center flex-column text-center px-5 py-5 text-white'>
          <div className='roboto-slab'>
            <p className='montserrat fs-5 fw-bold'>Self service help centre</p>
            <h2 className='fw-bolder fs-1'>How can we help today?</h2>
          </div>
          <p className='pt-3'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
            magni odit tempore explicabo veritatis quaerat, quam consectetur, ea
            ipsam itaque eveniet perferendis iure aliquam soluta deserunt et
            corrupti ab ducimus architecto totam iusto quae sunt possimus nam.
            Adipisci, optio porro?
          </p>
          <form className='d-flex flex-row gap-2 pt-4 position-relative dashboard-form'>
            <input
              type='search'
              placeholder='Find through our full database full of answers'
              className='dashboard-form-input form-control'
            />
            <button className='search-btn btn btn-secondary'>Search</button>
          </form>
        </header>
        <section className='py-5 px-4 d-flex flex-column gap-3'>
          <section style={{ width: '80%' }} className='mx-auto'>
            <Faqs />
          </section>
          <section className='topical-help mx-auto' style={{ width: '80%' }}>
            <h2 className='fs-5 text-center mt-4 mb-5 text-uppercase fw-bolder'>
              Find Help By Topics
            </h2>
            <ul className='other-info-section d-flex flex-wrap justify-content-center gap-4'>
              {otherLinks?.map(({ name, image, id }) => (
                <li
                  className='d-flex flex-column align-items-center text-center'
                  key={id}
                >
                  <img src={image} alt={name} />
                  <p className='pt-1'>{name}</p>
                </li>
              ))}
            </ul>
          </section>
          <section
            className='user-type-help mx-auto mt-4 mb-4'
            style={{ width: '80%' }}
          >
            <h2 className='fs-5 text-center mb-5 text-uppercase fw-bolder'>
              Find Help By User Category
            </h2>
            <div className='d-flex flex-row align-items-center justify-content-around'>
              <div className='user-group d-flex flex-column gap-2'>
                <div className='rounded-circle shadow p-4 border'>
                  <img src={specialistIcon} alt='specialist' />
                </div>
                <p className='text-center fs-6 fw-bold'>Specialist</p>
              </div>
              <div className='user-group d-flex flex-column gap-2'>
                <div className='rounded-circle shadow p-4 border'>
                  <img src={patientIcon} alt='patient' />
                </div>
                <p className='text-center fs-6 fw-bold'>User</p>
              </div>
              <div className='user-group d-flex flex-column gap-2'>
                <div className='rounded-circle shadow p-4 border'>
                  <img src={hospitalIcon} alt='Hospital' />
                </div>
                <p className='text-center fs-6 fw-bold'>Hospital</p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
};

export default HelpSupport;

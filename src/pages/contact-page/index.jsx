// import React from 'react';
import MainFooter from '../../components/MainFooter';
import TopNavbar from '../../components/TopNavbar';

function ContactPage() {
  return (
    <>
      <TopNavbar />
      <div
        style={{ margin: '200px auto', fontSize: '25px', textAlign: 'center' }}
      >
        {' '}
        Welcome to the contact page
      </div>
      <MainFooter />
    </>
  );
}

export default ContactPage;

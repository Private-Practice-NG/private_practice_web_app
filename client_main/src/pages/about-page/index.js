import React from 'react';
import MainFooter from '../../components/MainFooter';
import TopNavbar from '../../components/TopNavbar';

function AboutPage() {
  return (
    <section
      style={{
        backgroundColor: 'grey',
        textAlign: 'center',
      }}
    >
      <TopNavbar />
      <div style={{ fontSize: '25px', margin: '200px auto' }}>
        {' '}
        Welcome to the about page
      </div>
      <MainFooter />
    </section>
  );
}

export default AboutPage;

import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <main
      style={{
        margin: '200px auto',
        fontSize: '25px',
        textAlign: 'center',
      }}
    >
      <p>
        "Opps!!! you just hit an error" <br /> It seems the page you are looking
        for is not available. <br />
        <Link to="/" style={{ color: '#7ea2be' }} />
        Click here to safely return to the home page.
      </p>
    </main>
  );
}

export default <ErrorPage />;

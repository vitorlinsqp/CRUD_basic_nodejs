import React from 'react';
import axios from 'axios';
import Head from 'next/head';

const Home = (data) => (
  <div>
    <Head>
      <title>Home - Vitor</title>
      <meta name='robots' content='index, follow' />
      <meta name='description' content="My Portfolio Web Page" />
    </Head>

    <h1>Users List</h1>
    <ul>
      {data.response.map(user => (
        <li key={user._id}>
          Name: {user.name}<br />
         Email: {user.email}<br /><hr />
        </li>
      ))}
    </ul>
  </div>
);

Home.getInitialProps = async () => {
  var response = await axios.get(
    'http://localhost:8080/users'
  );
  //console.log(response.data);

  return { response: response.data }
};

export default Home;
import React from 'react';
import axios from 'axios';
import Head from 'next/head'

const About = (data) => (
  <div>
    <Head>
      <title>About VP Devs</title>
      <meta name='robots' content='index, follow' />
      <meta name='description' content='VP Devs Page About' />
    </Head>
    <h1>About</h1>
     Title: {data.response.title} <br />
     Description: {data.response.description} <br />
  </div>
);

About.getInitialProps = async () => {
  const response = await axios.get('http://localhost:8080/about');
  //console.log(response.data);
  return { response: response.data }
}

export default About;
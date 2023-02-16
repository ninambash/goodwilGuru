import React from 'react';

const Content = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}><strong>Lorem ipsumit. Sed ut imperdiet nisi</strong></h1>
      <p style={styles.text}>Urgent cause</p>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ccc',
    borderRadius: 5,
    padding: 20,
    backgroundColor: '#f9f9f9',
    backgroundImage: 'https://images.pexels.com/photos/1493226/pexels-photo-1493226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  heading: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
};

export default Content;

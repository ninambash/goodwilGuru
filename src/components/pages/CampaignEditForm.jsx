import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const CampaignEditForm = ({ campaign }) => {
  const [name, setName] = React.useState(campaign.name);
  const [price, setPrice] = React.useState(campaign.price);
  const [content, setContent] = React.useState(campaign.content);
  const [image, setImage] = React.useState(campaign.image);

  const navigate = useNavigate();
  const { id } = useParams();

  const validateForm = () => {
    // add validation logic here
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('jwt');
    const options = {
      headers: {
        Authorization: token,
      },
    };
    const formData = {
      name,
      price,
      content,
      image,
    };
    if (validateForm()) {
      try {
        const response = await axios.put(
          `${process.env.REACT_APP_SERVER_URL}/campaign/${id}`,
          formData,
          options
        );
        console.log(response.data);
        // once the backend gets back to us, navigate to the / route to see all items
        navigate('/');
        // redirect the user to the details page
      } catch (error) {
        // display an error message to the user
        console.log(error);
      }
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem('jwt');
    const options = {
      headers: {
        Authorization: token,
      },
    };
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/campaign/${id}`,
        options
      );
      console.log(response.data);
      // once the backend gets back to us, navigate to the / route to see all items
      navigate('/');
      // redirect the user to the details page
    } catch (error) {
      // display an error message to the user
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Edit Campaign</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />

        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />

        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />

        <button type="submit">Save Changes</button>
        <button onClick={handleDelete}>Delete Campaign</button>
      </form>
      
    </div>
  );
};

export default CampaignEditForm;






// https://images.pexels.com/photos/1405930/pexels-photo-1405930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
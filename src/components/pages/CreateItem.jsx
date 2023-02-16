import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function NewCampaign(currentUser) {
  const [form, setForm] = useState({
    name: '',
    price: '',
    content: '',
    image: '',
    user: currentUser.id,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem('jwt');
    const options = {
      headers: {
        Authorization: token,
      },
    };

    console.log(form);

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/campaign/new`, form, options)
      .then((response) => {
        console.log(response.data);
        navigate('/');
      })
      .catch(console.warn);
  };

  return (
    <div>
      <div>
        <div>
          <h2>Create</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label class="label" htmlFor="name">
                {' '}
                name
              </label>
              <input
                class="input is-medium"
                type="text"
                id="name"
                placeholder="name ..."
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div class="field">
              <label class="label" htmlFor="price">
                Price
              </label>
              <input
                class="input is-medium"
                type="text"
                id="price"
                placeholder="price ..."
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                required
              />
            </div>
            <div class="field">
              <div class="control">
                <label class="label" htmlFor="category">
                  Content
                </label>
                <input
                  class="input is-medium "
                  type="text"
                  id="category"
                  placeholder="category ..."
                  value={form.content}
                  onChange={(e) =>
                    setForm({ ...form, content: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label" htmlFor="image">
                Image
              </label>
              <div class="control">
                <input
                  class="input is-medium"
                  type="text"
                  id="image"
                  placeholder="image URL ..."
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  required
                />
              </div>
            </div>

            <button class="button is-medium is-dark m-1" type="submit">
              Submit
            </button>
            <Link to={'/'}>
              <button class="button is-medium is-dark m-1">Cancel</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

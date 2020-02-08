import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Card } from 'semantic-ui-react';
import { Line } from 'react-chartjs-2';

import { AuthContext } from '../context/auth';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { FETCH_POSTS_QUERY, FETCH_DAILY_DATA_QUERY } from '../util/graphql';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  useEffect(() => {
    if (data) {
      setPosts(data.getPosts);
    }
  }, [data]);

  return (
    <Grid columns={3}>
      <Grid.Row className='page-title'>
        <h1>Post Recientes</h1>
      </Grid.Row>
      {user && (
        <Grid.Row>
          <Grid.Column style={{ margin: 'auto' }}>
            <PostForm />
          </Grid.Column>
        </Grid.Row>
      )}
      <Grid.Row>
        {loading ? (
          <h1>Cargando Posts...</h1>
        ) : (
          data.getPosts &&
          data.getPosts.map(post => (
            <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
              <PostCard post={post} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </Grid>
  );
};

export default Home;

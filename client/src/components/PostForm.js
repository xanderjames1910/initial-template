import React from 'react';
import { Button, Card, Form } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import { useForm } from '../util/hooks';
import { FETCH_POSTS_QUERY } from '../util/graphql';

const PostForm = () => {
  const { values, onChange, onSubmit } = useForm(createPostCallback, {
    body: '',
  });

  const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
    variables: values,
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_POSTS_QUERY,
      });
      const new_post = result.data.createPost;
      // data.getPosts = [result.data.createPost, ...data.getPosts];
      proxy.writeQuery({ query: FETCH_POSTS_QUERY, data: { getPosts: [new_post, ...data.getPosts] } });
      values.body = '';
    },
  });

  function createPostCallback() {
    createPost();
  }

  return (
    <Form onSubmit={onSubmit}>
      <Card fluid>
        <Card.Content>
          <Card.Header>Creat un Post</Card.Header>
          <Card.Description>
            <Form.Field>
              <Form.Input placeholder='Hi World!' name='body' onChange={onChange} value={values.body} />
            </Form.Field>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button type='submit' color='blue'>
            Publicar
          </Button>
        </Card.Content>
      </Card>
    </Form>
  );
};

const CREATE_POST_MUTATION = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      id
      body
      createdAt
      username
      likes {
        id
        username
        createdAt
      }
      likeCount
      comments {
        id
        body
        username
        createdAt
      }
      commentCount
    }
  }
`;

export default PostForm;

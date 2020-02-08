import React from 'react';
import { Button, Card, Icon, Image, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es-us';

const PostCard = ({ post: { body, createdAt, id, username, likeCount, commentCount, likes } }) => {
  const likePost = () => {
    console.log('Like post');
  };

  const commentPost = () => {
    console.log('Comment post');
  };

  return (
    <Card fluid>
      <Card.Content>
        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/molly.png' />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt)
            .locale('es')
            .fromNow()}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as='div' labelPosition='right' onClick={likePost}>
          <Button basic color='blue' size='tiny'>
            <Icon name='heart' />
          </Button>
          <Label basic color='blue' pointing='left' size='tiny'>
            {likeCount}
          </Label>
        </Button>
        <Button as='div' labelPosition='right' onClick={commentPost}>
          <Button basic color='teal' size='tiny'>
            <Icon name='comments' />
          </Button>
          <Label basic color='teal' pointing='left' size='tiny'>
            {commentCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  );
};

export default PostCard;

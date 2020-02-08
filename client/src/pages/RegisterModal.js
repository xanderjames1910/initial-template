import React, { useContext, useState } from 'react';
import { Button, Form, Grid, List, Message, Modal } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { AuthContext } from '../context/auth';
import { useForm } from '../util/hooks';

const RegisterModal = ({ open, close }) => {
  // const context = useContext(AuthContext);

  const [errors, setErrors] = useState({});

  const { onChange, onChangeSelect, onSubmit, values } = useForm(registerUser, {
    nombre: '',
    cedula: '',
    telefono: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    perfil: '',
    direccion: '',
  });

  const handleRegisterClick = () => {
    const registerUserBtn = document.getElementById('registerUserBtn');
    registerUserBtn.click();
  };

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, { data: { register: userData } }) {
      // context.login(userData);
      // props.history.push('/');
      close();
      console.log('Registro Exitoso');
    },
    onError(err) {
      console.log(err.graphQLErrors[0].extensions.exception.errors);
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function registerUser() {
    addUser();
  }

  const options = [
    { text: 'Administrador', value: 'Administrador' },
    { text: 'Visualizador', value: 'Visualizador' },
  ];

  return (
    <div>
      <Modal open={open} onClose={close}>
        <Modal.Header>Registro de Usuarios</Modal.Header>
        <Modal.Content>
          <Form className={loading ? 'loading' : ''} onSubmit={onSubmit} noValidate>
            <Grid columns='three'>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <Form.Input
                    label='Nombre'
                    placeholder='Nombre completo'
                    name='nombre'
                    type='text'
                    fluid
                    value={values.nombre}
                    error={errors.nombre ? true : false}
                    onChange={onChange}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Form.Input
                    label='Cédula'
                    placeholder='Cédula'
                    name='cedula'
                    type='number'
                    fluid
                    value={values.cedula}
                    error={errors.cedula ? true : false}
                    onChange={onChange}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Form.Input
                    label='Teléfono'
                    placeholder='Teléfono'
                    name='telefono'
                    type='number'
                    fluid
                    value={values.telefono}
                    error={errors.telefono ? true : false}
                    onChange={onChange}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid columns='three'>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <Form.Input
                    label='Nombre de Usuario'
                    placeholder='Nombre de Usuario'
                    name='username'
                    type='text'
                    fluid
                    value={values.username}
                    error={errors.username ? true : false}
                    onChange={onChange}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Form.Input
                    label='Contraseña'
                    placeholder='Contraseña'
                    name='password'
                    type='password'
                    fluid
                    value={values.password}
                    error={errors.password ? true : false}
                    onChange={onChange}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Form.Input
                    label='Confirmar Contraseña'
                    placeholder='Confirmar Contraseña'
                    name='confirmPassword'
                    type='password'
                    fluid
                    value={values.confirmPassword}
                    error={errors.confirmPassword ? true : false}
                    onChange={onChange}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid columns='three'>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <Form.Input
                    label='Email'
                    placeholder='Email'
                    name='email'
                    type='email'
                    fluid
                    value={values.email}
                    error={errors.email ? true : false}
                    onChange={onChange}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Form.Select
                    label='Perfil'
                    placeholder='Perfil'
                    name='perfil'
                    options={options}
                    fluid
                    value={values.perfil}
                    error={errors.perfil ? true : false}
                    onChange={onChangeSelect}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid columns='one'>
              <Grid.Row columns={1}>
                <Grid.Column>
                  <Form.TextArea
                    label='Dirección'
                    placeholder='Dirección'
                    name='direccion'
                    type='text'
                    rows='2'
                    value={values.direccion}
                    error={errors.direccion ? true : false}
                    onChange={onChange}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            {Object.keys(errors).length > 0 && (
              <Message negative>
                <List bulleted>
                  {Object.values(errors).map(value => (
                    <List.Item key={value}>{value}</List.Item>
                  ))}
                </List>
              </Message>
            )}
            <Button id='registerUserBtn' style={{ display: 'none' }} type='submit' primary>
              Registrar Usuario
            </Button>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={close}>
            Cancelar
          </Button>
          <Button
            positive
            icon='checkmark'
            labelPosition='right'
            content='Registrar Usuario'
            onClick={handleRegisterClick}
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
};

const REGISTER_USER = gql`
  mutation register(
    $nombre: String!
    $cedula: String!
    $telefono: String!
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
    $perfil: String!
    $direccion: String!
  ) {
    register(
      registerInput: {
        nombre: $nombre
        cedula: $cedula
        telefono: $telefono
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
        perfil: $perfil
        direccion: $direccion
      }
    ) {
      id
      email
      username
      createdAt
    }
  }
`;

export default RegisterModal;

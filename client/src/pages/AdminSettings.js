import React, { useState } from 'react';
import { Button, Card, Header, Icon, Image, Table } from 'semantic-ui-react';
import RegisterModal from './RegisterModal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
  autoClose: 3500,
  draggable: true,
  hideProgressBar: true,
});

const AdminSettings = () => {
  const notify = () => toast.success('Wow so easy !');

  const [open, setOpen] = useState(false);

  const show = () => () => setOpen(true);
  const close = () => setOpen(false);
  return (
    <div>
      <Card style={{ width: '100%' }}>
        <Card.Content header='Listado de Usuarios' />
        <Card.Content style={{ height: 350 }}>
          {/* {loading ? (
          <Dimmer active>
            <Loader>Cargando Usuarios...</Loader>
          </Dimmer>
        ) : ( */}
          {/* <Table celled padded> */}
          <Table striped celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width={3}>Nombre del Usuario</Table.HeaderCell>
                <Table.HeaderCell>Usuario</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Teléfono</Table.HeaderCell>
                <Table.HeaderCell width={2}>Opciones</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/molly.png' rounded size='mini' />
                    <Header.Content>
                      Jimmy
                      <Header.Subheader>Administrador</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>Jimmy</Table.Cell>
                <Table.Cell>jimmy@email.com</Table.Cell>
                <Table.Cell>0991234567</Table.Cell>
                <Table.Cell>
                  <Button.Group>
                    <Button positive>Editar</Button>
                    <Button.Or text='O' />
                    <Button negative>Eliminar</Button>
                  </Button.Group>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          {/* )} */}
        </Card.Content>
        <Card.Content extra>
          <Button floated='right' icon labelPosition='left' primary size='small' onClick={show(true)}>
            <Icon name='user' /> Añadir Usuario
          </Button>
          <RegisterModal open={open} close={close} />
        </Card.Content>
      </Card>
      <button onClick={notify}>Notify !</button>
    </div>
  );
};

export default AdminSettings;

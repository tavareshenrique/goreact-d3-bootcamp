import React from 'react';

import {
  Container, Modal, Button, SpanUser, Input,
} from './styles';

const user = ({ onClick }) => (
  <Container>
    <Modal>
      {/* <Close className="close">&times;</Close> */}
      <SpanUser>Adicionar novo usuário</SpanUser>
      <div id="input">
        <Input type="text" placeholder="Usuário no Github" />
      </div>
      <div id="btn">
        <Button cor="cancelar" onClick={onClick}>
          Cancelar
        </Button>
        <Button cor="adicionar">Adicionar</Button>
      </div>
    </Modal>
  </Container>
);

export default user;

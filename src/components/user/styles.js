import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  div#input {
    display: flex;

    flex-wrap: wrap;

    justify-content: center;
  }

  div#btn {
    display: flex;

    flex-wrap: wrap;

    justify-content: center;
  }
`;

export const Modal = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
`;

export const Close = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const SpanUser = styled.span`
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 75%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  -webkit-appearance: button;
  color: #fff;
  background-color: ${props => (props.cor === 'cancelar' ? '#a0a1a2' : '#41a745')};
  border-color: ${props => (props.cor === 'cancelar' ? '#a0a1a2' : '#41a745')};
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s;
  text-transform: none;
  overflow: visible;
  margin: 0 5px;
`;

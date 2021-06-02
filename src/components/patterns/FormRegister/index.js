import React, { useState } from 'react';
import { Lottie } from '@crello/react-lottie';
import Grid from '../../foundation/layout/Grid';
import Box from '../../foundation/layout/Box';
import Button from '../../commons/Button';
import TextField from '../../commons/forms/TextField';
import Text from '../../foundation/Text';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmitStatus] = useState(formStates.DEFAULT);
  const [registerInfo, setRegisterInfo] = useState({
    name: '',
    mail: '',
    message: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setRegisterInfo({
      ...registerInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormValid = registerInfo.name.length === 0 || registerInfo.mail.length === 0
  || registerInfo.message.length === 0;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setIsFormSubmited(true);

        const userDTO = {
          name: registerInfo.name,
          email: registerInfo.email,
          message: registerInfo.message,
        };

        fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDTO),
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            throw new Error('Não foi posśivel realizar operação.');
          })
          .then((convertedResponse) => {
            setSubmitStatus(formStates.DONE);
          })
          .catch((error) => {
          });
      }}
      style={{
        height: '100%',
      }}
    >
      <Text
        variant="modalTitle"
        tag="h1"
        color="tertiary.main"
        marginTop="33px"
        textAlign="center"
      >

        Envie sua Mensagem
      </Text>

      <div>
        <TextField
          label=" Seu nome"
          name="name"
          value={registerInfo.name}
          onChange={handleChange}
          type="text"
        />
      </div>

      <div>
        <TextField
          label="Seu email"
          name="mail"
          value={registerInfo.mail}
          onChange={handleChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          type="email"
        />
      </div>

      <div>
        <TextField
          label="Sua mensagem"
          name="message"
          value={registerInfo.message}
          onChange={handleChange}
        />
      </div>

      <Box
        display="flex"
        justifyContent="center"
      >
        <Text
          variant="modalTitle"
          tag="span"
          textAlign="center"
        >

          Enviar
        </Text>

        <Button
          borderRadius={{
            xs: '50px',
          }}
          marginLeft="12px"
          display="block"
          type="submit"
          disabled={isFormValid}
        >
          {'>'}
        </Button>
      </Box>

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{
              animationData: successAnimation,
              loop: false,
              autoPlay: true,
            }}
          />
        </Box>
      )}
      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{
              animationData: errorAnimation,
              loop: false,
              autoPlay: true,
            }}
          />
        </Box>
      )}
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function RegisterForm({ modalProps }) {
  return (
    <Grid.Row marginLeft={1} marginRight={1} flex={1} justifyContent="center">
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...modalProps}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}

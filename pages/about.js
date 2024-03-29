import React, { useState } from 'react';

import Modal from '../src/components/commons/Modal';
import FormRegister from '../src/components/patterns/FormRegister';
import Box from '../src/components/foundation/layout/Box';
import Header from '../src/components/commons/Header';
import SectionProjects from '../src/components/commons/SectionProjects';
import Image from '../src/components/commons/Image';
import Button from '../src/components/commons/Button';
import Text from '../src/components/foundation/Text';
import Footer from '../src/components/commons/Footer';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        {(propsDoModal) => (
          <FormRegister propsDoModal={propsDoModal} />
        )}
      </Modal>

      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        alignItems
      >
        <Header />
        <SectionProjects
          alignSelf="center"
          marginTop={{
            xs: '32px',
            md: '62px',
          }}
        >
          <Text
            variant="section"
            tag="h3"
          >
            Sobre Mim
          </Text>
        </SectionProjects>
        <Image
          src="http://placehold.it/280x280"
          alt="Minha Foto"
          width={{
            xs: 280,
            md: 450,
          }}
          height={{
            xs: 280,
            md: 450,
          }}
          alignSelf="center"
          marginTop={{
            xs: '24px',
            md: '32px',
          }}
        />
        <Image
          src="/images/planta.png"
          alt="Planta"
          width={{
            xs: 194,
            md: 400,
          }}
          height={{
            xs: 290,
            md: 600,
          }}
          position="absolute"
          zIndex="-10"
          opacity=".5"
          transform="rotate(490deg) matrix(0.64, 0.77, 0.77, -0.64, 0, 0)"
          marginTop={{
            xs: '215px',
            md: '350px',
          }}
          marginLeft={{
            xs: '-5px',
            md: '215px',
            lg: '483px',
          }}
        />
        <Button
          borderRadius={{
            xs: '50px',
          }}
          margin={{
            xs: '0 auto',
          }}
          marginTop={{
            xs: '15px',
            md: '40px',
          }}
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          +
        </Button>
        <Image
          src="/images/planta.png"
          alt="Planta"
          width={{
            xs: 194,
            md: 400,
          }}
          height={{
            xs: 290,
            md: 600,
          }}
          position="absolute"
          zIndex="-10"
          opacity=".5"
          transform="rotate(590deg) rotateY(180deg) matrix(0.64, 0.77, 0.77, -0.64, 0, 0)"
          marginTop={{
            xs: '215px',
            md: '350px',
          }}
          marginLeft={{
            xs: '240px',
            md: '647px',
            lg: '1042px',
          }}
        />
        <Box
          flex="1"
          display="flex"
          flexDirection={{
            xs: 'column',
            md: 'row',
          }}
          marginTop={{
            xs: '0px',
            md: '40px',
          }}
        >
          <Text
            tag="p"
            variant="cardText"
            paddingLeft={{
              xs: '60px',
              md: '290px',
            }}
            textAlign={{
              xs: 'left',
              md: 'left',
            }}
            marginRight={{
              xs: '60px',
              md: '20px',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
            imperdiet urna. Nunc lacinia justo sed augue rutrum cursus. Sed
            venenatis sem in felis efficitur imperdiet. Etiam dignissim neque
            vel facilisis facilisis. Morbi vel ligula eros. Nulla dictum porta
            ante, in luctus nulla dapibus quis. Mauris ipsum arcu, dignissim a
            felis non, eleifend congue ante.
          </Text>
          <Text
            tag="p"
            variant="cardText"
            paddingRight={{
              xs: '60px',
              md: '280px',
            }}
            textAlign={{
              xs: 'left',
              md: 'left',
            }}
            marginLeft={{
              xs: '60px',
              md: '20px',
            }}
          >
            Fusce vitae ante ut sapien posuere elementum non sit amet purus.
            Integer vulputate pharetra tincidunt. Maecenas quis rutrum urna.
            Sed egestas tortor risus, vitae pretium diam varius eu. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Morbi eu arcu augue.
          </Text>
        </Box>
        <SectionProjects
          alignSelf="center"
          margin="0"
        >
          <Text
            variant="section"
            tag="span"
          >
            Meus Repositórios
          </Text>
        </SectionProjects>
        <Box
          as="ul"
          flex="1"
          display="flex"
          flexDirection="column"
        >
          <Text
            tag="h4"
            variant="projectName"
            paddingLeft={{
              xs: '10px',
              md: '245px',
            }}
          >
            My Project
          </Text>
          <Text
            tag="a"
            variant="projectLink"
            href="#"
            paddingLeft={{
              xs: '10px',
              md: '245px',
            }}
            color="link.primary"
          >
            https://github.com/me/projeto-report
          </Text>

          <Text
            tag="h4"
            variant="projectName"
            paddingLeft={{
              xs: '10px',
              md: '245px',
            }}
          >
            My Project
          </Text>
          <Text
            tag="a"
            variant="projectLink"
            href="#"
            paddingLeft={{
              xs: '10px',
              md: '245px',
            }}
            color="link.primary"
          >
            https://github.com/me/my-project
          </Text>

          <Text
            tag="h4"
            variant="projectName"
            paddingLeft={{
              xs: '10px',
              md: '245px',
            }}
          >
            My Project
          </Text>
          <Text
            tag="a"
            variant="projectLink"
            href="#"
            paddingLeft={{
              xs: '10px',
              md: '245px',
            }}
            color="link.primary"
          >
            https://github.com/me/my-project
          </Text>

          <Text
            tag="h4"
            variant="projectName"
            paddingLeft={{
              xs: '10px',
              md: '245px',
            }}
          >
            My Project
          </Text>
          <Text
            tag="a"
            variant="projectLink"
            href="#"
            paddingLeft={{
              xs: '10px',
              md: '245px',
            }}
            color="link.primary"
          >
            https://github.com/me/my-project
          </Text>
        </Box>
        <Footer />
      </Box>
    </>
  );
}

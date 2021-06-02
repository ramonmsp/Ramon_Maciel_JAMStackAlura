import React, { useState } from 'react';
import Text from '../src/components/foundation/Text';
import Box from '../src/components/foundation/layout/Box';
import Cover from '../src/components/commons/Cover';
import Header from '../src/components/commons/Header';
import Button from '../src/components/commons/Button';
import WrapperProjects from '../src/components/commons/WrapperProject';
import SectionProjects from '../src/components/commons/SectionProjects';
import CustomCard from '../src/components/commons/Card';
import Modal from '../src/components/commons/Modal';
import HighlightCard from '../src/components/commons/Card/Highlight';
import Footer from '../src/components/commons/Footer';
import RegisterForm from '../src/components/patterns/FormRegister';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        {
          (modalProps) => (
            <RegisterForm modalProps={modalProps} />
          )
        }
      </Modal>
      <Cover />
      <Header />

      <SectionProjects>
        <Text
          variant="section"
          tag="span"
        >
          Meus Projetos
        </Text>
      </SectionProjects>
      <WrapperProjects>
        <CustomCard title="Projeto 1" src="https://image.freepik.com/fotos-gratis/plano-de-fundo-texturizado-de-cores-de-pintura-multicolorida_23-2147836354.jpg" />
        <CustomCard title="Projeto 2" src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" />
        <CustomCard title="Projeto 3" src="https://miro.medium.com/max/1838/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" />
        <CustomCard title="Projeto 4" src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" />
        <HighlightCard
          title="Projeto 5"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit."
          src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/08/c573bf41-6a7c-4927-845c-4ca0260aad6b-760x400.jpeg"
        />
      </WrapperProjects>
      <Button
        borderRadius={{
          xs: '50px',
        }}
        margin={{
          xs: 'auto',
        }}
        marginTop={{
          xs: '16px',
          sm: '8px',
        }}
        marginBottom={{
          xs: '44px',
          sm: '52px',
        }}
        display="block"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        +
      </Button>
      <Footer />
    </Box>
  );
}

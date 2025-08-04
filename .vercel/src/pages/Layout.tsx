import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import NavBar from '../components/NavBar'
import BackToTopButton from '../components/BackToTopButton';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <>
       <NavBar />
       <Box padding={5}>
        <Outlet />
       </Box>
       <BackToTopButton />
       <Footer />
    </>
  );
};

export default Layout;
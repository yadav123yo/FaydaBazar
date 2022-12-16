import { Button, ButtonGroup,Box,Flex ,Spacer} from '@chakra-ui/react'
import Logo from './NavComp/Logo'
import MenuBar from './NavComp/MenuBar'
import SearchBar from './NavComp/SearchBar'
import './Navbar.css'
import OfferBar from './NavComp/OfferBar'

const Navbar = () => {
  return (
    <Box className={'navcontainer'}>
<OfferBar/>

      <Flex className={'navmenu'} >

        <Box><Logo/></Box>
        <Box > <SearchBar/></Box>

      </Flex>
      <MenuBar/>

    </Box>
  )
}

export default Navbar

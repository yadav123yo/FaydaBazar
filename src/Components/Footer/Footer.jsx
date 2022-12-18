import "./Footer.css";
import { Button, ButtonGroup,Box,Flex ,Text} from '@chakra-ui/react'
import { BsPinterest } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import FootCont from "./footerCompo/FootCont";
import FooterBottom from "./footerCompo/FooterBottom";

const Footer = () => {
  return (
    <Box backgroundColor={''}>
      <FootCont/>
      <Box backgroundColor={'#D9DDDC'} width={{base:'130%',sm:'100%',md:'100%' ,lg:'100%'}}>
        <Text fontSize={'xs'}>
© 1997-2022 Market America, Inc. or its affiliates. All other designated trademarks, copyrights, and brands are the property of their respective owners.Only Customers will receive cashback on qualifying purchases. UnFranchise Owners/Shop Consultants will receive increased IBV instead of cashback on qualifying purchases.Privacy Policy | Terms of Use | Advertising Disclosure | Return Policy | Shipping Information
</Text>

      </Box>
    {/* <FooterBottom/>  */}
    </Box>
    
      );
};

export default Footer;

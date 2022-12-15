import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";



export default function AdminForm ( ) {
  
return (
        <>
       <Text textAlign='center'>Add Products</Text>
        <Text textAlign='center' fontSize='22px'>ADD PRODUCT</Text>
        <Flex border='2px solid #fc2779' width={{base : '95%', md : '90%', lg : '85%'}} m='auto' gap={{base : '5px', md :'20px' , lg : '40px'}} direction={{base : 'column', md: 'row'}} padding='20px' borderRadius='10px'>
        <Box  w={{base : '90%', md : '80%', lg : '50%'}} m='auto'>
            <Text>Title</Text>
            <Input placeholder="Enter Title" />
            <Text mt='10px'>Image URL</Text>
            <Input placeholder="Enter Image URL" />
            <Text mt='10px'>Price</Text>
            <Input placeholder="Enter Price" />
            <Text mt='10px'>Actual Price</Text>
            <Input placeholder="Enter Actual Price"/>
           </Box>

           <Box w={{base : '90%', md : '80%', lg : '50%'}} m='auto' >
            <Text mt='10px'>Discount</Text>
            <Input placeholder="Enter Discount"/>
            <Text mt='10px'>Category</Text>
           <Input placeholder="Enter Category" />
            <Text mt='10px'>Brand</Text>
          <Input placeholder="Enter Brand Name"/>
            <br /> <br />
         
            <Button 
           
                color='white' bg={'#fc2779'} colorScheme='#fc2779'>ADD</Button>
        </Box>
        </Flex>

        <Text textAlign='center' mt='3%' fontSize='22px'>Update</Text>

        <Box border='2px solid #fc2779' w={{base : '95%',md : '70%', lg: '60%'}} m='auto' borderRadius='10px' padding='20px'>
            <Box width={{base : '90%'}} m='auto'>
                <Text>Product ID</Text>
            <Input placeholder="Enter Product ID" />
            <br /><br />
            <Text>Select Key</Text>
            <Select >
                <option value="--">--</option>
                <option value="title">Title</option>
                <option value="price">Price</option>
                <option value="actualPrice">Actual Pice</option>
                <option value="image">Image</option>
                <option value="discount">Discount</option>
            </Select>
            <br />
            <Text>Content</Text>
            <Input placeholder="Content" />
            <Button  mt='20px' color='white' bg='#fc2779' colorScheme='#fc2779' >UPDATE</Button>
            </Box>
        </Box>

        <Text textAlign='center' fontSize='22px' mt='3%'>Delete</Text>
        <Box border='2px solid #fc2779' width={{base : '80%' ,md : '40%', lg : '20%'}} m='auto' padding='20px' borderRadius='10px' shadow='lg'>
        <Text>Delete</Text>
            <Box><Input placeholder='Enter Product Id To Delete' /></Box>
            <br />
            <Button  color='white' bg='#fc2779' colorScheme='#fc2779'>Delete</Button>
        </Box>
        </>
    )   
}
import { Box, Button, Flex, Input, Select, Text, Toast, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { addProduct } from "../../Redux/products/action";

const initialState = {
    title: "",
    image: "",
    category: "",
    offer_price: 0,
    brand: "",
   discount: 0,
    type: "",
  };

export default function AdminForm () {
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const toast=useToast()
    function handleChange({ target }) {
      let val = target.value;
      if (target.name === "price" || target.name === "stars") {
        val = +target.value;
      }
      setFormData({ ...formData, [target.name]: val });
    }
    function submit() {
      dispatch(addProduct(formData));
     
  
    toast({
          title: 'Product Added Successfull.',
          description: "Your Product added Successfully.Thanks for visiting",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        Navigate("/")
  }
  
return (
        <>
      
        <Text textAlign='center' fontSize='22px'>ADD PRODUCT</Text>
        <Flex border='2px solid #fc2779' width={{base : '95%', md : '90%', lg : '85%'}} m='auto' gap={{base : '5px', md :'20px' , lg : '40px'}} direction={{base : 'column', md: 'row'}} padding='20px' borderRadius='10px'>
        <Box  w={{base : '90%', md : '80%', lg : '50%'}} m='auto'>
            <Text>Title</Text>
            <Input placeholder="Enter Title"
              name="name"
              onChange={handleChange}
              value={formData.name}
              type="text" />

            <Text mt='10px'>Image URL</Text>
            <Input  type="url"
              placeholder="Product image url"
              name="image"
              onChange={handleChange}
              value={formData.image} />

            <Text mt='10px'>Price</Text>
            <Input   type="number"
              placeholder="Product price in Rs"
              name="offer_price"
              onChange={handleChange}
              value={formData.offer_price} />

         

           </Box>

           <Box w={{base : '90%', md : '80%', lg : '50%'}} m='auto' >
         

            <Text mt='10px'>Category</Text>
           <Input  type="text"
              placeholder="product category"
              name="category"
              onChange={handleChange}
              value={formData.category} />

            <Text mt='10px'>Brand</Text>
          <Input    placeholder="enter brand name"
              name="brand"
              onChange={handleChange}
              value={formData.brand}/>

            <br /> <br />
    
            <Button 
           
           onClick={() => submit()} colorScheme="teal" type="submit">ADD</Button>
            

<Button 
           marginLeft="20px"
           colorScheme="red"
           type="button"
           onClick={() => {
             setFormData(initialState);
           }}>RESET</Button>
        </Box>
        </Flex>

        
        </>
    )   
}
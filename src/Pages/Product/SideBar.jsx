import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import "./AllProduct.css";

const SideBar = () => {
  return (
    <div className='sibox'>
      
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontSize='18px' h="40px">
                Men's Shoes Type
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <UnorderedList>
        <ListItem>Textile</ListItem>
        <ListItem>Rubber</ListItem>
        <ListItem>Leather</ListItem>
        <ListItem>Wood</ListItem>
        <ListItem>Plastic</ListItem>
      </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontSize='18px' h="40px">
                Matterial
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <UnorderedList>
        <ListItem>Textile</ListItem>
        <ListItem>Rubber</ListItem>
        <ListItem>Leather</ListItem>
        <ListItem>Wood</ListItem>
        <ListItem>Plastic</ListItem>
      </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontSize='18px' h="40px">
                Size
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <UnorderedList>
        <ListItem>Small</ListItem>
        <ListItem>Medium</ListItem>
        <ListItem>Large</ListItem>
        <ListItem>x-larger</ListItem>
        <ListItem>XX-larger</ListItem>
      </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontSize='18px' h="40px">
                Color
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <UnorderedList>
        <ListItem>Red</ListItem>
        <ListItem>Green</ListItem>
        <ListItem>Blue</ListItem>
        <ListItem>Wood</ListItem>
        <ListItem>Teal</ListItem>
      </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontSize='18px' h="40px">
                Ocassion
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <UnorderedList>
        <ListItem>Textile</ListItem>
        <ListItem>Rubber</ListItem>
        <ListItem>Leather</ListItem>
        <ListItem>Wood</ListItem>
        <ListItem>Plastic</ListItem>
      </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontSize='18px' h="40px">
                Brand
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <UnorderedList>
        <ListItem>Textile</ListItem>
        <ListItem>Rubber</ListItem>
        <ListItem>Leather</ListItem>
        <ListItem>Wood</ListItem>
        <ListItem>Plastic</ListItem>
      </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontSize='18px' h="40px">
                Store
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <UnorderedList>
        <ListItem>Textile</ListItem>
        <ListItem>Rubber</ListItem>
        <ListItem>Leather</ListItem>
        <ListItem>Wood</ListItem>
        <ListItem>Plastic</ListItem>
      </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontSize='18px' h="40px">
                Price Range
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <UnorderedList>
        <ListItem>Textile</ListItem>
        <ListItem>Rubber</ListItem>
        <ListItem>Leather</ListItem>
        <ListItem>Wood</ListItem>
        <ListItem>Plastic</ListItem>
      </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontSize='18px' h="40px">
                Discount
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <UnorderedList>
        <ListItem>15%</ListItem>
        <ListItem>25%</ListItem>
        <ListItem>35%</ListItem>
        <ListItem>45%</ListItem>
        <ListItem>55%</ListItem>
      </UnorderedList>
          </AccordionPanel>
        </AccordionItem>


      </Accordion>

    </div>
  )
}

export default SideBar



import "./SingleProduct.css";
import { useState, useEffect } from "react";
import {  TiChevronRightOutline} from "react-icons/ti";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useParams } from "react-router-dom";
import {
  useToast,
  Select,
  Box,
  SkeletonCircle,
  SkeletonText,
  Skeleton,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getSingleProduct } from "../../Redux/products/action";
import { addProductToCart } from "../../Redux/cart/action";
const responsive1 = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 9,
    slidesToSlide: 9,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2,
  },
};
function SingleProduct() {
  const [value, setValue] = useState(1);
  let {
    Product: { loading },
    singleData: data,
    AllProducts: { loading: prodLoad },
    data: products,
  } = useSelector((store) => store.products);
  console.log(data._id)


  let auth = useSelector((store) => store.auth);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProduct(id));
    dispatch(getAllProducts({ category: data.category }));
  }, [dispatch, id, data.category]);
  
  const handleChange = (value) => setValue(value);

   console.log(auth);
  const toast = useToast();
  const productAdded = () => {
    toast({
      title: "Product Added",
      description: " Product Added to Cart",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };
 
  if (loading) {
    return (
      <div className="skeleton">
        <div>
          <Skeleton h="full">
            <div>contents wrapped</div>
            <div>won't be visible</div>
          </Skeleton>
        </div>
        <div>
          <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
          <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
          <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="singleProduct">
        <div className="singleImage">
          <img src={data.image} alt="productImage" />
        </div>
        <div>
          <div className="proNames">
            <h1>{data.brand}</h1>
            <p>{data.name}</p>
          </div>
         
          <div className="proPrices">
            <p>
              Old Price :{" "}
              <span className="proOld">
                ₹ {data.offer_price*3}
              </span>
            </p>
            <p>
              New Price : <span>₹ {data.offer_price} ( 10% off)</span>
            </p>
          </div>
          <div className="proDetails">
            <h1>About The Product :</h1>
            <ul>
              <li>
                <span className="reactTi">
                  <TiChevronRightOutline  />
                </span>
                Color : <span>All colors available</span>
              </li>
              <li>
                <span className="reactTi">
                  <TiChevronRightOutline />
                </span>
                Available : <span>In Stock</span>
              </li>
              <li>
                <span className="reactTi">
                  <TiChevronRightOutline />
                </span>
                Category : <span>{data.category}</span>
              </li>
              <li>
                <span className="reactTi">
                  <TiChevronRightOutline />
                </span>
                Shipping Area : <span>All over the world</span>
              </li>
              <li>
                <span className="reactTi">
                  <TiChevronRightOutline />
                </span>
                Shipping fee : <span>Free shipping</span>
              </li>
            </ul>
          </div>
          <div className="proQuantity">
            
            <div className="selector">
              <Select placeholder="Select Size" width="xs" zIndex="0">
                <option value="option1">Small</option>
                <option value="option2">Medium</option>
                <option value="option3">Large</option>
              </Select>
            </div>
          </div>
          <div className="proAdd">
            {auth.data.isAuthenticated ? (
              <button
                onClick={() => {
                  dispatch(addProductToCart(data._id, value));
                  productAdded();
                }}
              >
                Add to Basket
              </button>
            ) : (
              <Link to="/signup">
                <button>SignUp for add to Cart</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;

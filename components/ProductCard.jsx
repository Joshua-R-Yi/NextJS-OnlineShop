'use client';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Heading,
  Divider,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
import AddToCartBtn from './Cart/AddToCartBtn';

import QuantityAdjuster from './Products/QuantityAdjuster';

const handleBuyNow = function () {
  return;
};

export default function ProductCard({ product }) {
  return (
    <div className='flex flex-row'>
      <Card maxW='sm'>
        <CardBody>
          <Image src={product.img} alt={product.alt} borderRadius='lg' />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{product.name}</Heading>
            <Text>{product.description}</Text>
            <Text color='blue.600' fontSize='2xl'>
              ${product.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue' onClick={handleBuyNow}>
              Buy now
            </Button>
            <AddToCartBtn productDetails={product} />
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
}

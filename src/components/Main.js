import React from 'react';
import { useEffect, useState } from 'react'
import jwt from 'jwt-decode'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image
} from '@chakra-ui/react';


function Main() {
    const token = localStorage.getItem("token");
    const [ currentUser, setCurrentUser ] = useState('');
    useEffect(() => {
      getCurrentUser();
    }, []);
        
    function getCurrentUser() {
        const infos = jwt(token)
        setCurrentUser(infos)
        localStorage.setItem('currentUser', JSON.stringify(infos))
        return infos;
    }

    return (
      <Container maxW={'7xl'}>
        <Stack align={'center'} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }} direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text as={'span'} position={'relative'}> Welcome back, </Text> <br />
              <Text as={'span'} color={'blue.400'}>{currentUser.firstName}</Text>
              <Text as={'span'} color={'red.400'}> {currentUser.lastName}</Text>
            </Heading>
            <Text color={'gray.500'}>
              Snippy is a rich coding snippets app that lets you create your own
              code snippets, categorize them, and even sync them in the cloud so
              you can use them anywhere. All that is free!
            </Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
            <Button rounded={'full'} size={'lg'} fontWeight={'normal'} px={6} colorScheme={'red'} bg={'red.400'} _hover={{ bg: 'red.500' }}>
              Get started
            </Button>
            <Button rounded={'full'} size={'lg'} fontWeight={'normal'} px={6}>
              How It Works
            </Button>
          </Stack>
        </Stack>
        <Flex flex={1} justify={'center'} align={'center'} w={'full'}>
        <Box height={'300px'} rounded={'2xl'} boxShadow={'2xl'} width={'full'} overflow={'hidden'}>
          <Image alt={'Hero Image'} fit={'cover'} align={'center'} w={'100%'} h={'100%'}
            src={'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'}
          />
        </Box>
      </Flex>
    </Stack>
  </Container>
  ); 
}


export default Main;

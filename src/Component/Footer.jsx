import { Box, Button, HStack, Heading, Input, Stack, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
            <Stack direction={['column', 'row']}>
                <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                    <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']}>
                        Subscribe to get Updates
                    </Heading>
                    <HStack borderBottom={'2px solid white'} py={'2'}>
                        <Input placeholder='Enter Your Email here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none'>

                        </Input>
                        <Button p={'0'} colorScheme='purple' variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                            <AiOutlineSend size={'20'} />
                        </Button>
                    </HStack>
                </VStack>
                <VStack w={'full'} borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']}>
                    <Heading textTransform={'uppercase'} textAlign={'center'}>video hub</Heading>
                    <Text>@all right received</Text>
                </VStack>
                <VStack w={'full'}>
                    <Heading size={'md'} textTransform={'uppercase'}>Social media</Heading>
                    <Button variant={'link'} colorScheme='white'><a href="https://github.com/Vikalp-Mishra03" target='blank'>Github</a></Button>
                    <Button variant={'link'} colorScheme='white'><a href="https://www.instagram.com/vikalp_003" target='blank'>Instagram</a></Button>
                    <Button variant={'link'} colorScheme='white'><a href="https://www.linkedin.com/in/vikalp-mishra" target='blank'>Linkedin</a></Button>
                </VStack>
            </Stack>
        </Box>
    )
}

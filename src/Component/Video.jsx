import { Stack, VStack } from '@chakra-ui/react'
import React from 'react'

export default function Video() {
    return (
    <Stack direction={['column', 'row']} h={'100vh'}>
        <VStack w={'full'}>
            <video controls controlsList='nodownload' src='' style={{width:'100%',}}></video>
        </VStack>
        <VStack></VStack>
    </Stack>
  )
}

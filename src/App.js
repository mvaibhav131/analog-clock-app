import { useState } from 'react';
import './App.css';
import Clock from 'react-clock';
import "react-clock/dist/Clock.css"
import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

function App() {
  const [time,setTime]=useState(new Date());
  useEffect(()=>{
    setInterval(()=>{
      setTime(new Date())
    },1000)
  });
  return (
    <>
     <Box display={'flex'} justifyContent={'center'} borderRadius='md' bg='tomato' color='white' px={4} h={8} m='9' p='1'>
       Analog Clock 
     </Box>
     <Box
     display={'flex'}
     justifyContent={'center'}
     mt='66'
     >
     <Clock  value={time} renderNumbers={true} />
    </Box>
    </>
  );
};

export default App;

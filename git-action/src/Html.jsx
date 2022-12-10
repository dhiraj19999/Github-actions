import React from 'react'
import Navbar from './Navbar'
import { useEffect,useState } from 'react'
import { Grid,GridItem,Text} from '@chakra-ui/react'
function HTML() {
  
  const[data,setData]=useState([])
  useEffect(()=>{
    let html='HTML'
let data=fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${html}`).then((res)=>{
    res.json().then((res)=>{
        console.log(res.items)
        setData(res.items)
    })
  
})

  },[])
  
  
  
  return (
    <div>
    <Navbar/>
    


    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
  
  {data.map((item)=>{
    return  <GridItem w='100%' h='60' mt='100px' >

<Text>Name:{item.name
}</Text>

<Text>Language:{item.language
}</Text>
<Text>Star Count:{item.stargazers_count
}</Text>
<Text>Fork Count:{item.forks_count
}</Text>
</GridItem>
  })}
 </Grid>







    </div>
  )
}

export default HTML
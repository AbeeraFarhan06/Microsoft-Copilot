import { Image } from '@chakra-ui/react'
import Highlight_Copilot from '../assets/Highlight_Copilot.avif'

const Banner = () => {
  return (
    <Image 
        src={Highlight_Copilot} 
        paddingX="43px"
        alignContent="center"
        width="100%"
        marginBottom={4}
    />
  )
}

export default Banner
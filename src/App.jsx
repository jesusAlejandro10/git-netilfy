import { useState } from 'react'
import './App.css'
import quotes from './data/phrases.json'
import photos from './data/photos.json'
import getRamdoNumber from './utils/getRamdoNumber'
import Phrase from './components/Phrase'
import BtnPhrase from './components/BtnPhrase'

function App() {
 
const indexRamdom = getRamdoNumber(quotes.length)

  const [PhraseSelected, setPhraseSelected] = useState(quotes[indexRamdom])
  const [bgSelected, setBgSelected]= useState(photos[getRamdoNumber(photos.length)])

const objStyle ={
  backgroundImage: `url(/images/imagen${bgSelected}.jpg)`

}

  return (
   <div className='min-h-screen flex justify-center items-center bg-cover bg-center flex-col gap-2' style={objStyle}>
    <h1 className='absolute top-10 text-10 uppercase font-bold max-w-[1000px]p-6 bg-[#b43a3acc] bg-opacity-85 rounded-xl shadow-2x3 w-56 flex justify-center items-center text-white'>Galleta de la fortuna</h1>
   <article className='max-w-[1000px]p-6 bg-[#fa8b8bcc] bg-opacity-85 rounded-xl shadow-2x3 w-96 font-semibold'>
     <Phrase PhraseSelected={PhraseSelected}
    />
   </article>
   
   <BtnPhrase 
   setPhraseSelected={setPhraseSelected}
   setBgSelected={setBgSelected}
   />
   </div>
  )
}

export default App


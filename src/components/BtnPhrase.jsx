import getRamdoNumber from '../utils/getRamdoNumber'
import quotes from '../data/phrases.json'
import photos from '../data/photos.json'

const BtnPhrase = ({setPhraseSelected, setBgSelected}) => {

const changePhrase = () => {
    const indexRamdom = getRamdoNumber(quotes.length)
    setPhraseSelected(quotes[indexRamdom])
    setBgSelected(photos[getRamdoNumber(photos.length)])
}

  return (
    <button className='h-10 px-6 font-semibold rounded-md bg-[#772828] text-white type=submit w-60 flex justify-center items-center hover:bg-[#c25050] hover:scale-110 hover:duration-100' onClick={changePhrase}>Prueba Tu Suerte</button>
  )
}

export default BtnPhrase
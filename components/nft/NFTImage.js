import { IoMdSnow } from 'react-icons/io'
import { AiOutlineHeart } from 'react-icons/ai'

const style = {
  topBar: `bg-[#303339] p-2 rounded-t-lg`,
  topBarContent: `flex items-center`,
  likesCounter: `flex-1 flex items-center justify-end`,
  nftImgContainer: `h-2/3 w-full overflow-hidden rounded-b-lg flex justify-center items-center`,
}

const NFTImage = ({ selectedNft }) => {
  return (
    <div>
      <div className={style.topBar}>
        <div className={style.topBarContent}>
          <IoMdSnow />
          <div className={style.likesCounter}>
            <AiOutlineHeart />
            2.3K
          </div>
        </div>
      </div>
      <div className={style.nftImgContainer}>
        {console.log(selectedNft, '🎆')}
        <img src={selectedNft?.image} />
      </div>
    </div>
  )
}

export default NFTImage

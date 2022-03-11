import { AiFillHeart } from 'react-icons/ai'
import { MdRefresh } from 'react-icons/md'
import { RiShareBoxLine } from 'react-icons/ri'
import { FiMoreVertical } from 'react-icons/fi'
import { GiShare } from 'react-icons/gi'

const style = {
  wrapper: `flex flex-col lg:flex-row mt-[-3rem] items-center sm:items-start sm:mt-0 sm:pb-4 lg:pb-0 text-center sm:text-left`,
  infoContainer: `h-36 flex flex-col flex-1 justify-between mb-6`,
  accent: `text-[#2081e2] pb-2 lg:pb-0 `,
  nftTitle: `text-3xl font-extrabold pb-2 lg:pb-0`,
  otherInfo: `flex flex-col sm:flex-row`,
  ownedBy: `text-[#8a939b] sm:mr-4`,
  likes: `flex items-center justify-center text-[#8a939b]`,
  likeIcon: `mr-1`,
  actionButtonsContainer: `w-44 sm:pb-5 pb-4 sm:pb-0`,
  actionButtons: `flex container justify-between text-lg md:text-[1.1rem] lg:text-[1.4rem] border-2 rounded-lg`,
  actionButton: `my-2`,
  divider: `border-r-2`,
}

const GeneralDetails = ({ selectedNft }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.infoContainer}>
        <div className={style.accent}>Bored Ape Yacht Club</div>
        <div className={style.nftTitle}>{selectedNft?.name}</div>
        <div className={style.otherInfo}>
          <div className={style.ownedBy}>
            Owned by <span className={style.accent}>e88vault</span>
          </div>
          <div className={style.likes}>
            <AiFillHeart className={style.likeIcon} /> 2.3K favorites
          </div>
        </div>
      </div>
      <div className={style.actionButtonsContainer}>
        <div className={style.actionButtons}>
          <div className={`${style.actionButton} ml-2`}>
            <MdRefresh />
          </div>
          <div className={style.divider} />
          <div className={style.actionButton}>
            <RiShareBoxLine />
          </div>
          <div className={style.divider} />
          <div className={style.actionButton}>
            <GiShare />
          </div>
          <div className={style.divider} />
          <div className={`${style.actionButton} mr-2`}>
            <FiMoreVertical />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralDetails

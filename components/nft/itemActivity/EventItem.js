import { BsFillCartFill } from 'react-icons/bs'

const style = {
  eventItem: `flex px-4 py-5 font-medium items-center`,
  event: `flex items-center`,
  eventName: `sm:text-lg text-sm font-semibold`,
  eventPrice: `flex items-center`,
  eventPriceValue: `sm:text-lg text-sm`,
  ethLogo: `sm:h-5 h-3 mr-1 sm:mr-2`,
  accent: `text-[#2081e2] sm:text-md text-sm`,
}

const EventItem = ({ event }) => {
  return (
    <div className={style.eventItem}>
      <div className={`${style.event} flex-[2] pr-2 sm:pr-0`}>
        <div className={style.eventName}>Sale</div>
      </div>
      <div className={`${style.eventPrice} flex-[2] pr-2 sm:pr-0`}>
        <img
          src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
          alt="eth"
          className={style.ethLogo}
        />
        <div className={style.eventPriceValue}>{event.price}</div>
      </div>
      <div className={`${style.accent} flex-[3] pr-2 sm:pr-0`}>
        {event.from}
      </div>
      <div className={`${style.accent} flex-[3] pr-2 sm:pr-0`}>{event.to}</div>
      <div className={`${style.accent} flex-[2]`}>{event.date}</div>
    </div>
  )
}

export default EventItem

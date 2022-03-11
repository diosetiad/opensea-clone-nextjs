import Link from 'next/link'
import React from 'react'

const style = {
  wrapper: `relative`,
  container: `before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative sm:justify-center sm:flex-row flex-col gap-[1rem] items-center`,
  copyContainer: `sm:w-1/2 px-6 my-5`,
  title: `relative text-white text-2xl lg:text-4xl md:text-3xl text-center font-semibold`,
  description: `text-[#8a939b] container-[400px] text-md lg:text-2xl sm:text-lg text-center mt-[0.8rem] mb-[2rem]`,
  ctaContainer: `flex justify-center`,
  accentedButton: ` relative text-md sm:text-lg lg:text-xl font-semibold w-28 h-12 bg-[#2181e2] rounded-lg mx-3 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-md sm:text-lg lg:text-xl font-semibold w-28 h-12 bg-[#363840] rounded-lg mx-3 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem] lg:pb-14`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex lg:w-[75%] items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
}

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Discover, collect, and sell extraordinary NFTs
            </div>
            <div className={style.description}>
              OpenSea is the world&apos;s first and largest NFT marketplace
            </div>
            <div className={style.ctaContainer}>
              <Link href="/collections/0x2245f8985Ef9b54a20F8c65b901ffB7d1086490B">
                <button className={style.accentedButton}>Explore</button>
              </Link>
              <button className={style.button}>Create</button>
            </div>
          </div>
          <div className={style.cardContainer}>
            <img
              className="h-52 w-52 rounded-t-lg sm:h-60 sm:w-60 md:h-64 md:w-64 lg:h-[65%] lg:w-[75%]"
              src="https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s550"
              alt=""
            />
            <div className={style.infoContainer}>
              <img
                className="h-[2.25rem] rounded-full"
                src="https://lh3.googleusercontent.com/qQj55gGIWmT1EnMmGQBNUpIaj0qTyg4YZSQ2ymJVvwr_mXXjuFiHJG9d3MRgj5DVgyLa69u8Tq9ijSm_stsph8YmIJlJQ1e7n6xj=s64"
                alt=""
              />
              <div className={style.author}>
                <div className={style.name}>Jolly</div>
                <a
                  className="text-[#1868b7]"
                  href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2324922113504035910649522729980423429926362207300810036887725141691069366277"
                >
                  hola-kanola
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { useWeb3 } from '@3rdweb/hooks'
import { useEffect } from 'react'
import { client } from '../lib/sanityClient'
import toast, { Toaster } from 'react-hot-toast'

const style = {
  wrapper: `h-screen w-screen`,
  walletConnectWrapper: `flex flex-col items-center justify-center h-72 w-72 mx-auto rounded-lg shadow-2xl bg-[url('https://lh3.googleusercontent.com/XCRun2XQ6IQFOKK8Gc1x0LNRyv_e8vhoVZ7CIdl_ppYfcVMWnQgi2ncxmxDzX7txHOeO65E3zqUJJXqLZSs8_uyJiRGKSGFNuYZP4C7HPlSu-9E_JSK1ftq0sFEP7X4L9wGGUKRxoXtIX02aOIiEcAIK8hI_W6X06xAjLONzC44HkO3nkBb1NfX3rMbqSr8vSy6yerISfWgDHh_dnVK3ojWgGqj9gSXpArF2GsiN9WPH0IRIuCT-VyuJWVPNm_c8pPFAqWT2PtZvzjagm-C_nf98GvUNX11YPqZPLM9k6xV_ZI7otTQutkld1TwLh0CNQlP7Nrm0Y5h_dLcjjZPsIhZwuhy7kdIgkS5IFHG1gqwW6C_L3MPlZm0YV0rq3RrJJtnowz2gzkfMu_ePHayVArrjVILFSiBPMjBPYomDrMzCrFeBguxeJU39Ac-OJ5lfV_QhYyFXQS-gdItGCjyzb0opfeqqf0gWLF1aT-dv3k0RPIAULcSHmsRMiU4G-j0JY6oLq-yxlNkp8CortFxFB1pfR4MN5dYzMrIOTOVlvMmejiDHc7CCaFQ0ptK6kSXCVvFZ7WzP79Cb8jpR-jQolgwIt099HkxzZYNxb970LkoTKpDtSimMmacc5FwoLBLxq21NOCiSndZku0vlNTA52qf9czXIxsuPSd-ssoZpm6SeFnEmEbltNL8l3y-0Wk3slEYph6Ryzw0JI-2GyZQqo5xR=w433-h550-no?authuser=0')] bg-cover  bg-center sm:min-h-[75%] sm:min-w-[75%] mt-40 sm:mt-20`,
  button: `bg-[#2181e2] p-[0.8rem] hover:bg-[#42a0ff] text-md md:text-lg lg:text-xl font-semibold rounded-lg cursor-pointer text-white`,
  details: `pt-10 text-sm md:text-md lg:text-lg text-center text-white font-semibold`,
}

export default function Home() {
  const { address, connectWallet } = useWeb3()

  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back${userName !== 'Unnamed' ? ` ${userName}` : ''}!`,
      {
        style: {
          background: '#04111d',
          color: '#fff',
        },
      }
    )
  }

  useEffect(() => {
    if (!address) return
    ;(async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      }

      const result = await client.createIfNotExists(userDoc)

      welcomeUser(result.userName)
    })()
  }, [address])

  return (
    <>
      <Head>
        <title>Opensea - blockhain</title>
        <script
          type="module"
          src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"
        ></script>
        <script
          noModule
          src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"
        />
      </Head>
      <div className={style.wrapper}>
        <Toaster position="top-center" reverseOrder={false} />
        {address ? (
          <>
            <Header />
            <Hero />
          </>
        ) : (
          <div className={style.walletConnectWrapper}>
            <button
              className={style.button}
              onClick={() => connectWallet('injected')}
            >
              Connect Your Wallet
            </button>
            <div className={style.details}>
              Connect with MetaMask
              <br /> wallet providers or create a new one.
            </div>
          </div>
        )}
      </div>
    </>
  )
}

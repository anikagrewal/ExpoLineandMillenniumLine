import Image from 'next/image'
import dynamic from 'next/dynamic'



const DynamicMap = dynamic(() => import('../../components/Map'), {ssr: false});

// REASON using dynamic is because map will render in client side..
export default function Home() {
  return (
    <div className="bg-blue-100">
      <div className="box-border h-14 w-auto p-4 bg-blue-100 flex flex-row justify-center gap-5">
        <h1>Expo and Millennium Lines</h1>
        <Image src="/images/train-logo.png" alt="logo" width={45} height={55} />
      </div>
    <DynamicMap/>

    </div>
   
  )
}

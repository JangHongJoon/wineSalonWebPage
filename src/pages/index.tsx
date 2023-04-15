import Image from 'next/image'

import { Inter } from 'next/font/google'
import {useEffect, useState} from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [appleShareIconVisibleStateForFirstBlock1, setAppleShareIconVisibleStateForFirstBlock1] = useState(false)
    const [appleShareIconVisibleStateForFirstBlock2, setAppleShareIconVisibleStateForFirstBlock2] = useState(false)
    const [appleShareIconVisibleStateForFirstBlock3, setAppleShareIconVisibleStateForFirstBlock3] = useState(false)

    const [appleShareIconVisibleStateForSecondBlock1, setAppleShareIconVisibleStateForSecondBlock1] = useState(false)
    const [appleShareIconVisibleStateForSecondBlock2, setAppleShareIconVisibleStateForSecondBlock2] = useState(false)

    const [appleShareIconVisibleStateForThirdBlock1, setAppleShareIconVisibleStateForThirdBlock1] = useState(false)
    const [appleShareIconVisibleStateForThirdBlock2, setAppleShareIconVisibleStateForThirdBlock2] = useState(false)
    const [appleShareIconVisibleStateForThirdBlock3, setAppleShareIconVisibleStateForThirdBlock3] = useState(false)

    const [visibleForSticky, setVisibleForSticky] = useState('invisible')

    function handleScroll() {
        const scrollY = window.scrollY;
        if (scrollY!==0){
            setTimeout(() => {
                setVisibleForSticky('visible')
            },200)
        }
        else {
            setTimeout(() => {
                setVisibleForSticky('invisible')
            },200)

        }

    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    },[])

  return (
    <main className="flex flex-col items-center justify-between p-20 bg-gradient-to-t from-lime to-mint">
        <div className="sticky absolute z-10 top-8 flex flex-row w-5/12">
            <div className="flex items-center justify-center mt-2 ml-2 w-10 h-10 absolute left-0 transition ease-in-out bg-gray-100 hover:bg-gray-200 duration-300 rounded-full">
                <Image width={30} height={30} src="/apple_share_icon.png"/>
            </div>

            <div className= "flex flex-row bg-white absolute right-0 w-[110px] h-10 mt-2 mr-2 rounded-s-full rounded-e-full transition ease-in-out bg-gray-100 hover:bg-gray-200 duration-300 ">
                <div className="w-10 h-10 absolute left-0">
                    <Image className ="ml-3.5 mt-2.5" width={20} height={15} src="/subscribe_bell_icon.png"/>
                </div>
                <div className="ml-10 mt-2">Subscribe</div>
            </div>

        </div>

        <div className={`sticky absolute z-10 flex flex-row justify-center top-8 w-5/12 h-14 rounded-s-full rounded-e-full bg-gray-200 bg-opacity-80 ${visibleForSticky}`}
             style={{
                 opacity: visibleForSticky==='visible' ? 1 : 0,
                 transition: "opacity 0.2s ease-in-out",
             }}>
            <div className="flex items-center justify-center w-10 h-10 mt-2 ml-2 absolute left-0 transition ease-in-out bg-black hover:bg-gray-500 duration-300 rounded-full">
                <Image width={30} height={30} src="/apple_share_icon_white.png"/>
            </div>

            <div className="w-10 h-10 mt-2 transition ease-in-out bg-[url('../../public/wine_salon_logo.png')] bg-cover rounded-full" />

            <div className= "flex flex-row bg-white absolute right-0 w-[110px] h-10 mt-2 mr-2 rounded-s-full rounded-e-full transition ease-in-out bg-black hover:bg-gray-500 duration-300 ">
                <div className="w-10 h-10 absolute left-0">
                    <Image className ="ml-3.5 mt-2.5" width={20} height={15} src="/subscribe_bell_icon_white.png"/>
                </div>
                <div className="ml-10 mt-2 text-white">Subscribe</div>
            </div>

        </div>


        <div className = "-mt-10 flex flex-col items-center justify-items-center w-full">

            <div className="w-24 h-24 rounded-full bg-cover bg-[url('../../public/wine_salon_logo.png')]" />
            <div className="font-bold font-body text-xl mt-5">
                WINE SALON
            </div>
            <div className="mt-1">
                와인클래스 / 위스키시음 / 독서모임 / 하트시그널 / 어바웃타임
            </div>

            <div className="mt-6 flex flex-col items-center w-2/3">
                <div className="font-bold">🥂 매주 열리는 <strong>2030</strong> 소셜모임 신청! 🥂</div>
                <div className = "mt-3 w-2/3">
                    <div className="relative">
                        <div
                            onClick={() => window.open("https://m.blog.naver.com/backers0/221856954360", "_blank")}
                            onMouseOver={() => setAppleShareIconVisibleStateForFirstBlock1(true)}
                            onMouseLeave={() => setAppleShareIconVisibleStateForFirstBlock1(false)}
                            className= "flex flex-col place-content-center absolute z-10 hover:top-1 hover:left-1 w-full h-16 rounded-s-full rounded-e-full border-[3.2px] border-thick-green bg-white">
                            <div className="flex flex-row place-content-center w-full">
                                <div style={{userSelect:"none"}}>모임일정 / 실시간 신청현황</div>
                                    <div className="absolute top-[15px] right-0 mr-5 w-7 h-7"
                                         style={{
                                             opacity: appleShareIconVisibleStateForFirstBlock1 ? 1 : 0,
                                             transition: "opacity 0.2s ease-in-out",
                                         }}
                                    >
                                        <Image className="transition ease-in-out hover:bg-gray-200 duration-300 rounded-full" width={100} height={100} src="/apple_share_icon.png"/>
                                    </div>
                            </div>
                        </div>
                        <div className= "relative top-2 left-2 h-16 rounded-s-full rounded-e-full border-[3.2px] border-thick-green bg-thick-green"></div>
                    </div>

                    <div className="mt-4 relative">
                        <div
                            onClick={() => window.open("https://winesalon.oopy.io/", "_blank")}
                            onMouseOver={() => setAppleShareIconVisibleStateForFirstBlock2(true)}
                            onMouseLeave={() => setAppleShareIconVisibleStateForFirstBlock2(false)}
                            className= "flex flex-col place-content-center absolute z-10 hover:top-1 hover:left-1 w-full h-16 rounded-s-full rounded-e-full border-[3.2px] border-thick-green bg-white ">
                            <div className="flex flex-row place-content-center w-full">
                                <div style={{userSelect:'none'}}>와인살롱 GUIDE</div>
                                <div className="absolute top-[15px] right-0 mr-5 w-7 h-7"
                                     style={{
                                         opacity: appleShareIconVisibleStateForFirstBlock2 ? 1 : 0,
                                         transition: "opacity 0.2s ease-in-out",
                                     }}
                                >

                                    <Image className="transition ease-in-out hover:bg-gray-200 duration-300 rounded-full" width={100} height={100} src="/apple_share_icon.png"/>
                                </div>
                            </div>
                        </div>
                        <div className= "relative top-2 left-2 h-16 rounded-s-full rounded-e-full border-[3.2px] border-thick-green bg-thick-green"></div>
                    </div>

                    <div className="mt-4 relative">
                        <div
                            onClick={() => window.open("https://open.kakao.com/o/gkfABbIe", "_blank")}
                            onMouseOver={() => setAppleShareIconVisibleStateForFirstBlock3(true)}
                            onMouseLeave={() => setAppleShareIconVisibleStateForFirstBlock3(false)}
                            className= "flex flex-col place-content-center absolute z-10 hover:top-1 hover:left-1 w-full h-16 rounded-s-full rounded-e-full border-[3.2px] border-thick-green bg-white ">
                            <div className="flex flex-row place-content-center w-full">
                                <div style={{userSelect : 'none'}}>(신규회원용) 일정공지 카톡방 / 참여코드2111</div>
                                <div className="absolute top-[15px] right-0 mr-5 w-7 h-7"

                                     style={{
                                         opacity: appleShareIconVisibleStateForFirstBlock3 ? 1 : 0,
                                         transition: "opacity 0.2s ease-in-out",
                                     }}
                                >

                                    <Image className="transition ease-in-out hover:bg-gray-200 duration-300 rounded-full" width={100} height={100} src="/apple_share_icon.png"/>
                                </div>
                            </div>
                        </div>
                        <div className= "relative top-2 left-2 h-16 rounded-s-full rounded-e-full border-[3.2px] border-thick-green bg-thick-green"></div>
                    </div>

                </div>

            </div>


            <div className="mt-8 flex flex-col items-center w-2/3">
                <div className="font-bold">💕<strong>Wine Salon</strong> 소개 / 운영진 소개 💕</div>
                <div className = "mt-3 w-2/3">
                    <div className="relative">
                        <div
                            onClick={() => window.open("https://blog.naver.com/backers0/222489631416", "_blank")}
                            onMouseOver={() => setAppleShareIconVisibleStateForSecondBlock1(true)}
                            onMouseLeave={() => setAppleShareIconVisibleStateForSecondBlock1(false)}
                            className= "flex flex-col place-content-center absolute z-10 hover:top-1 hover:left-1 w-full h-16 rounded-s-full rounded-e-full border-[3.2px] border-thick-green bg-white ">
                            <div className="flex flex-row place-content-center w-full">
                                <div style={{userSelect:'none'}}>와인살롱 소개</div>
                                <div className="absolute top-[15px] right-0 mr-5 w-7 h-7"
                                     style={{
                                         opacity: appleShareIconVisibleStateForSecondBlock1 ? 1 : 0,
                                         transition: "opacity 0.2s ease-in-out",
                                     }}
                                >

                                    <Image className="transition ease-in-out hover:bg-gray-200 duration-300 rounded-full" width={100} height={100} src="/apple_share_icon.png"/>
                                </div>
                            </div>
                        </div>
                        <div className= "relative top-2 left-2 h-16 rounded-s-full rounded-e-full border-[3.2px] border-thick-green bg-thick-green"></div>
                    </div>

                    <div className="mt-4 relative">
                        <div
                            onClick={() => window.open("https://blog.naver.com/backers0/221883351998", "_blank")}
                            onMouseOver={() => setAppleShareIconVisibleStateForSecondBlock2(true)}
                            onMouseLeave={() => setAppleShareIconVisibleStateForSecondBlock2(false)}
                            className= "flex flex-col place-content-center absolute z-10 hover:top-1 hover:left-1 w-full h-16 rounded-s-full rounded-e-full border-[3.2px] border-thick-green bg-white ">
                            <div className="flex flex-row place-content-center w-full">
                                <div style={{userSelect :'none'}}>와인살롱 운영진소개</div>
                                <div className="absolute top-[15px] right-0 mr-5 w-7 h-7"
                                     style={{
                                         opacity: appleShareIconVisibleStateForSecondBlock2 ? 1 : 0,
                                         transition: "opacity 0.2s ease-in-out",
                                     }}
                                >

                                    <Image className="transition ease-in-out hover:bg-gray-200 duration-300 rounded-full" width={100} height={100} src="/apple_share_icon.png"/>
                                </div>
                            </div>
                        </div>
                        <div className= "relative top-2 left-2 h-16 rounded-s-full rounded-e-full border-[3.2px] border-thick-green bg-thick-green"></div>
                    </div>


                </div>

            </div>

            <div className="mt-8 flex flex-col items-center w-2/3">
                <div className="font-bold">👇👇 모임 후기 / 사진 / 영상은 👇👇</div>
                <div className = "mt-3 w-2/3">
                    <div className="relative">
                        <div
                            onClick={() => window.open("https://blog.naver.com/backers0", "_blank")}
                            onMouseOver={() => setAppleShareIconVisibleStateForThirdBlock1(true)}
                            onMouseLeave={() => setAppleShareIconVisibleStateForThirdBlock1(false)}
                            className= "flex flex-col place-content-center absolute z-10 hover:top-1 hover:left-1 w-full h-16 rounded-s-full rounded-e-full border-[3.2px] border-thick-green bg-white ">
                            <div className="flex flex-row place-content-center w-full">
                                <div style={{userSelect:'none'}}>블로그(모임후기/후기영상)</div>
                                <div className="absolute top-[15px] right-0 mr-5 w-7 h-7"
                                     style={{
                                         opacity: appleShareIconVisibleStateForThirdBlock1 ? 1 : 0,
                                         transition: "opacity 0.2s ease-in-out",
                                     }}
                                >

                                    <Image className="transition ease-in-out hover:bg-gray-200 duration-300 rounded-full" width={100} height={100} src="/apple_share_icon.png"/>
                                </div>
                            </div>
                        </div>
                        <div className= "relative top-2 left-2 h-16 rounded-s-full rounded-e-full border-[3.2px] border-thick-green bg-thick-green"></div>
                    </div>

                    <div className="mt-4 relative">
                        <div
                            onClick={() => window.open("https://www.instagram.com/winesalon.kr", "_blank")}
                            onMouseOver={() => setAppleShareIconVisibleStateForThirdBlock2(true)}
                            onMouseLeave={() => setAppleShareIconVisibleStateForThirdBlock2(false)}
                            className= "flex flex-col place-content-center absolute z-10 hover:top-1 hover:left-1 w-full h-16 rounded-s-full rounded-e-full border-[3.2px] border-thick-green bg-white ">
                            <div className="flex flex-row place-content-center w-full">
                                <div style={{userSelect:'none'}}>인스타</div>
                                <div className="absolute top-[15px] right-0 mr-5 w-7 h-7"
                                     style={{
                                         opacity: appleShareIconVisibleStateForThirdBlock2 ? 1 : 0,
                                         transition: "opacity 0.2s ease-in-out",
                                     }}
                                >

                                    <Image className="transition ease-in-out hover:bg-gray-200 duration-300 rounded-full" width={100} height={100} src="/apple_share_icon.png"/>
                                </div>
                            </div>
                        </div>
                        <div className= "relative top-2 left-2 h-16 rounded-s-full rounded-e-full border-[3.2px] border-thick-green bg-thick-green"></div>
                    </div>

                    <div className="mt-4 relative">
                        <div
                            onClick={() => window.open("https://www.youtube.com/channel/UCiJajrfG9h4D_XAP9drUHdA/featured?sub_confirmation=1", "_blank")}
                            onMouseOver={() => setAppleShareIconVisibleStateForThirdBlock3(true)}
                            onMouseLeave={() => setAppleShareIconVisibleStateForThirdBlock3(false)}
                            className= "flex flex-col place-content-center absolute z-10 hover:top-1 hover:left-1 w-full h-16 rounded-s-full rounded-e-full border-[3.2px] border-thick-green bg-white ">
                            <div className="flex flex-row place-content-center w-full">
                                <div style={{userSelect:'none'}}>유튜브</div>
                                <div className="absolute top-[15px] right-0 mr-5 w-7 h-7"
                                     style={{
                                         opacity: appleShareIconVisibleStateForThirdBlock3 ? 1 : 0,
                                         transition: "opacity 0.2s ease-in-out",
                                     }}
                                >
                                    <Image className="transition ease-in-out hover:bg-gray-200 duration-300 rounded-full" width={100} height={100} src="/apple_share_icon.png"/>
                                </div>
                            </div>
                        </div>
                        <div className= "relative top-2 left-2 h-16 rounded-s-full rounded-e-full border-[3.2px] border-thick-green bg-thick-green"></div>
                    </div>


                </div>



            </div>


        </div>

    </main>
  )
}

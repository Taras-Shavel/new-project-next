"use client"
import {useState} from "react"
import { useTranslation } from 'react-i18next';
import '../../i18n';

interface IData {
    src: string,
    text: string
}
const NavBar = () => {
    const { t, i18n } = useTranslation();
    const data: IData[] = [
        { src: "./Images/Dashboard.png", text: `${t('dashboard')}`},
        { src: "./Images/Proxies.png", text: `${t('myProxies')}`},
        { src: "./Images/Balance.png", text: `${t('topUpBalance')}` },
        { src: "./Images/Transactions.png", text: `${t('transactions')}`},
    ]
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index: any) => {
        setActiveIndex(index);
    };

    return (
        <div className="w-full h-screen bg-[#141417] box-border " style={{ borderRight: "1px solid #202023" }}>
            <div className="w-full h-[64px] px-[20px] flex justify-between items-center">
                <div className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center "
                    style={{
                        border: "1px solid rgba(226, 228, 105, 0.3)",
                        background: "linear-gradient(180deg, rgba(252, 255, 114, 0.05) 0%, rgba(252, 255, 114, 0.4) 100%), rgba(255, 255, 255, 0.05)"
                    }}>
                    <img src="./Images/Mask.png" alt="gf" />
                </div>
                <div className="w-[32px] h-[32px] flex justify-center items-center ">
                    <img src="./Images/IconBell.png" alt="icon bell" className="w-[16px] h-[16px]" />
                </div>
            </div>

            <div className="w-full h-[90%] p-[12px] flex flex-col justify-between">

                <div className="w-full">

                    <div className="w-full h-[88px] bg-[#202023] rounded-[6px] p-3 mb-3" style={{ border: "1px solid #363639" }}>
                        <p className="text-[#BABAC1] text-[14px] font-normal mt-0 mb-3">
                            {t('myProxiesZero')}
                        </p>
                        <button className="w-full h-[32px] rounded-[62px] bg-[#FCFF72] text-[14px] font-bold text-[#0D0D10]" style={{ border: "1px solid #D0D330" }}>
                            {t('purchaseProxies')}
                        </button>
                    </div>

                    <div className="w-full h-[152px] flex flex-col justify-between">
                        {
                            data.map((item, index) => (
                                <div
                                    key={index}
                                    className={`w-full h-[32px] flex px-[12px] py-[6px] rounded-[6px] cursor-pointer text-[#BABAC1]
                                    ${activeIndex === index ? 'bg-[#202023] border border-[#363639] text-[#EBEBEF]' : 'bg-none border border-transparent'} 
                                    hover:bg-[#202023] hover:border-[#363639] hover:text-[#EBEBEF]`}
                                    onClick={() => handleClick(index)}
                                >
                                    <img src={item.src} alt={`Icon ${item.text}`} className="w-4 h-4 mr-2" />
                                    <p className=" m-0 text-[14px] font-medium">
                                        {item.text}
                                    </p>
                                </div>
                            ))

                        }
                    </div>

                </div>

                <div className="w-full h-[72px]">
                    <div className="w-full h-[32px] py-[6px] px-2 mb-2 flex items-center">
                        <img src="./Images/Support.png" alt="Icon Support" className="w-4 h-4 mr-2" />
                        <p className="text-[#BABAC1] text-[14px] h-5">
                            {t('support')}
                        </p>
                    </div>

                    <div className="w-full h-[32px] p-1 flex items-center">
                        <img src="./Images/AvatarUser.png" alt="Icon Avatar User" className="w-6 h-6 mr-2" />
                        <p className="text-[#EBEBEF] text-[14px] h-5">
                            Username2345
                        </p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export { NavBar };
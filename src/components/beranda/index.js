'use client'
import Image from "next/image"
import cn from "classnames"
import moment from "moment"
import { useRouter } from "next/navigation"
import { useState } from "react"
const Beranda = ({ data, news }) => {
    const [bannerActiveIndex, setBannerActiveIndex] = useState(0)
    const router = useRouter()
    return (
        <div className="flex flex-col w-full pb-[5rem] justify-center">
            <div className="w-full carousel h-[47.5rem]">
                {data.banners.map((item, index) => {
                    return (
                        <div key={index} id={"banner" + index} className="carousel-item w-full relative">
                            <Image src={item.image} fill alt={"banner_" + index} quality={100} />
                            <Image src="/overlay.png" fill className="z-[2]" />
                        </div>
                    )
                })}

                <div className="w-full absolute mt-[27.313rem] z-[3] font-bold px-[6.25rem]">
                    <div className="text-white text-[3.75rem]">{data.banners[bannerActiveIndex].title}</div>
                    <div className="text-white w-text-headline-2 font-normal mt-[1.25rem]">{data.banners[bannerActiveIndex].text}</div>
                    <div className="flex flex-row gap-x-[1rem]">
                        {data.banners.map((item, index) => {
                            return (
                                <div key={index} className="mt-[3.5rem]">
                                    <a href={"#banner" + index} onClick={() => {
                                        setBannerActiveIndex(index)
                                    }}><img src={bannerActiveIndex == index ? "/icons/ic_indicator_active.svg" : "/icons/ic_indicator_default.svg"} /></a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="w-full px-[6.25rem] flex flex-col pb-[4.875rem] mt-[5rem]">
                <div className="w-text-display-2 text-sooty flex self-center mb-[3.125rem]">Layanan Serikat Karyawan WIKA Gedung</div>
                <div className="flex flex-row gap-x-[1.5rem] justify-center overflow-x-auto w-full">
                    {data.services.map((item, index) => {
                        return (
                            <div key={index} className="rounded-lg shadow-md flex flex-col bg-jet w-[24.813rem]">
                                <div className="relative w-[24.813rem] h-[18.188rem]">
                                    <Image src={item.image} fill alt={"image_layanan"} className="fill rounded-t-lg" quality={50} />
                                    <Image src="/overlay.png" fill className="rounded-lg z-[2]" />
                                </div>
                                <div className="w-text-headline-1 text-white mt-[2.5rem] mx-[2.5rem]">
                                    {item.title}
                                </div>
                                <div className="w-text-body-2 text-white mt-[1rem] mb-[2.875rem] mx-[2.5rem]">
                                    {item.text}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="flex flex-col bg-[#EFEFEF] pt-[5rem] pb-[3.875rem]">
                <div className="w-text-display-2 text-sooty flex self-center mb-[3.125rem]">Berita Terkini</div>
                <div className="flex flex-row justify-center px-[6.25rem] gap-x-[1.25rem]">
                    {news.map((item, index) => {
                        return (
                            <div onClick={() => {
                                router.push(process.env.NEXT_PUBLIC_BASE_URL_WIKA + "/news/" + item.news_alias)
                            }} key={index} className={cn("bg-jet z-[4] hover:cursor-pointer relative col-span-1 w-[25rem] h-[20rem] items-start rounded-lg")}                   >
                                <Image src={item.news_file_path} quality={50} fill className="rounded-lg z-[-2]" />
                                <Image src="/overlay.png" fill className="rounded-lg z-[-1]" />
                                <div className="absolute pt-[1.375rem] px-[1.5rem] pb-[2rem] bottom-0">
                                    <div className="flex flex-row gap-x-[0.875rem] items-center">
                                        <div className="w-text-body-1 text-white font-semibold">{item.news_place}</div>
                                        <div className="w-text-body-1 text-white">|</div>
                                        <div className="w-text-body-1 font-normal text-white">{moment(item.news_date).format("D MMMM YYYY")}</div>
                                    </div>
                                    <div className="mt-[0.75rem] w-text-title-1 font-semibold text-white">
                                        {item.news_title}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="self-center btn btn-outline btn-primary mt-[2.75rem] w-[10.75rem] px-0 capitalize" onClick={() => {
                    router.push("/berita")
                }}>{"Lihat Semua Berita"}</div>
            </div>
            <div className="grid grid-cols-2 gap-x-[6.563rem] pl-[9.375rem] pr-[8rem] pt-[5.313rem] pb-[5.75rem]">
                <iframe
                    width={"100%"}
                    height="325"
                    className="rounded-3xl"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowfullscreen
                    referrerpolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}&q=${data.kontak.maps.latitude},${data.kontak.maps.longitude}`}>
                </iframe>
                <div className="flex flex-col">
                    <div className="w-text-display-2 text-sooty">{data.kontak.title}</div>
                    <div className="mt-[1rem] w-text-title-1 font-normal text-dire_wolf">{data.kontak.text}</div>
                    <div className="grid grid-cols-2 mt-[1.5rem]">
                        <div className="w-text-title-1 font-medium text-dire_wolf">Email</div>
                        <div className="w-text-title-1 font-medium text-dire_wolf">Nomor Telepon</div>
                    </div>
                    <div className="grid grid-cols-2 mt-[1rem]">
                        <div className="w-text-title-1 font-normal text-dire_wolf">{data.kontak.email}</div>
                        <div className="w-text-title-1 font-normal text-dire_wolf">{data.kontak.telephone}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beranda
'use client'
import Image from "next/image"
import cn from "classnames"
import moment from "moment"
import { useRouter } from "next/navigation"
import { useState } from "react"
import useResponsive from "@/utils/media-query"
const Beranda = ({ data, news }) => {
    const [bannerActiveIndex, setBannerActiveIndex] = useState(0)
    const router = useRouter()
    const { isMobile } = useResponsive()
    return (
        <div className="flex flex-col w-full pb-[5rem] justify-center">
            <div className={cn(isMobile ? "h-[29.25rem]" : "h-[47.5rem]", "w-full carousel")}>
                {data.banners.map((item, index) => {
                    return (
                        <div key={index} id={"banner" + index} className="carousel-item w-full relative">
                            <Image src={item.image} fill alt={"banner_" + index} quality={100}
                                style={{ objectFit: "cover" }} />
                            <Image src="/overlay.png" fill className="z-[2]" />
                        </div>
                    )
                })}

                <div className={cn("w-full absolute z-[3] font-bold", isMobile ? "mt-[18.625rem] px-[1rem]" : "mt-[27.313rem] px-[6.25rem]")}>
                    <div className={cn("text-white", isMobile ? " text-[1.75rem]" : " text-[3.75rem]")}>{data.banners[bannerActiveIndex].title}</div>
                    <div className={cn("text-white font-normal", isMobile ? "mt-[0.75rem] w-text-body-1" : "w-text-headline-2 mt-[1.25rem]")}>{data.banners[bannerActiveIndex].text}</div>
                    <div className="flex flex-row gap-x-[1rem]">
                        {data.banners.map((item, index) => {
                            return (
                                <div key={index} className={cn(isMobile ? "mt-[1rem]" : "mt-[3.5rem]")}>
                                    <a href={"#banner" + index} onClick={() => {
                                        setBannerActiveIndex(index)
                                    }}><img src={bannerActiveIndex == index ? "/icons/ic_indicator_active.svg" : "/icons/ic_indicator_default.svg"} className={cn(isMobile ? "w-[0.875rem] h-[0.875rem]" : "")} /></a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className={cn("w-full flex flex-col", isMobile ? "py-[2.5rem] px-[1rem]" : "px-[6.25rem] pb-[4.875rem] mt-[5rem]")}>
                <div className={cn("text-sooty flex", isMobile ? "w-text-subhead-1 font-semibold mb-[1.5rem]" : "w-text-display-2 self-center mb-[3.125rem]")}>Layanan Serikat Karyawan WIKA Gedung</div>
                <div className={cn("flex flex-row overflow-x-auto w-full", isMobile ? "gap-x-[0.875rem]" : "justify-center gap-x-[1.5rem]")}>
                    {data.services.map((item, index) => {
                        return (
                            <div key={index} className={cn("rounded-lg shadow-md flex flex-col bg-jet", isMobile ? "w-[14.625rem]" : "w-[24.813rem]")}>
                                <div className={cn("relative", isMobile ? "w-[14.625rem] h-[10.813rem]" : "w-[24.813rem] h-[18.188rem]")}>
                                    <Image src={item.image} fill alt={"image_layanan"} className="fill rounded-t-lg" quality={50} style={{ objectFit: "cover" }} />
                                    <Image src="/overlay.png" fill className="rounded-lg z-[2]" />
                                </div>
                                <div className={cn(isMobile ? "w-text-subhead-1 font-semibold text-white mt-[1rem] mx-[1rem]" : "w-text-headline-1 text-white mt-[2.5rem] mx-[2.5rem]")}>
                                    {item.title}
                                </div>
                                <div className={cn(isMobile ? "w-text-body-1 text-white mt-[1rem] mx-[1rem] mb-[2rem]" : "w-text-body-2 text-white mt-[1rem] mb-[2.875rem] mx-[2.5rem]")}>
                                    {item.text}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={cn("flex flex-col bg-[#EFEFEF]", isMobile ? "py-[2.5rem]" : "pt-[5rem] pb-[3.875rem]")}>
                <div className={cn("text-sooty flex self-center", isMobile ? "w-text-subhead-1 font-semibold mb-[1.5rem]" : "w-text-display-2 mb-[3.125rem]")}>Berita Terkini</div>
                <div className={cn("flex flex-row w-full overflow-x-auto", isMobile ? "px-[1rem] gap-x-[0.875rem]" : "justify-center px-[6.25rem] gap-x-[1.25rem]")}>
                    {news.map((item, index) => {
                        return (
                            <div onClick={() => {
                                router.push(process.env.NEXT_PUBLIC_BASE_URL_WIKA + "/news/" + item.news_alias)
                            }} key={index} className={cn("bg-jet z-[4] hover:cursor-pointer relative items-start rounded-lg",
                                isMobile ? "min-w-[14.5rem] h-[18.75rem]" : "min-w-[25rem] h-[20rem]"
                            )}                   >
                                <Image src={item.news_file_path} quality={50} fill className="rounded-lg z-[-2]" style={{ objectFit: "cover" }} />
                                <Image src="/overlay.png" fill className="rounded-lg z-[-1]" />
                                <div className="absolute pt-[1.375rem] px-[1.5rem] pb-[2rem] bottom-0">
                                    <div className="flex flex-row gap-x-[0.875rem] items-center">
                                        <div className={cn("text-white font-semibold", isMobile ? "w-text-caption" : "w-text-body-1")}>{item.news_place}</div>
                                        <div className={cn("text-white", isMobile ? "w-text-caption" : "w-text-body-1")}>|</div>
                                        <div className={cn("font-normal text-white", isMobile ? "w-text-caption" : "w-text-body-1")}>{moment(item.news_date).format("D MMMM YYYY")}</div>
                                    </div>
                                    <div className={cn("font-semibold text-white", isMobile ? "mt-[0.875rem] line-clamp-3 w-text-body-1" : "mt-[0.75rem] w-text-title-1")}>
                                        {item.news_title}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={cn("self-center btn btn-outline btn-primary  w-[10.75rem] px-0 capitalize", isMobile ? "btn-sm mt-[1.5rem]" : "mt-[2.75rem]")} onClick={() => {
                    router.push("/berita")
                }}>{"Lihat Semua Berita"}</div>
            </div>
            <div className={cn(
                isMobile ? "py-[2.5rem] px-[1rem] flex flex-col" : "grid grid-cols-2 gap-x-[6.563rem] pl-[9.375rem] pr-[8rem] pt-[5.313rem] pb-[5.75rem]"
            )}>
                {isMobile && <div className="w-text-body-2 font-semibold text-sooty self-center mb-[2rem]">{"Informasi Alamat dan Kontak"}</div>}
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
                    {!isMobile && <>
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
                    </>}
                    {isMobile && <>
                        <div className="w-text-body-1 font-medium text-sooty mt-[2rem] mb-[0.5rem]">Email</div>
                        <div className="w-text-body-1 font-regular text-sooty mb-[0.5rem]">mail@mail.com</div>
                        <div className="w-text-body-1 font-medium text-sooty mb-[0.5rem]">Nomor Telepon</div>
                        <div className="w-text-body-1 font-regular text-sooty">021xxx</div>

                        <div className="flex gap-x-[0.625rem] mt-[2rem]">
                            <img src="/icons/facebook.svg" className="cursor-pointer" onClick={() => {
                                window.open(data.kontak.facebook, "_blank")
                            }} />
                            <img src="/icons/twitter.svg" className="cursor-pointer" onClick={() => {
                                window.open(data.kontak.twitter, "_blank")
                            }} />
                            <img src="/icons/instagram.svg" className="cursor-pointer" onClick={() => {
                                window.open(data.kontak.instagram, "_blank")
                            }} />
                        </div>
                    </>}
                </div>
            </div>
        </div>
    )
}

export default Beranda
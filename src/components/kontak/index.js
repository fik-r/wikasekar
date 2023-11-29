'use client'
import cn from "classnames"
import useResponsive from "@/utils/media-query"
const Kontak = ({ data }) => {
    const { isMobile } = useResponsive()
    return (
        <div className={cn("w-full flex flex-col pt-[2.5rem] px-[1rem]", isMobile ? "" : "pt-[5rem] pb-[11.938rem]")}>
            <div className={cn("self-center text-sooty", isMobile ? "w-text-body-2 font-semibold" : " w-text-display-2 ")}>
                Kontak
            </div>
            <div className={cn(
                isMobile ? "py-[2rem] flex flex-col" : "grid grid-cols-2 gap-x-[6.563rem] pl-[9.375rem] pr-[8rem] pt-[5.313rem] pb-[5.75rem]"
            )}>
                <iframe
                    width={"100%"}
                    height="325"
                    style={{ border: 0 }}
                    loading="lazy"
                    className="rounded-3xl"
                    allowfullscreen
                    referrerpolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}&q=${data.maps.latitude},${data.maps.longitude}`}>
                </iframe>
                <div className="flex flex-col">
                    {!isMobile &&
                        <>
                            <div className="w-text-title-1 font-normal text-dire_wolf">{data.text}</div>
                            <div className="grid grid-cols-2 mt-[1.5rem]">
                                <div className="w-text-title-1 font-medium text-dire_wolf">Email</div>
                            </div>
                            <div className="grid grid-cols-2 mt-[1rem]">
                                <div className="w-text-title-1 font-normal text-dire_wolf">{data.email}</div>
                            </div>
                            <div className="grid grid-cols-2 mt-[2.5rem]">
                                <div className="w-text-title-1 font-medium text-dire_wolf">Nomor Telepon</div>
                            </div>
                            <div className="grid grid-cols-2 mt-[1rem]">
                                <div className="w-text-title-1 font-normal text-dire_wolf">{data.telephone}</div>
                            </div>
                        </>
                    }
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

export default Kontak;
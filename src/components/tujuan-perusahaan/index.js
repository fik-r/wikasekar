'use client'
import cn from "classnames"
import Image from "next/image"
import useResponsive from "@/utils/media-query"
const TujuanPerusahaan = ({ data }) => {
    const { isMobile } = useResponsive()
    return (
        <div className={cn("w-full flex flex-col", isMobile ? "py-[2.5rem] px-[1rem] h-screen" : "pt-[5rem] pb-[11.938rem] px-[6.25rem]")}>
            <div className={cn("self-center text-sooty", isMobile ? "w-text-subhead-1 font-semibold" : "w-text-display-2")}>
                Tujuan Perusahaan
            </div>
            <div className={cn(isMobile ? "flex flex-col mt-[1rem]" : "grid grid-cols-2 mt-[5rem] gap-x-[3.75rem]")}>
                <div className={cn("w-full rounded-lg relative", isMobile ? "h-[14.25rem]" : "h-[26.938rem] order-last")}>
                    <Image className="rounded-lg" fill src={data.tujuan_perusahaan.image} alt={"img_tujuan_perusahaan"} style={{ objectFit: "cover" }} />
                    <Image src="/overlay.png" fill className="rounded-lg z-[2]" />
                </div>
                <div className={cn("flex flex-col ", isMobile ? "mt-[1rem] gap-y-[0.5rem]" : "gap-y-[1.5rem]")}>
                    <div className={cn("text-sooty", isMobile ? "w-text-body-1 font-semibold" : "w-text-headline-1")}>
                        {data.tujuan_perusahaan.title}
                    </div>
                    <div className={cn(isMobile ? "w-text-body-1 text-jet" : "w-text-title-1 text-jet font-normal leading-[2.5rem]")}>
                        {data.tujuan_perusahaan.text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TujuanPerusahaan;
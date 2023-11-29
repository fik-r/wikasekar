'use client'
import cn from "classnames"
import useResponsive from "@/utils/media-query"
const VisiMisi = ({ data }) => {
    const { isMobile } = useResponsive()
    return (
        <div className={cn("w-full flex flex-col", isMobile ? "py-[2.5rem] px-[1rem] h-screen" : "pt-[5rem] pb-[11.938rem] px-[6.25rem]")}>
            <div className={cn(isMobile ? "self-center w-text-subhead-1 font-semibold mb-[1rem]" : "self-center w-text-display-2 text-sooty mb-[3.75rem]")}>
                Visi dan Misi
            </div>
            <div className={cn(isMobile ? "w-text-body-1 text-sooty font-semibold" : "w-text-headline-1 text-sooty mb-[1.5rem]")}>
                Visi
            </div>
            <div className={cn(isMobile ? "w-text-body-1 text-jet font-medium" : "w-text-headline-1 font-medium text-jet")}>
                {data.visi}
            </div>
            <div className={cn(isMobile ? "w-text-body-1 text-sooty font-semibold mt-[2rem]" : "w-text-headline-1 text-sooty mb-[1.5rem] mt-[3.125rem]")}>
                Misi
            </div>
            <ol className="list-decimal ml-[1.5rem]">
                {data.misi.map((item, index) => {
                    return (
                        <li key={index} className={cn(isMobile ? "w-text-body-1 font-normal text-jet" : "w-text-headline-1 font-normal text-jet")}>{item.text}</li>
                    )
                })}
            </ol>

        </div>
    )
}

export default VisiMisi
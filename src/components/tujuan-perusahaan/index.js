'use client'
import cn from "classnames"
import Image from "next/image"
const TujuanPerusahaan = ({ data }) => {
    return (
        <div className="w-full flex flex-col pt-[5rem] pb-[11.938rem] px-[6.25rem]">
            <div className="self-center w-text-display-2 text-sooty">
                Tujuan Perusahaan
            </div>
            <div className="grid grid-cols-2 mt-[5rem] gap-x-[3.75rem]">
                <div className="h-[26.938rem] w-full rounded-lg relative order-last">
                    <Image className="rounded-lg" fill src={data.tujuan_perusahaan.image} alt={"img_tujuan_perusahaan"} />
                    <Image src="/overlay.png" fill className="rounded-lg z-[2]" />
                </div>
                <div className="flex flex-col gap-y-[1.5rem]">
                    <div className="text-sooty w-text-headline-1">
                        {data.tujuan_perusahaan.title}
                    </div>
                    <div className="w-text-title-1 text-jet font-normal leading-[2.5rem]">
                        {data.tujuan_perusahaan.text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TujuanPerusahaan;
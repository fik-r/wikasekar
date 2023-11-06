'use client'
import cn from "classnames"
import Image from "next/image"
const ProfilPerusahaan = ({ data }) => {
    return (
        <div className="w-full flex flex-col pt-[5rem] pb-[11.938rem] px-[6.25rem]">
            <div className="self-center w-text-display-2 text-sooty">
                Profil Perusahaan
            </div>
            <div className="grid grid-cols-2 mt-[5rem] gap-x-[3.75rem]">
                <div className="h-[26.938rem] w-full rounded-lg relative">
                    <Image className="rounded-lg" fill src={data.profil.image} alt={"img_profile_perusahaan"} />
                    <Image src="/overlay.png" fill className="rounded-lg z-[2]" />
                </div>
                <div className="flex flex-col gap-y-[1.5rem]">
                    <div className="text-sooty w-text-headline-1">
                        {data.profil.title}
                    </div>
                    <div className="w-text-title-1 text-jet font-normal leading-[2.5rem]">
                        {data.profil.text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilPerusahaan;
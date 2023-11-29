import { useRouter } from "next/navigation"
import Image from "next/image"
const News = ({ location, date, thumbnail, description, alias }) => {
    const router = useRouter()

    return (
        <div onClick={() => {
            router.push(process.env.NEXT_PUBLIC_BASE_URL_WIKA + "/news/" + alias)
        }} className="rounded-xl shadow-md zoom flex flex-col items-center gap-x-[1.5rem] hover:cursor-pointer w-full h-[24.875rem]">
            <div className="rounded-t-lg w-full h-[14.938rem] max-h-[14.938rem] relative">
                <Image
                    quality={50} placeholder="blur"
                    blurDataURL={thumbnail}
                    src={thumbnail} fill className="rounded-t-lg" sizes="(min-width: 280px)" style={{ objectFit: "cover"}}/>
                <Image src="/overlay.png" fill className="rounded-lg z-[2]" />
            </div>
            <div className="p-[1.5rem]">
                <div className="flex flex-row gap-x-[0.875rem] items-center">
                    <div className="w-text-caption text-jet font-semibold">{location}</div>
                    <div className="w-text-subhead-1 text-aria">|</div>
                    <div className="w-text-caption font-normal text-hard_coal">{date}</div>
                </div>
                <div className="mt-[0.875rem] w-text-body-1 font-semibold text-sooty">
                    {description}
                </div>
            </div>

        </div>
    )
}

export default News
'use client'
import cn from "classnames"

const VisiMisi = ({ data }) => {
    return (
        <div className="w-full flex flex-col pt-[5rem] pb-[11.938rem] px-[6.25rem]">
            <div className="self-center w-text-display-2 text-sooty">
                Visi dan Misi
            </div>
            <div className="w-text-headline-1 text-sooty mb-[1.5rem]">
                Visi
            </div>
            <div className="w-text-headline-1 font-medium text-jet">
                {data.visi}
            </div>
            <div className="w-text-headline-1 text-sooty mb-[1.5rem] mt-[3.125rem]">
                Misi
            </div>
            <ol className="list-decimal ml-[1.5rem]">
                {data.misi.map((item, index) => {
                    return (
                        <li key={index} className="w-text-headline-1 font-normal text-jet">{item.text}</li>
                    )
                })}
            </ol>

        </div>
    )
}

export default VisiMisi
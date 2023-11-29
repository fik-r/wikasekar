'use client'
import useResponsive from "@/utils/media-query"
import cn from "classnames"
export default function Footer(props) {
    const { isMobile } = useResponsive()
    return (
        <>
            <hr />
            <div className={cn(isMobile ? "justify-center items-center flex flex-col pt-[1.875rem] pb-[1.313rem] px-[0.875rem]" : "flex flex-row justify-between items-center px-[6.25rem] py-[2.75rem]")}>
                <img src="/icons/ic_logo.svg" className={cn(isMobile ? "w-[8.125rem] h-[1.188rem]" : "")} />
                <div className={cn(isMobile ? "w-text-caption" : "")}>© 2023 WIKA Gedung. All Rights Reserved. </div>
            </div>
        </>
    )
}
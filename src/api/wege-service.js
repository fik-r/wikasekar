import API from "@/utils/api"

const getLatestNews = (limit) => {
    return API("/api/getLatestNews", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: limit ? `limit=${limit}` : ""
    })
}

const getSekarBeranda = () => {
    return API("/api/getSekarBeranda")
}

const getSekarTentangKami = () => {
    return API("/api/getSekarTentangKami")
}

const getSekarKontak = () => {
    return API("/api/getSekarKontak")
}

export {
    getLatestNews,
    getSekarBeranda,
    getSekarKontak,
    getSekarTentangKami
}
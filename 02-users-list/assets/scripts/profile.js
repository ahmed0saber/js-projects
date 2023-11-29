const getUrlParam = (param) => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)

    return urlParams.get(param)
}

const getCurrentUser = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()

    return data
}

const displayUser = (user) => {
    document.querySelector(".user-name").textContent = user.name
    document.querySelector(".user-email").textContent = user.email
    document.querySelector(".user-phone").textContent = user.phone
    document.querySelector(".user-website").textContent = user.website
    document.querySelector(".user-details-wrapper").classList.remove("d-none")
}

const initProfilePage = async () => {
    const userId = getUrlParam("id")
    const user = await getCurrentUser(userId)

    document.querySelector(".loading-spinner-wrapper").classList.add("d-none")

    if (Object.keys(user).length === 0) {
        document.querySelector(".not-found").classList.remove("d-none")
        return
    }

    displayUser(user)
}
initProfilePage()

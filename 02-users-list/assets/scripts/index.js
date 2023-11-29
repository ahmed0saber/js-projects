const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = res.json()

    return data
}

const displayUsers = (users) => {
    const usersHtmlContent = users.map(user => (
        `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${user.name}</h5>
                        <p class="card-text">${user.email}</p>
                        <a href="./profile/?id=${user.id}" class="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        `
    )).join("")

    document.querySelector(".users-container").innerHTML = usersHtmlContent
}

const initHomePage = async () => {
    const users = await getUsers()
    displayUsers(users)
}
initHomePage()

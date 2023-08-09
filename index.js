
function submitData (username, email) {

    const user = {
        name: username,
        email: email,
    }

    return fetch ('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then (response => response.json())
    .then (objectData => {
        document.body.innerHTML = `<h1>${objectData.id}</h1>`
    })
    .catch (error => document.body.innerHTML = `<h1>${error.message}</h1>`)
}
    
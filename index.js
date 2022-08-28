// Add your code here
function submitData(username, useremail){
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body:JSON.stringify({name:username, email: useremail})
    })
    .then(response => response.json())
    .then(data => {
        const id = data.id;
        document.querySelector("body").innerHTML = `${id}`
    })
    .catch(error =>document.querySelector("body").innerHTML = error.message )
}
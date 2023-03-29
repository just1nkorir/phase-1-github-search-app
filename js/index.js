let userName
let input = document.querySelector('#github-form')
input.addEventListener('submit', (e) => {
    e.preventDefault()
    userName = e.target.search.value
    fetch(`https://api.github.com/search/users?q=${userName}`)
    .then(res => res.json())
    .then(res => listUserNames(res))

    input.reset()
})



function listUserNames(data) {
   showAccount(data.items)
    }

function showAccount(info) {
    const userlist = document.querySelector('#user-list')
    const us_li = document.createElement('li')
    us_li.innerHTML = `<div class ='userdata'>
                          <img src = ${info.avatar_url}">
                          <h2>${info.login}</h2>
                          <link href='${info.url}'>
                       </div>
                    `
    userlist.appendChild(us_li)
    document.querySelector('.userdata').addEventListener('click', displayRepoPage)
}

function displayRepoPage(){
    fetch('${info.repos_url}')
    .then(res => res.json())
    .then(res => getRepoList(res))
}

function getRepoList(data){
    const repolist = document.querySelector('#repos-list')
    const re_li = document.createElement('li')
    data.foreach(items => {
        re_li.innerText = `${items.name}`
    })
    repolist.appendChild(re_li)
}
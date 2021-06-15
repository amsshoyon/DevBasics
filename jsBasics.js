// CallBacks
const getUser = cb => {
    setTimeout(() => {
      cb({ name: 'Max' })
    }, 2000)
}

getUser(user => {
    console.log(user.name) // Prints 'Max' after 2 seconds
})

// Promise
const getUser = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ name: 'Max' })
      }, 2000)
    })
}
getUser().then(user => {
    console.log(user.name)
})

// Promise: catch errors
checkAuth()
    .then(authStatus => {
        return getUser(authStatus) // returns a new promise which may use the authStatus we fetched
    })
    .then(user => {
        console.log(user.name) // prints the user name
    })
    .catch(error => {
        // handle error here
    })

// Rx observable
const button = document.querySelector('button')
const observable = Rx.Observable.fromEvent(button, 'click')
observable.subscribe(event => {
  console.log(event.target)
})
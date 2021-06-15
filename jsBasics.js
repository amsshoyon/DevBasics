// ============================
// CallBacks ******************
// ============================
const getUser = cb => {
    setTimeout(() => {
      cb({ name: 'Max' })
    }, 2000)
}

getUser(user => {
    console.log(user.name) // Prints 'Max' after 2 seconds
})

// ============================
// Promise ********************
// ============================
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
    });

// or
fetch('some-url.com/some-data')
	.then(response => {
		return response.json();
	})
	.then(data => {
		console.log(data);
	})
	.catch(err => {
		console.log('An error!');
		console.log(err);
	});

// Promise.all
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // [3, 1337, "foo"]
});

// ============================
// Rx observable **************
// ============================
const button = document.querySelector('button')
const observable = Rx.Observable.fromEvent(button, 'click')
observable.subscribe(event => {
  console.log(event.target)
})
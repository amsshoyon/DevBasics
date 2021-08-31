## React Basics

```
** Class Component Lifecircle

```

### Class Component Lifecircle
The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.

```
constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
}
```

### componentDidMount()
componentDidMount() is invoked immediately after a component is mounted.
This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount().

---
### componentDidUpdate()
componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
```
componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.userID !== prevProps.userID) {
        this.fetchData(this.props.userID);
  }
}
```
---
* componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false. 

### componentWillUnmount()
componentWillUnmount() is invoked immediately before a component is unmounted and destroyed.

* componentWillUnmount() is invoked immediately before a component is unmounted and destroyed.

---
# Hooks API Reference

- useState - provide a state value and call back function used to
  update the state.


    const [name, value] = useState("Enter a name...");

- useEffect - the callback used to create the async calls to the jsonplaceholder API. It implements the componentDidMount and componentDidUpdate lifecycle methods.

  useEffect(() => { callBack(value) }, [name])

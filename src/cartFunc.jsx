const [cartList, setCartList] = useState(cartLocalStorage)

useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList))
  }, [cartList])
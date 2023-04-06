#Hooks
  useRef - The useRef is a hook that allows to directly create a reference to the DOM element in the functional component
  HOC - A higher-order component is a function that takes a component and returns a new component
  1- useEffect(()=>{

  }) - Every Thing is inside of this Arror function is going to be excuted every single time the Application Re- renders 
  2 -useEffect(()=>{

  },[method])-> depandence Array, 2nd parameter) -What ever values inside in this Array going to be excecuted not the others
  3 - useEffect(()=>{

  }, []) -> unMounted
  useEffect -> UseEffect is an hook That we are dynamically telling React Its need to perform after the component is renders React will remember the value that you passed in Dependence array and call it later 
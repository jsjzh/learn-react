const app = document.getElementById("app");

// ---------------------------「userEffect 陷阱」---------------------------

const App: React.FC = () => {
  const [count, setCount] = React.useState(0);

  const handleResize = () => {
    console.log(`count is ${count}`);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
    </div>
  );
};

// ---------------------------「Provider Consumer」---------------------------

// const { Provider, Consumer } = React.createContext(1);
// const ProviderComp = (props) => <Provider value={2}>{props.children}</Provider>;
// const ConsumerComp = () => <Consumer>{(value) => <p>{value}</p>}</Consumer>;

// const App: React.FC = () => {
//   const ref = React.useRef();

//   return (
//     <div ref={ref}>
//       <ConsumerComp />
//     </div>
//   );
// };

// ---------------------------------------------------------------------------------

ReactDOM.render(<App />, app);

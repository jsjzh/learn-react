const app = document.getElementById("app");

const { Provider, Consumer } = React.createContext(1);

const ProviderComp = (props) => <Provider value={2}>{props.children}</Provider>;

const ConsumerComp = () => <Consumer>{(value) => <p>{value}</p>}</Consumer>;

const App: React.FC = () => {
  const ref = React.useRef();

  setTimeout(() => {
    console.log(ref.current);
  }, 0);

  return (
    <div ref={ref}>
      <ConsumerComp />
    </div>
  );
};

const element = React.createElement("div", {}, "Hello World");

ReactDOM.render(element, app);
// ReactDOM.render(<App />, app);

import { useState } from "react";
import "./App.css";
import routes from "./routes/routes";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
    // const [count, setCount] = useState(0);

    return (
        // <div className="App">
        <Provider store={store}>
            <RouterProvider router={routes} />
        </Provider>
        // </div>
    );
}

export default App;

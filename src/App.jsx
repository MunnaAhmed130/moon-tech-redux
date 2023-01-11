import { useState } from "react";
import "./App.css";
import routes from "./routes/routes";
import { RouterProvider } from "react-router";

function App() {
    // const [count, setCount] = useState(0);

    return (
        // <div className="App">
        <RouterProvider router={routes} />
        // </div>
    );
}

export default App;

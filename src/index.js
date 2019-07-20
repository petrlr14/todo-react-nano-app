import React from "react";
import ReactDOM from "react-dom";
import "./css/tailwind.css";
import App from "./components/App/index";
import "./config/init-firebase";
import Firebase, {FirebaseContext} from "./components/Firebase";

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App/>
    </FirebaseContext.Provider> , document.getElementById("root"));
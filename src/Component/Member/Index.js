import Login from "./Login";
import Register from "./Register";
import { useState } from "react";

function Index() {

    return (
        <div className="row">
                <div className="col-sm-4 col-sm-offset-1">
                <Login />
                </div>
                <div className="col-sm-1">
                <h2 className="or">OR</h2>
                </div>
                <div className="col-sm-4">
                <Register />
                </div>
            </div>
    )
}
export default Index;
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes";
import { AuthWrapper } from "./context/auth.context";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthWrapper>
          <AllRoutes />
        </AuthWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;

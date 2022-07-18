import TheLayout from "./views/pages/TheLayout";

import { useState } from "react";
function App() {
  const [state, setState] = useState();
  return (
    <div>
      <TheLayout />
    </div>
  );
}

export default App;

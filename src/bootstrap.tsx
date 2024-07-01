import { createRoot } from "react-dom/client";
import * as React from 'react'

import App from "./App";

const title = "Building Scalable and Modular Web Applications with React, Micro Frontend and Webpack Module Federation";

const container = document.getElementById('app');
const root = createRoot(container as any);

root.render(<App title={title} />);
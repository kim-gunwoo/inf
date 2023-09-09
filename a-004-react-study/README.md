# react study

> 리액트 doc : https://react-ko.dev/learn

### reference

https://github.com/performance-lecture/lecture-1.git

### 001-lecture

```sh
# NPM
npm install --save-dev cra-bundle-analyzer

# Yarn
yarn add -D cra-bundle-analyzer

# Usage
npx cra-bundle-analyzer
```

#### code splitting

> https://legacy.reactjs.org/docs/code-splitting.html
>
> https://webpack.js.org/guides/code-splitting/

##### route base code splitting

```js
# Suspense, lazy
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  </Router>
);
```

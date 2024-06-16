import {
  Route
  , createBrowserRouter
  , createRoutesFromElements
  , RouterProvider
} from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './pages/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage ,{jobLoader}from './pages/JobPage';
const router= createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/jobs' element={<JobsPage/>}/>
    <Route path='/jobs/:id' element={<JobPage/>} loader={jobLoader}/>
    <Route path='*' element={<NotFoundPage/>}/>
  </Route>
)
);
const routerService= createBrowserRouter(
  createRoutesFromElements(<Route path='/service' element={<h2>Hello this me</h2>}/>)
);
const App = () => {
  return <RouterProvider router={router}/>;
  // return <RouterProvider router={routerService}/>;
}

export default App
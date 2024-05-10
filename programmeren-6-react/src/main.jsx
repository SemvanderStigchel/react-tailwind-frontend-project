import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Notes from "./Notes.jsx"
import Create from "./Create.jsx";
import Detail from "./Detail.jsx";
import Edit from "./Edit.jsx";
import Delete from "./Delete.jsx";
import Home from "./Home.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/notes",
                element: <Notes/>
            },
            {
                path: "/notes/create",
                element: <Create/>
            },
            {
                path: "/notes/details/:id",
                element: <Detail/>
            },
            {
                path: "/notes/edit/:id",
                element: <Edit/>
            },
            {
                path: "/notes/delete/:id",
                element: <Delete/>
            },
            {
                path: "/",
                element: <Home/>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)

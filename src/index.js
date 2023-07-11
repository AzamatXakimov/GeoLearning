import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <BrowserRouter>
        <DragDropContext>
            <App/>
        </DragDropContext>
    </BrowserRouter>
    // </React.StrictMode>
);


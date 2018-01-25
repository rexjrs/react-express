import React from 'react'
import { renderToString } from 'react-dom/server'
import template from '../views/template';
import Home from '../views/Home';

export default class HomeController {
    static index({ req, res }) {
        const isMobile = false;
        const initialState = { isMobile };
        const appString = renderToString(<Home {...initialState} />);
        res.send(template({
            body: appString,
            title: 'Hello World from the server',
            initialState: JSON.stringify(initialState)
        }));
    }
}
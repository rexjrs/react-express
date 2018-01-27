import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../app'
import template from '../views/template'

export default class HomeController {
    static portPages({ req, res, title }) {
        const initialState = { path: req.path, params: req.params };
        const appString = renderToString(<App {...initialState} />)
        console.log(appString)
        res.send(template({
            body: appString,
            title: `Thomas Charlesworth - ${title}`,
            initialState: JSON.stringify(initialState)
        }))
    }
}

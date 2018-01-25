import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../app'
import template from '../views/template'

export default class HomeController {
    static index({ req, res }) {
        const initialState = { path: req.path, params: req.params };
        const appString = renderToString(<App {...initialState} />)
        res.send(template({
            body: appString,
            title: 'Thomas Charlesworth - About',
            initialState: JSON.stringify(initialState)
        }))
    }
}

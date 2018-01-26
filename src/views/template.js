import { assetsUrl } from '../config/constants'
export default ({ body, title, initialState }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <title>${title}</title>
        <link href="https://fonts.googleapis.com/css?family=Raleway:300" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="${assetsUrl}app.css">
      </head>
      
      <body>
        <div id="root">${body}</div>
      </body>
      <script src="${assetsUrl}bundle.js"></script>
    </html>
  `;
};

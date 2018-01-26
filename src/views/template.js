import { assetsUrl } from '../config/constants'
export default ({ body, title, initialState }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <title>${title}</title>
        <link rel="stylesheet" type="text/css" href="${assetsUrl}app.css">
      </head>
      
      <body>
        <div id="root">${body}</div>
      </body>
      <script src="${assetsUrl}bundle.js"></script>
    </html>
  `;
};

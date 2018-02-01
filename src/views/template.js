import { assetsUrl } from '../config/constants'
export default ({ body, title, initialState }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <title>${title}</title>
        <style>
          @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 300;
            src: local('Raleway Light'), local('Raleway-Light'), url(https://fonts.gstatic.com/s/raleway/v12/ZKwULyCG95tk6mOqHQfRBAsYbbCjybiHxArTLjt7FRU.woff2) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 300;
            src: local('Raleway Light'), local('Raleway-Light'), url(https://fonts.gstatic.com/s/raleway/v12/-_Ctzj9b56b8RgXW8FAriQzyDMXhdD8sAj6OAJTFsBI.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215;
          }
          html{
            font-family: 'Raleway', sans-serif;
          }
          body{
            font-family: 'Raleway', sans-serif;
            margin: 0px;
          }
        </style>
      </head>
      <body>
        <div id="root">${body}</div>
      </body>
      <script src="${assetsUrl}bundle.js"></script>
    </html>
  `;
};

import HomeController from './controllers/HomeController'

const routes = ({ app }) => {
    app.get('/', (req, res) => HomeController.index({ req, res }))
}

export default routes
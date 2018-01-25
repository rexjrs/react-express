import HomeController from './controllers/HomeController'

const router = ({ server }) => {
    server.get('/', (req, res) => HomeController.index({ req, res }))
}

export default router

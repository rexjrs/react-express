import HomeController from './controllers/HomeController'

const router = ({ server }) => {
    server.get('/', (req, res) => HomeController.portPages({ req, res, title: 'About' }))
    server.get('/technologies', (req, res) => HomeController.portPages({ req, res, title: 'Technologies' }))
    server.get('/portfolio', (req, res) => HomeController.portPages({ req, res, title: 'Portfolio' }))
    server.get('/contact', (req, res) => HomeController.portPages({ req, res, title: 'Contact' }))
}

export default router

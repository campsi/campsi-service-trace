module.exports = {
    port: 3000,
    host: 'http://localhost:3000',
    campsi: {
        title: 'Test Arezzo',
        version: '1.0.0',
        description: 'API de test avec les pizzas Arezzo !',
        base_url: 'http://localhost:3000',
        mongo: {
            'host': 'localhost',
            'port': 27017,
            'database': 'relationships'
        },
        license: {
            name: 'MIT',
            url: 'https://opensource.org/licenses/mit-license.php'
        },
        contact: {
            name: 'Christophe Braud',
            email: 'christophe@agilitation.fr',
            url: 'http://agilitation.fr'
        }
    },
    services: {
        trace: {
            title: 'Trace/Debug',
            description: 'Trace your calls',
        },
    }
};

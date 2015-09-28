var meliCommands = {
    'search': function(item){
        return this.setValue('@searchBar', item)
            .click('@submitButton')
            .waitForElementPresent('@breadcrumbItem', 5000);
    }
};

module.exports = {
    'commands': [meliCommands],
    'url': 'http://www.mercadolibre.com.ar',
    'elements': {
        'searchBar': '#query',
        'submitButton': '.ml-search-btn',
        'breadcrumbItem': '.breadcrumb h1'
    }
};

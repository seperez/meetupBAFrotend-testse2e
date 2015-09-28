module.exports = {
    'search for an item': function(client) {
        var meli = client.page.meli();

        meli.navigate()
            .assert.title('MercadoLibre Argentina')
            .assert.visible('@searchBar')
            .search('ipod')
            .assert.containsText('@breadcrumbItem', 'ipod')

        client.end();
    }
};

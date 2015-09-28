module.exports = {
    'search for an item': function (browser) {
        browser
            .url('http://www.mercadolibre.com.ar')
            .waitForElementVisible('body', 5000)
            .setValue('#query', 'ipod')
            .waitForElementVisible('.ml-search-btn', 5000)
            .click('.ml-search-btn')
            .waitForElementPresent('.breadcrumb h1', 5000)
            .assert.containsText('.breadcrumb h1', 'ipod')
            .end();
    },
}

describe('angular weather ', function() {
  beforeEach(function () {
    browser.get('http://localhost:9000');
  })

  it('should have 3 tabs and active Home tab', function() {
    var tabs = element.all(by.css('ul.nav li')).count();
    expect(tabs).toBe(3);
    expect(element(by.className('active')).getText()).toEqual('Home');
  });

  it('should have 2 languages and 2 units in Home tab', function () {
    expect(element.all(by.model('search.lang')).$$('option').count()).toBe(2);
    expect(element.all(by.model('search.units')).$$('option').count()).toBe(2);
  });

  it('should default select Language: English, Units: Imperial', function() {
    var language = element(by.id('lang')).$('option:checked').getText();
    expect(language).toEqual('English');
    var unit = element(by.model('search.units')).$('option:checked').getText();
    expect(unit).toMatch(/^Imperial.*$/);
  });

  describe('autocomplete city of wu', function () {
    var items = element(by.className('pac-container'));
    var cityEle = element(by.model('search.city_hidden'));

    it('should have none item in pac-container', function () {
      expect(items.$$('.pac-item').count()).toBe(0);
    });

    it('should have some items in pac-container', function () {
      cityEle.sendKeys('wu');
      browser.driver.wait(function () {
        return items.isDisplayed();
      }, 2000, 'nothing here');

      expect(items.$$('.pac-item').count()).toBeGreaterThan(0);

      // first item
      var first = items.$$('.pac-item').get(0);
      var city = first.getText();
      first.click();
      expect(element(by.id('city')).getAttribute('value')).toEqual(city);

    });
  });
});

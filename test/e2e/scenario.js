describe('angular weather ', function () {
  beforeEach(function () {
    browser.get('http://localhost:9000');
  })

  it('should have 3 tabs and active Home tab', function () {
    var tabs = element.all(by.css('ul.nav li')).count();
    expect(tabs).toBe(3);
    expect(element(by.className('active')).getText()).toEqual('Home');
  });

  it('should have 2 languages and 2 units in Home tab', function () {
    expect(element.all(by.model('search.lang')).$$('option').count()).toBe(2);
    expect(element.all(by.model('search.units')).$$('option').count()).toBe(2);
  });

  it('should default select Language: English, Units: Imperial', function () {
    var language = element(by.id('lang')).$('option:checked').getText();
    expect(language).toEqual('English');
    var unit = element(by.model('search.units')).$('option:checked').getText();
    expect(unit).toMatch(/^Imperial.*$/);
  });

  describe('autocomplete city of wu', function () {
    var items = element(by.className('pac-container'));

    it('should have none item in pac-container', function () {
      expect(items.$$('.pac-item').count()).toBe(0);
    });

    it('should have some items in pac-container', function () {
      var searchBtn = element(by.buttonText('Search'));
      var cityEle = element(by.model('search.city_hidden'));

      // search button is disabled
      expect(searchBtn.getAttribute('disabled')).toBe('true');

      // send city
      cityEle.sendKeys('wu');
      browser.driver.wait(function () {
        return items.isDisplayed();
      }, 2000, 'nothing here');

      // no results listed
      expect(items.$$('.pac-item').count()).toBeGreaterThan(0);

      // select first item
      var first = items.$$('.pac-item').get(0);
      var city = first.getText();
      first.click();


      /*
       replace method
       replace all comma and white space
       */
      var replacer = function (str) {
        return str.replace(',', '').replace(' ', '');
      }
      // city name equals to the first item after replacer invoked
      expect(element(by.id('city')).getAttribute('value').then(replacer))
        .toEqual(city.then(replacer));

      //browser.pause();
      // search button is enabled
      browser.driver.wait(function () {
        return searchBtn.isEnabled();
      });

      //  click search button
      searchBtn.click();

      browser.driver.wait(function () {
        return element(by.id('weekDiv')).isDisplayed();
      });

      expect(element.all(by.css('#weekDiv .list-group-item')).count()).toBe(7);

      // click first item
      element.all(by.css('#weekDiv .list-group-item')).get(0).click();

      expect(element(by.id('weekDiv')).isDisplayed()).toBe(false);
      expect(element(by.id('dayDiv')).isDisplayed()).toBe(true);

      // back to week div
      element(by.className('glyphicon-circle-arrow-left')).click();

      expect(element(by.id('weekDiv')).isDisplayed()).toBe(true);
      expect(element(by.id('dayDiv')).isDisplayed()).toBe(false);

      // input an unexist city name , can't click searchBtn
      cityEle.clear();
      cityEle.sendKeys('~!@#$%');
      browser.driver.wait(function () {
        return items.isDisplayed();
      }, 2000, 'nothing here');

      //browser.pause();

      expect(items.isDisplayed()).toBe(false);
    });
  });

  it('should nav to about tab', function() {
    element.all(by.css('ul.nav li')).get(1).click();
    expect(element(by.className('active')).getText()).toEqual('About');
  });
});

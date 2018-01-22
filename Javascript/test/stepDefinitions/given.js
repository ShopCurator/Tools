
import { defineSupportCode } from 'cucumber';
import loginPage from '../pageobjects/loginPage';
var XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;

defineSupportCode(function ({ Scenario, Given, When, Then }) {


  Given(/^I am on the admin page$/, function () {
    browser.url("");
    // browser.pause(4000);
    console.log("bowser pause +1 ");


    var Product = function () {
      var Name;
      var Price;

      var Brand;

      Object.defineProperty(this, "name", {
        get: function () {
          return Name;
        }

      })

      Object.defineProperty(this, "brand", {
        get: function () {
          return Brand;
        }
      })

      Object.defineProperty(this, "price", {
        get: function () {
          return Price;
        }
      })
    }
    // browser.windowHandleSize({width: 1000, height: 1000});
    // // browser.url("https://www.binglee.com.au/tech/tv-video/led-lcd-tvs");
    // let button = $$('//div[@class=\'load-more-pager\']/a[@class=\'btn btn-blue\']');
    // var elem = $('//div[@class=\'load-more-pager\']/a[@class=\'btn btn-blue\']');
    // //browser.pause(5000);
    // //elem.scroll(100,100);
    // browser.scroll(0,7000);
    // browser.pause(5000);
    // // browser.scroll(0, 500);
    // // button.click();
    // button.forEach(function (link) {
    //   link.click();
    //   browser.pause(5000);
    //   });

    //    browser.url("https://www.officeworks.com.au/shop/officeworks/c/technology/audio/bluetooth-speakers");
    //   let button = $$('//ul[@class=\'pagination ow-pagination\']//li');

    //   browser.scroll(0,2800);
    //   console.log(button.length);
    //   browser.pause(5000);
    //  for (var k = 3 ; k < button.length - 1; k++){                    
    //                       // let paginationa = paginationChecklinks[k].getText('a');
    //                       console.log(button[k]);

    //                       browser.element(button[k]).click();
    //                       // console.log(paginationa + " ::: ::: "+ k);
    //                       // browser.pause(5000);
    //                       // break;
    //                     }
    //   console.log(button.length);
    //     browser.pause(5000);
    //   //   });
    //   console.log(button.length);
    //   // browser.scroll(0, 500);
    //   // button.click();

    let links = [];
    var dict = [];
    
    
    technologyLinks();
    getProductDetails();
    sendData();
    function technologyLinks() {
      let allInputs = $$('//li[@id=\'categoryChild-17562\']//li//li/a');
      for (var i = 0; i < allInputs.length; i++) {
        let contains = allInputs[i].getAttribute('href');
        links.push(contains);
        // console.log(contains);
      }
    }
    function getProductDetails() {
      links.forEach(function (link) {
        browser.url(link);
        let listSize = $$('//label[@for=\'page-size-100\']');
        if (listSize.length != 0) {
          listSize.forEach(function (link) {
            link.click();
          });
          browser.pause(2000);
          extractProductDetails();
        }
        else {
          extractProductDetails();
        }
      });

    }
    function extractProductDetails() {

      let productList = $$('//div[@id=\'productList\']//div[@class=\'ow-tile-grid__item\']');
      // console.log(productList.length);
      productList.forEach(function (list) {
        try {

          let displayName = (list.$('h5 a').getAttribute('href')).split("/");
          let price = (list.$('div span div span').getText());

          if (price != null && price !== undefined && displayName != null && displayName !== undefined) {
            console.log(displayName + "::::" + price);
            let result = displayName[displayName.length - 1];
            let n = result.lastIndexOf("-");
            var products = new Product();
            products.Name = ucFirstAllWords(result.substring(0, n));
            products.Price = price;
            products.Brand = products.Name.split(' ')[0];
            // console.log(products);
            dict.push(products);


          }
        }
        catch (err) {
          console.log(err.message);
        }


      });
      console.log(dict.length);

    }
    function ucFirstAllWords(str) {
      var pieces = str.split("-");
      for (var i = 0; i < pieces.length; i++) {
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1).toLowerCase();
      }
      return pieces.join(" ");
    }
    function sendData() {
      console.log("added");
      var products1 = new Product();
      products1.Name = "sdafasd sadfsda";
      products1.Price = "11";
      products1.Brand = "products.Name.split(' ')[0]";
      // dict["one"] = products;
      dict.push(products1);

      var products = new Product();
      products.Name = "asdfas sdvads";
      products.Price = "12";
      products.Brand = "products.Name.split(' ')[0]";
      dict.push(products);
      // // for(var key in dict) {
      //   console.log(dict[0]);

      //   // do something with "key" and "value" variables

      //   }
      var str_json = JSON.stringify(dict);
      var xmlhttp = new XMLHttpRequest();
      console.log("1");
      let URL = "http://localhost:5000/api/values";
      console.log("2");
      // xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
      xmlhttp.open("POST", URL, false);
      xmlhttp.setRequestHeader("Content-Type", "application/json");
      console.log("3");
      xmlhttp.send(str_json);
      console.log("4");
      console.log(xmlhttp.responseText);
    }


    // let list = browser.elements('//div[@class=\'container-fluid\']//ul[@id=\'mega-menu\']//a[@href]');

    // var dict = []; 
    // var products = new Product();
    // let allInputs = $$('//div[@class=\'container-fluid\']//ul[@id=\'mega-menu\']//a');
    // // console.log(allInputs.map(function(el) { return el.getAttribute('name'); }));
    // if (allInputs.length != 0){
    //   for (var i = 0; i < allInputs.length; i++){
    //     let contains = allInputs[i].getAttribute('href');
    //     if (contains.length != 0 && contains.indexOf('technology/') >= 0){ 
    //       links.push(contains);
    //     }

    //     // console.log(contains.length + contains +"\n");



    //     // if (contains.length != 0 &&  contains.indexOf('technology/') >= 0){  
    //     //   // console.log("contains href links "+contains);        
    //     //   //   browser.url(contains);
    //     //     // let innerLinks = $$('(//div[@class=\'ow-tile-grid\'])[1]//div[@class=\'ow-tile-grid__item\']//a');
    //     //     // if (innerLinks != null && innerLinks !== undefined){
    //     //     //   for (var j = 0; j < innerLinks.length; j++){
    //     //     //     let innerHref = innerLinks[j].getAttribute('href');
    //     //     //     console.log("inner href links "+innerHref);
    //     //     //     // if (innerHref != null && innerHref !== undefined){
    //     //     //     //     browser.url('https://www.officeworks.com.au/shop/officeworks/c/technology/audio/ipods');

    //     //     //     //   let listSize = $$('//label[@for=\'page-size-100\']');
    //     //     //     //   console.log(listSize);
    //     //     //     //   if (listSize.length != 0 &&  listSize != null && listSize !== undefined) {
    //     //     //     //       console.log(" :: if "+innerHref);
    //     //     //     //       listSize.forEach(function (link) {
    //     //     //     //       link.click();
    //     //     //     //       });
    //     //     //     //       browser.pause(5000);
    //     //     //     //       let productList = $$('//div[@id=\'productList\']//div[@class=\'ow-tile-grid__item\']');
    //     //     //     //       // console.log(productList.length);
    //     //     //     //       productList.forEach(function (list) {
    //     //     //     //         let displayName = (list.$('h5 a').getAttribute('href')).split("/");
    //     //     //     //         let result = displayName[displayName.length - 1];
    //     //     //     //         let n = result.lastIndexOf("-");

    //     //     //     //         let price = (list.$('div span div span').getText());
    //     //     //     //         //console.log(price);
    //     //     //     //         products.Name = result.substring(0, n ).replace(/-/g," ");
    //     //     //     //         products.Price = price;
    //     //     //     //         products.Brand = products.Name.split(' ')[0];
    //     //     //     //         dict.push(products);
    //     //     //     //         });
    //     //     //     //         listSize = [];
    //     //     //     //   }else{
    //     //     //     //         console.log( " :: else "+innerHref);
    //     //     //     //         let productList = $$('//div[@id=\'productList\']//div[@class=\'ow-tile-grid__item\']');
    //     //     //     //         // console.log(productList.length);
    //     //     //     //         productList.forEach(function (list) {
    //     //     //     //         let displayName = (list.$('h5 a').getAttribute('href')).split("/");
    //     //     //     //         let result = displayName[displayName.length - 1];
    //     //     //     //         let n = result.lastIndexOf("-");

    //     //     //     //         let price = (list.$('div span div span').getText());
    //     //     //     //         //console.log(price);
    //     //     //     //         products.Name = result.substring(0, n ).replace(/-/g," ");
    //     //     //     //         products.Price = price;
    //     //     //     //         products.Brand = products.Name.split(' ')[0];
    //     //     //     //         dict.push(products);
    //     //     //     //         listSize = [];
    //     //     //     //         });


    //     //     //     //   }
    //     //     //     //   // dict.push(products);
    //     //     //     // }                      
    //     //     //   } 
    //     //     // }               
    //     // }        
    //   }
    //   technologyLinks(links);

    // }  
  });

  Then(/^I should login to my home page$/, function () {
    // browser.pause(4000);
  });

  When(/^I login with username and password "([^"]*)" "([^"]*)" into the text box$/, function (arg1, arg2) {
    // loginPage.login(arg1, arg2);  
  });

});


var productsdata;

let request = new XMLHttpRequest();
      request.open("GET", "https://webshop.wm3.se/api/v1/shop/products.json?price=true");
      request.send();
      request.onload = () => {
        console.log(request);
        if (request.status === 200) {
          // by default the response comes in the string format, we need to parse the data into JSON
          console.log(JSON.parse(request.response));
          console.log(JSON.parse(request.responseText));

          var importantdata = (JSON.parse(request.responseText));
          console.log(importantdata.products[0]);
          console.log(importantdata.products[0].id); //THIS WORKS!!!
          console.log(importantdata.products[0].product_image); //THIS WORKS!!!

          console.log(importantdata.products[1]);
          console.log(importantdata.products[1].id); //THIS WORKS!!!
          console.log(importantdata.products[1].name); //THIS WORKS!!!
          console.log(importantdata.products[1].product_image); //THIS WORKS!!!

          console.log(importantdata.products[2].name); //THIS WORKS!!!

          /*----------------Names-------------------------------------------------------*/
           var productTextOne = importantdata.products[0].name; 
           var productTextTwo = importantdata.products[1].name;
           var productTextThree = importantdata.products[2].name;
           var productTextFour = importantdata.products[3].name; 
           var productTextFive = importantdata.products[4].name;
           var productTextSix = importantdata.products[5].name;

           var productTextOneCapitalized = productTextOne.toUpperCase();
           var productTextTwoCapitalized = productTextTwo.toUpperCase();
           var productTextThreeCapitalized = productTextThree.toUpperCase();
           var productTextFourCapitalized = productTextFour.toUpperCase();
           var productTextFiveCapitalized = productTextFive.toUpperCase();
           var productTextSixCapitalized = productTextSix.toUpperCase();

           document.querySelector('.shoenameone').textContent = productTextOneCapitalized;  
           document.querySelector('.shoenametwo').textContent = productTextTwoCapitalized;  
           document.querySelector('.shoenamethree').textContent = productTextThreeCapitalized;

           document.querySelector('.middlesectiontextone').textContent = productTextOneCapitalized;  
           document.querySelector('.middlesectiontexttwo').textContent = productTextTwoCapitalized;  
           document.querySelector('.middlesectiontextthree').textContent = productTextThreeCapitalized;
           document.querySelector('.middlesectiontextfour').textContent = productTextFourCapitalized;  
           document.querySelector('.middlesectiontextfive').textContent = productTextFiveCapitalized;  
           document.querySelector('.middlesectiontextsix').textContent = productTextSixCapitalized;
           /*-----------------------------------------------------------------------------*/

           /*----------------Prices-------------------------------------------------------*/
           var productPriceOne = importantdata.products[0].master.current_price.amount;
           var productPriceTwo = importantdata.products[1].master.current_price.amount;
           var productPriceThree = importantdata.products[2].master.current_price.amount;
 
           document.querySelector('.priceone').textContent = productPriceOne;  
           document.querySelector('.pricetwo').textContent = productPriceTwo;  
           document.querySelector('.pricethree').textContent = productPriceThree;

           /*-------------------------------------------------------------------------------*/

           /*----------------Header Images--------------------------------------------------*/

           /*-------------------------------------------------------------------------------*/

           var gridimageone = importantdata.products[0].product_image.url; //THIS WORKS!!!
           document.getElementById('image1').src = gridimageone;

           var gridimagetwo = importantdata.products[1].product_image.url; //THIS WORKS!!!
           document.getElementById('image2').src = gridimagetwo;

           var gridimagethree = importantdata.products[2].product_image.url; //THIS WORKS!!!
           document.getElementById('image3').src = gridimagethree;

           var gridimagefour = importantdata.products[3].product_image.url; //THIS WORKS!!!
           document.getElementById('image4').src = gridimagefour;

           var gridimagefive = importantdata.products[4].product_image.url; //THIS WORKS!!!
           document.getElementById('image5').src = gridimagefive;

           var gridimagesix = importantdata.products[5].product_image.url; //THIS WORKS!!!
           document.getElementById('image6').src = gridimagesix;


           
           document.querySelector('.carouselimageone').src = gridimageone;

           
           document.querySelector('.carouselimagetwo').src = gridimagetwo;

           
           document.querySelector('.carouselimagethree').src = gridimagethree;


           /*-----------------------------------------------------------------------------*/
           /*

           let productTextOneCapitalized = productTextOne.toUpperCase();
           let productTextTwoCapitalized = productTextTwo.toUpperCase();
           let productTextThreeCapitalized = productTextThree.toUpperCase();

          XMLHttpRequest { onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, 
            responseURL: "https://webshop.wm3.se/api/v1/shop/products.json?price=true", status: 200, statusText: "OK", responseType: "", response: 
            "{\"products\":[{\"id\":28949,\"name\":\"Dame 3\",\"sku\":\"12007\",\"reference\":\"12007

          Object { id: 28949, name: "Dame 3", sku: "12007", reference: "12007 - Dame 3", url: "dame-3", variant_id: 76592, product_image: {…}, published_content: {…}, country_affinity: {}, product_relations: [], … }
          
          productsdata = JSON.parse(request.response);
          console.info(JSON.parse(request.response[0]));


          */

        } else {
          console.log(`error ${request.status} ${request.statusText}`);
        }
};

/* document.getElementsByClassName('shoenameone').innerText = productTextOne  
 document.getElementsByClassName('shoenametwo').innerText = productTextTwo  
 document.getElementsByClassName('shoenamethree').innerText = productTextThree  */

function changeImage() {

document.getElementById('image1').src = gridimageone;
document.getElementById('image2').src = "http://127.0.0.1:5500/124925.PNG";
document.getElementById('image3').src = "http://127.0.0.1:5500/124925.PNG";
document.getElementById('image4').src = "http://127.0.0.1:5500/124925.PNG";
document.getElementById('image5').src = "http://127.0.0.1:5500/124925.PNG";
document.getElementById('image6').src = "http://127.0.0.1:5500/124925.PNG";

};

changeImage();

/*
Steps

1. Retrieve price from 3 products and display it on header ("Starting from 799$")

2. Retrieve the name of 3 products and display them on the header ("Lebron XIII")

3. Retrieve the images of 6 products and display them in the grid

document.getElementById('image6').src = "url('https://s3-eu-west-1.amazonaws.com/static.wm3.se/sites/384/media/124925_original_28-nike-hyperdunk-2016-elite-4.png?1486647060')";
document.getElementById('image1').src = "url('http://127.0.0.1:5500/124925.PNG')";
*/ 



/*
document.getElementById('lat').textContent = data;
document.getElementById('lat').textContent = data;
*/ 

/*Title Show Products

Url /api/v1/shop/products

Method GET

URL params Optional:

https://webshop.wm3.se/api/v1/shop/products/&price=true

url=[string] # Filter products by url
id=[integer] # Filter products by id
price=[boolean] # Product prices are included in the response
media_file=[boolean] # Product media file is included in the response
limit=[integer] # Max number of results. Default is 10.

Sample Call Command line:
curl -X GET https://webshop.wm3.se/api/v1/shop/products

Browser:
https://webshop.wm3.se/api/v1/shop/products.json?media_file=true

https://webshop.wm3.se/api/v1/shop/products.json?price=true
Title Search Products
Url /api/v1/shop/products/search

Method GET
URL params Required:
q=[string] # Filters the results by the search term

Optional:

price=[boolean] # Product prices are included in the response

media_file=[boolean] # Product media file is included in the response

limit=[integer] # Max number of results per page. Default is 10.

page=[integer] # Current page

Sample Call Command line:
curl -X GET https://webshop.wm3.se/api/v1/shop/products/search -d
"q=jordan&media_file=true"

Browser:
https://webshop.wm3.se/api/v1/shop/products/search.json?q=jordan&media_file=true*/ 

/*import fetch from "node-fetch";*/

/*
const api_url = 'https://webshop.wm3.se/api/v1/shop/products';

getData();

async function getData() {

const response = await fetch(api_url);
const data = await response.json();
console.log(data);

document.getElementById('lat').textContent = data;

}*/
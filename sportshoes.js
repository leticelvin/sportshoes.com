

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

let request = new XMLHttpRequest();
      request.open("GET", "https://webshop.wm3.se/api/v1/shop/products.json?price=true");
      request.send();
      request.onload = () => {
        console.log(request);
        if (request.status === 200) {
          // by default the response comes in the string format, we need to parse the data into JSON
          console.log(JSON.parse(request.response));
        } else {
          console.log(`error ${request.status} ${request.statusText}`);
        }
};


/*
document.getElementById('lat').textContent = data;
document.getElementById('lat').textContent = data;

document.getElementById('lat').textContent = data;
document.getElementById('lat').textContent = data;
document.getElementById('lat').textContent = data;
document.getElementById('lat').textContent = data;
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
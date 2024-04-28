# 4-27-Hometask

## Description

Build a chrome extension that can be embedded into Shopify storefronts to catch product history info and show the total prices.

## Features

- Whenever users visit the product pages, capture product images and names 
- Store the product info including the product name and product images in the database
- Show all list of product price and total price 
- support rate conversion between various currencies using exchangerate-api 

## Screenshots
![Rate converter](/screenshots/Annotation%202024-04-27%20215708.jpg "Rate converter")

![Event info](/screenshots/Annotation%202024-04-28%20001305.jpg "Event info")

![Cart info](/screenshots/Annotation%202024-04-28%20024912.jpg "Cart info")

## Requirements

- Monitor all the product detail page visit history product name: https://www.kermanig.com/products/baklava (name: baklava)
- Embed a custom widget into Shopify cart page that can enable/disable monitoring
- Clicking "event info" icon should display custom modal that shows list of all the history
- Clicking "cart info" icon should display custom modal that shows list of all the cart items and total price
https://www.kermanig.com/cart
- Clicking chrome extension icon should open a popup that can support rate conversion between various currencies
  Notes: Should support 10+ currencies (USD, CAD, AUD, etc.)

## Frontend

### Tech Stacks

- Vanilla Javascript
- CSS 3 
- HTML 5
- Chrome extension APIs
- ExchangeRate APIs

### Challenges

- How to call the rate converter apis
- How to embed the html and css styles dynamically into the DOM 
- How to capture the images
- How to enable or disable the webscraping

### Solutions

- We can use exchange rate APIs
- We can use store the checkbock status in the local storage to enable or disable webscraping
- We can call the initWidget function after we run the chrome extension
- We can capture the image URLs from the DOM.

### Utilization Functions

- createEventInfoModal
- createCartInfoModal

## Backend
### Tech Stacks
- Node.js
- Express.js
- Postgres

### API features
- api/products/post
	- Param1: ImageData (iamge URL)
  - Param2: item name

- api/products/get
  - List of item info
## How to use this program

### Prerequisites
- Node.js and npm installed on your machine

### Installation

1. Clone the repository

2. Set up the node modules on the back end side

```shell
npm install
```

3. Run the program

- Load or reload your extension in Chrome from the chrome://extensions/ page (make sure Developer mode is turned on).
- Test the popup to see if it meets your new width requirements. If it still appears too small or too large, adjust the min-width in your CSS or width in the HTML until you get a satisfactory result.


### Usage

A chrome extension that can be embedded into Shopify storefronts to catch product history info and show the total prices.
## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

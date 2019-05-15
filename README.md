# BurritoX
BurritoX is a revolutionary, online marketplace aimed to rethink the way we handle online auctions. 
## Description
Our app follows a similar structure to that of Ebay or Amazon. The major difference from these entities are the user authentication process
and the bidding system. <br>
Users may create an account with an e-mail and password. However, this account must be approved by an admin (a super user). Admins have the
ability to approve or deny the creation of an account as well as delete an already existing account.<br>
Admins must also approve of items put forward by users for sale. An item not approved by and admin will not be listed on the site. Users posting an item for sale must include an 'Ask' price, ie. a price they feel is reasonable for the item.<br>
A listed item has two purchase options, 'Bid' and '<br>
The following is a short list of the major functionalities of ordinary users and super users<br>
### Ordinary User
* Submit an item along with a description for listing approval by admins
* List an item for sale along with an asking price
* Select a purchase intention to be chosen for the sale of his/her listed item
* Submit a bid to buy an item
* Provide/recieve a rating after a transaction
* Edit personal information and payment info
### Super User
* Approve/deny a user account
* Remove an existing account
* Approve/deny an item to be listed for sale
* Process complaints against users
* Send warnings to users
* Edit the "taboo" list of disallowed words 
## Installation
For our application we strongly advise you to use Google Chrome. Along with Chrome you should install the Redux Devtools Extension which can be found 
<a href = "https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en"> here. </a>
Simply use npm install in the project directory after cloning the repository.
```bash
npm install
```
Using npm start will open the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
```bash
nmp start
```
## Authors
* Victor Alvarez Pajaro
* Luis Castillo
* Yorli Chidary
* Christian Suleiman
## License
MIT License
Copyright (c) [2019] [Christian Suleiman]
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
## Disclaimer
This application was made for a class project. As such, it should not be treated as a fully functional, legitimate online store. Please send any complaints/notes to yorli0114@gmail.com
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

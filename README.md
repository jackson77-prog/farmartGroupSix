# **<u>FARMART</u>**: <u>Empowering Farmers, connecting consumers</u>

- **Farmart is an e-commerce application designed to revolutionize the way you buy and sell livestock.**

- **Our mission is to bridge the gap between farmers and buyers, offering a seamless, transparent platform for purchasing animals such as horses, dogs, and camels.**
- Our platform is built with **user-friendly** features, allowing farmers to easily list their animals and buyers to purchase.
- **By eliminating middlemen, we aim to ensure fair pricing, and genuine connections.**

- The link to the actual **deployed website** is [<u>HERE</u>](https://frontend-idkw5a8kt-jacksons-projects-3048e91a.vercel.app/)
- Our **Power Point Presentation slides** is attached as a pdf file in the repository. 
Or check [<u>Here</u>](Final-Project-Group-6-Slideshow-Presentation.pdf)


## Table Of Contents

- [FARMART : Empowering Farmers, connecting consumers](#Farmart-empowering-farmers-connecting-consumers)
  - [Table Of Contents](#table-of-contents)
- [Introduction](#introduction)
    - [Overview](#overview)
      - [Tech Stack](#tech-stack)
  - [Setup](#setup)
    - [Installation](#installation)
  - [Demo](#demo)
  - [Live Link](#live-link)
  - [Authors](#authors)
    - [License](#license)
    - [Acknowledgments](#acknowledgments)
- [React + Vite](#react--vite)

# Introduction

- **To get started, you'll need Node.js and npm (or yarn), Python3 and Flask installed on your system.**


### Overview

- The website is built using react for the front-end and Flask for the back-end . The following instructions will guide you on how to retrieve the code from GitHub, set it up on VSCode, and run it.


**File structure**

```
 src/
├── components/
│   ├── AboutUs.jsx
│   ├── AddAnimal.jsx
│   └── Cart.jsx
├── styles/
│   └── index.css
├── App.jsx
└── main.js
```

#### Tech Stack


- React JS (Vite)
- CSS3
- Redux Toolkit
- Flask (Python)
- PostgreS


## Setup

- You can download [vscode](https://code.visualstudio.com/download) to practice and code.

- **Fork and Clone the Repository:**

   - Fork this repository.  
   - Clone your forked repository to your local machine using Git on your Linux Terminal using the command below:

     ```bash
     git clone (git@github.com:<Your Github userName>/farmartGroupSix.git)
     ```


### Installation

#### Front-end

1. Run the command below from the terminal side if you want to access the web app from the local host

- First, open the cloned repository using VisualStudio Code and open the terminal, or directly open the terminal and write the following commands;

  ```bash
  cd 'name of the cloned repository, i.e FarmartGroupSix/Frontend'
  ```

- Then to open the project code files on VS code, use the following command;

```bash
code .
```

- Then install all the node dependencies (be sure to have Nodejs installed into the coned repo first, using the command *`sudo apt install nodejs`*.
- Then install NPM using the command below;
  
```bash
npm install
```
  
- Then run the application using;
  
```bash
npm run dev
```

2. Open the link provided in the terminal from the web browser to render the application;


`i.e`
```bash
 http://localhost:3000/
```

- You can now successfully view the web application content via the browser.
Have fun being a front-end developer.

#### Back-end

- (i). Navigate into the project repository

```bash
cd farmart/backend
```


- (ii). Create a virtual environment and activate it:


```
python -m venv venv
```

- (iii). Acticate the virtual environment

```
 source venv/bin/activate
  ```

- On Windows use

`venv\Scripts\activate`

- (iv). Install the required dependencies:


```
pip install -r requirements.txt
```

#### Setting up the PostgreSQL database:

- (v). Create a database named farmart_db.
- (vi). Update the DATABASE_URI in the config.py file with your PostgreSQL credentials.
- (vii). Run the Flask application:


` flask run `


- With both the back end and front end set up, you can now run the application. The React front end will be running on http://localhost:3000, and the Flask back end will be running on http://localhost:5000.



## Demo

**The app, when run, should look as follows:**

- **Landing page**

![Image Sample 1](/frontend/src/assets/landing.png)

- **Register page**

![Image Sample 2](/frontend/src/assets/register.png)

- **Cart**

![Image sample 3](/frontend/src/assets/cart.png)

- **Add New Animal**

![Image sample 4](/frontend/src/assets/addanimal.png)


## Live Link

- Below are the links to the deployed site.

    (a). [<u>Front-end</u>](https://frontend-idkw5a8kt-jacksons-projects-3048e91a.vercel.app/)
    (b). [<u>Back-end</u>](https://farmartgroupsix-8.onrender.com/)


## Authors

- [`Jackson Njihia`](https://github.com/jackson77-prog)
- [`Lameck Kambi`](https://github.com/LameckKambi)
- [`Claire Wambani`](https://github.com/Clairewambani)
- [`Reagan Munene`](https://github.com/reaganmunene)


**Additional Notes**

- Feel free to customize the application.

- Explore the codebase and experiment with adding new features or functionalities.

### License
This project is licensed under the [MIT License](LICENSE).
```
This project is licensed under the MIT License.
Copyright 2024 Claire Wambani, Reagan Munene, Lameck Kambi, Reagan Munene.
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```


### Acknowledgments

We would like to express my gratitude to the following individuals and organizations for their contributions, support, and resources that have been invaluable in the development of the project.

- **Technical Mentor:** As a team we would like to acknowledge and appreciate our  technical mentor [`Mr Ian Okumu`](https://github.com/otsembo) for his invaluable guidance throughout the project.

- **Moringa School:** We appreciate [`Moringa school`](https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiK9-Tw_aKEAxU2QUECHcwOCDoYABAAGgJ3cw&ase=2&gclid=EAIaIQobChMIivfk8P2ihAMVNkFBAh3MDgg6EAAYASAAEgJSB_D_BwE&ohost=www.google.com&cid=CAASJORoHa2LLpPz846DBxVhhEyz_mIvcNnHZ_R4tWoL3IuSCcmYsA&sig=AOD64_04tJFd3Gstl7m-sNfbwiempwyFwg&q&nis=4&adurl&ved=2ahUKEwifmODw_aKEAxUhRKQEHaoDBq0Q0Qx6BAgFEAE) and its staff for guiding me and  providing me with the necessary resources to undertake this project.


- **React.js:** Our development is built on the foundation of [React.JS](https://react.dev/), which has been instrumental in creating a robust and scalable application.

- **GitHub:** We extend my thanks to [GitHub](https://github.com/) for providing an excellent platform for version control and collaboration, facilitating the open-source nature of our project.

- **Open Source Community:** A big shoutout to the broader open-source community for sharing knowledge, tools, and inspiration. This project stands on the shoulders of the collective expertise and passion that fuels the development community.
I am grateful for the support and collaborative spirit that makes the development journey enjoyable and fulfilling.

..............................................

..............................................

# React + Vite

- This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available
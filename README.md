# 🎓 Edusity – College/University Website

Edusity is a modern, responsive, and elegant educational website built using React.js. This project is inspired by a step-by-step tutorial from [GreatStack](https://youtu.be/WbV3zRgpw_E?si=3wZAnsHmSCbocKzE), designed to serve as a digital face for colleges or universities. It gracefully blends aesthetics with functionality — offering smooth navigation, dynamic sliders, and a working contact form that brings the user's message straight to your inbox.



## 🚀 Features

- Fully responsive across all devices  
- Smooth scroll navigation  
- Hero slider and image carousel  
- Working contact form (EmailJS integration)  
- Modular React components  
- Clean and modern UI design  

## 🛠️ Built With

- React.js  
- HTML5  
- CSS3  
- JavaScript (ES6+)  
- EmailJS – for sending contact form data to your email  
- SwiperJS – for carousel/slider functionality  

## 📁 Project Folder Structure

```
Edusity/
├── public/
│   └── index.html
├── src/
│   ├── assets/            # Images, GIFs, and other media
│   ├── components/        # All React components (Header, About, Services, etc.)
│   ├── App.js             # Main app structure
│   └── index.js           # ReactDOM render setup
├── .env                   # EmailJS credentials
├── package.json
└── README.md
```

## ⚙️ Getting Started Locally

```bash
git clone https://github.com/your-username/edusity.git
cd edusity
npm install
npm start
```
## ✉️ Contact Form Setup (Web3Forms)

1. Visit https://web3forms.com/  
2. Sign up and get your access key  
3. Replace the `action` attribute in your form tag with the Web3Forms endpoint:
   ```html
   <form action="https://api.web3forms.com/submit" method="POST">
     <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
     <!-- your form inputs here -->
   </form>
   ```

4. Customize your form fields as needed.


## 🙌 Author

Made with heart and code by Hitesh Rinayat 


> “In the digital halls of learning, Edusity stands as a gateway — crafted not just with code, but with the intent to empower the curious.”

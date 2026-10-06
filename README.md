# Figma Prototype – Responsive Frontend Website

## 📌 Project Overview

This project is a responsive frontend website prototype created as part of the problem statement:

> **"Create the Figma Prototype website as a Frontend Developer using HTML, CSS (Inline and External), and JavaScript. The main focus is on creating a responsive website with a proper color schema and adding interactive functionality."**

The website demonstrates how HTML5, CSS3, and JavaScript can be combined to create a modern, responsive, accessible, and interactive frontend website.

The project is named **StyleFig** and focuses on modern UI design, responsive layouts, color consistency, user interaction, and image export functionality.

---

## 🎯 Problem Statement

**Create the Figma Prototype website as a Frontend Developer using HTML, CSS (Inline and External), and JavaScript. The main focus should be on creating a responsive website with a proper color schema. Add some functionality to the website, add 4–5 elements, provide a delete option, and allow the website preview to be exported as PNG or JPG.**

---

## 💡 Project Objectives

The main objectives of this project are:

- Create a modern frontend website based on a Figma-style prototype.
- Use **HTML5** for website structure.
- Use **CSS3** for styling and responsive design.
- Demonstrate both **inline CSS** and **external CSS**.
- Use **JavaScript** to provide interactive functionality.
- Create a consistent and professional color schema.
- Make the website responsive on desktop, tablet, and mobile devices.
- Add multiple interactive website elements.
- Provide a delete option for feature elements.
- Allow users to dynamically add elements.
- Provide Dark Mode / Light Mode functionality.
- Add a contact form with basic validation.
- Allow users to export the website preview as PNG or JPG.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure and content of the website |
| CSS3 | Styling, layout, color schema and responsiveness |
| JavaScript | Interactive functionality |
| HTML2Canvas | Exporting the webpage as PNG/JPG |
| Git | Version control |
| GitHub | Source code repository |
| GitHub Pages | Website deployment |

---

## 📁 Project Structure

```text
Figma_Prototype/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### File Description

#### `index.html`

Contains the main structure of the website, including:

- Navigation bar
- Hero section
- Feature section
- About section
- Contact section
- Download/Export section
- Footer

#### `style.css`

Contains the external CSS styling, including:

- Color schema
- Typography
- Layout
- Buttons
- Cards
- Navigation
- Responsive design
- Dark mode styling
- Mobile and tablet media queries
- Accessibility focus styles

#### `script.js`

Contains JavaScript functionality such as:

- Feature card interaction
- Add element functionality
- Delete functionality
- Mobile navigation
- Dark/Light mode
- Contact form validation
- PNG export
- JPG export

#### `README.md`

Contains project documentation, objectives, technologies, features, setup instructions, and deployment information.

---

# 🎨 Color Schema

The project uses a consistent color system to maintain a professional and modern UI.

### Primary Colors

```text
Primary       : #2563EB
Primary Dark  : #1E40AF
Primary Light : #DBEAFE
Accent        : #F59E0B
```

### Background and Surface Colors

```text
Background    : #F8FAFC
Surface       : #FFFFFF
Surface Alt   : #EFF6FF
```

### Text Colors

```text
Text          : #0F172A
Text Muted    : #64748B
```

### Status Colors

```text
Success       : #16A34A
Danger        : #DC2626
```

The color schema is implemented using CSS custom properties (CSS variables), making it easier to maintain and update the website's visual design.

---

# ✨ Main Features

## 1. Responsive Navigation

The website includes a responsive navigation bar containing:

- Home
- Features
- About
- Contact
- Download

On smaller screens, the navigation changes into a mobile menu.

---

## 2. Responsive Design

The website is designed to work on:

- Desktop
- Laptop
- Tablet
- Mobile

CSS media queries are used to adapt the layout according to screen size.

---

## 3. Hero Section

The hero section introduces the website with:

- Responsive Design badge
- Main heading
- Project description
- Get Started button
- Explore Features button
- Modern UI information card

---

## 4. Feature Elements

The website contains multiple feature elements demonstrating different frontend capabilities.

The main feature elements include:

1. Responsive
2. Modern UI
3. Fast
4. Interactive

Each element is presented as a card.

---

## 5. Add Element Functionality

The website provides an **Add Element** functionality.

Users can dynamically add a new feature element to the feature section using JavaScript.

This demonstrates DOM manipulation and dynamic element creation.

---

## 6. Delete Functionality

Each feature element contains a **Delete** option.

Users can remove unwanted feature elements from the page.

This demonstrates JavaScript event handling and DOM manipulation.

---

## 7. Dark Mode / Light Mode

The website supports:

- Light Mode
- Dark Mode

The selected theme is stored using browser `localStorage`, allowing the user's theme preference to remain saved.

---

## 8. Contact Form

The website contains a contact form with:

- Name
- Email
- Message

JavaScript is used for basic form validation.

The user is notified if required fields are empty.

---

## 9. PNG Export

The website allows users to download the current webpage preview as a **PNG image**.

The project uses the HTML2Canvas library for converting the webpage into an image.

---

## 10. JPG Export

The website also provides an option to export the webpage preview as a **JPG image**.

The exported files are automatically downloaded to the user's device.

---

## 11. Accessibility

The project includes basic accessibility considerations such as:

- Semantic HTML
- Navigation labels
- Button labels
- Form labels
- Keyboard focus styles
- ARIA attributes for the mobile navigation

---

# 📱 Responsive Breakpoints

The website uses responsive CSS media queries.

### Desktop

```text
Above 1024px
```

### Tablet

```text
768px – 1024px
```

### Mobile

```text
480px – 768px
```

### Small Mobile

```text
Below 480px
```

Additional styling is provided for very small screens below 375px.

---

# ⚙️ How to Run the Project Locally

No backend server or database is required.

### Step 1

Download or clone this repository.

### Step 2

Open the project folder:

```text
Figma_Prototype
```

### Step 3

Open:

```text
index.html
```

in a web browser.

Alternatively, if you are using Visual Studio Code, you can use the **Live Server** extension.

---

# 💻 Running with VS Code

1. Open **Visual Studio Code**.
2. Select:

```text
File → Open Folder
```

3. Select:

```text
Figma_Prototype
```

4. Open `index.html`.
5. Right-click the file.
6. Select:

```text
Open with Live Server
```

The website will open in your browser.

---

# 🚀 GitHub Repository

The project can be stored and managed using GitHub.

Recommended repository name:

```text
Figma_Prototype
```

The repository contains:

```text
index.html
style.css
script.js
README.md
```

---

# 🌐 Deployment

The website can be deployed using **GitHub Pages** because it is a static frontend project using HTML, CSS, and JavaScript.

After deployment, the website will be available through a URL similar to:

```text
https://YOUR-USERNAME.github.io/Figma_Prototype/
```

---

# 🔄 Future Improvements

Possible future improvements include:

- Backend integration
- Database integration
- Real contact form submission
- User authentication
- More customizable UI components
- Drag-and-drop elements
- More export formats
- Figma API integration
- Improved animation system
- Component customization
- Persistent user-created elements

---

# 👩‍💻 Project Type

**Frontend Development / Web Development**

### Core Skills Demonstrated

- HTML5
- CSS3
- Responsive Web Design
- CSS Variables
- Inline CSS
- External CSS
- JavaScript
- DOM Manipulation
- Event Handling
- Form Validation
- Local Storage
- Image Export
- Accessibility
- Git
- GitHub
- GitHub Pages

---

# 📄 License

This project was created for educational and frontend development demonstration purposes.

---

## 👤 Author

**Riya Nitnaware**

**Project:** Figma Prototype – Responsive Frontend Website

**Technology:** HTML5 + CSS3 + JavaScript

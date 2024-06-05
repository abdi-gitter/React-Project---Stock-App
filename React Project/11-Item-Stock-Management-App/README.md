<p>Clarusway<img align="right"
  src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"  width="15px"></p>
<hr>
<h1 style="text-align:center">Stock Management App</h1>


## Description

Welcome to the Stock Management Application! Our robust platform empowers users to efficiently manage their stocks, offering real-time updates and intuitive features. Whether you're a business owner seeking streamlined inventory control, a store manager optimizing operations, or an individual tracking personal items, Stock App is your solution. Take control of your stock management journey today – sign up and explore the future of inventory control!

## Live Demo

You can access live demo with this [link](https://stock-final-chi.vercel.app/).

You can create a new account through register menu. However, newly created user will not have admin rights to trigger CRUD operations. 

You can login with below credentials to have admin rights.

`email`: `tester@gmail.com`

`password`: `Qazqwe.123`

## Features
- **User Authentication:** Effortlessly create an account or log in to unlock the full potential of the application, ensuring secure access to your stock management tools.
- **Dashboard Insights:** Gain a comprehensive overview of your stock-related Key Performance Indicators (KPIs) at a glance. Stay informed and make data-driven decisions with ease.
- **Firm and Brand Management:** Simplify inventory organization by adding, editing, or removing firms and brands. Effectively categorize your products for efficient stock control.
- **Product Tracking:** Maintain precise stock levels with in-depth product tracking. Monitor purchases and sales to ensure accurate inventory management and streamline your supply chain.
- **Interactive Data Visualization:** Transform your stock data into actionable insights with interactive charts and graphs. Visualize trends, analyze patterns, and optimize your stock strategy.
- **Responsive Design:** Enjoy a seamless and intuitive user experience on a variety of devices, including desktop computers, tablets, and mobile phones. Access your stock management tools whenever and wherever you need them.

<hr>

## Required Technologies:
- **React.js:** A widely used JavaScript library for building interactive and dynamic user interfaces. React is known for its component-based architecture, making it easy to develop reusable UI elements.
- **Redux-Redux Toolkit:** Redux is a state management library for managing complex application states. Redux Toolkit is a set of tools and best practices that simplify Redux development, making it more efficient and less boilerplate-heavy.
- **Axios:** A popular HTTP client used for making API requests and handling responses. Axios is known for its simplicity and flexibility in managing HTTP requests.
- **Material UI and Tailwind CSS:**
  - **Material UI (MUI):** A comprehensive UI framework that offers a wide range of pre-designed components and themes, making it easier to create a polished and consistent user interface.
  - **Tailwind CSS:** A highly customizable CSS framework that allows you to design and style your application with minimal effort, thanks to its utility-first approach.
- **React Router Dom:** A widely used routing library for React applications. It enables dynamic and intuitive navigation between different pages within your application, making it essential for building a multi-page web app.
- **Formik and Yup:**
  - **Formik:** A library for managing form state, handling form submissions, and providing a streamlined way to work with forms in React.
  - **Yup:** A library used for defining validation schemas for form data, ensuring that user inputs conform to specified constraints. When combined with Formik, it offers robust form validation.
- **Custom Hooks:** Custom hooks are a React feature that allows you to encapsulate and reuse complex logic across different components. They improve code organization, maintainability, and reusability by abstracting away common functionality.

Overall, the combination of these technologies and libraries provides a solid foundation for building a modern and feature-rich web application with a focus on user interface, state management, API integration, form handling, and routing. These tools and best practices are commonly used in the React ecosystem and should help you develop a high-quality application efficiently.

## Tasks

### Task 1: Initialization of Project
1. Create an API for yourself:
   - You can create an API in the Clarusway server through the following steps:
     - To set your API, visit `http://fullstack.clarusway.com/`
     - Select the application as "1 - Stock API (NodeJS)" or "2 - Stock API (Django)" and create your account with your student number.
     - Enter the password as `cwfullstack`
     - Click Start Application
     - Click Set Active
   - Copy your API URL and use it in your application to make CRUD operations

2. Read swagger documentation of API:
   - Visit your API adding /redoc endpoint to the end of URL. For example `https://20004.fullstack.clarusway.com/redoc`
   - Check the endpoints and understand the features of API and its usage.

3. Test API with Postman:
   - Use Postman to test your API endpoints. Ensure that all endpoints are working as expected.

4. Create a React App:
   - Set up a new React project using Create React App or your preferred method.

5. Install the required packages mentioned above:
   - Install the necessary packages like React Router, Material UI, Formik, Yup, and Toastify using npm or yarn.

6. Establish React Router setup:
   - Set up a React Router to handle navigation within your React app.

7. Add Toastify setup:
   - Integrate Toastify to display notifications or messages to the user.

8. **Hint: Adding Manager Role to a User:** 

   When you register a new user, they will initially only have regular client permissions and won't be able to perform any CRUD operations. To grant CRUD permissions, you need to assign a manager role to that user in the API Admin Dashboard. Here are the steps to do so:

   - Visit your API adding /admin endpoint to the end of URL. For example `https://20004.fullstack.clarusway.com/admin`
   - Enter these credentials to login. 
     - Username: *admin*
     - Password: *Clarusway1+*

   - Click on  "Users".
   - Find and click on the user to whom you want to grant the manager role.
   - In the "Groups" section, remove the *Read_Only* role and add the *Manager* role
   - Click the "Save" button at the bottom to apply the changes.


### Task 2: Establish authentication features
1. Login and Register Pages UI Enhancement:
   - Design and create UI components for the login and register pages using Material UI.
   - Use Formik and Yup for form handling and validation.
   - Use input adornment for password to toggle view or hide password
   
2. User Authentication Implementation:
   - Implement user registration and login features by connecting to your API.
   - Use Redux Toolkit to manage application state.
     - Create a Redux store for authentication.
     - Create a Redux slice for authentication, which includes actions and reducers.
     - Implement asynchronous API connections using async actions in Redux Toolkit.
   - Use Toastify to notify users of the registration and login processes.
   - After a successful login, navigate the user to the dashboard.

3. Store current user information:
   - Store the current user's information and token in local or session storage.
   - Retrieve user information from browser storage when the page is refreshed.

### Task 3: Design Dashboard Layout

1. Develop a Layout consisting of Header, Sidebar, Box (for content)
2. Develop Box containing the Outlet.
   - Box should have the full width and height remaining out of Header and Sidebar
3. Develop Header:
   - Use `MuiAppBar`  as Header/Navbar
   - Customize  `MuiAppBar`  with MUI styled function to add features like below:
     - AppBar should be always at top of Drawer
     - Add a transition effect to the AppBar when changing its width as the Drawer expands or collapses.
   - Add a `Toolbar` inside the AppBar.
   - Add an `IconButton` at the left corner of the `Toolbar` with a hamburger menu (MenuIcon) inside it. This button should toggle the expansion and collapse of the drawer and adjust the AppBar's size accordingly. 
   - Define a uiSlicer in redux shop, add a state as sidebarOpen to track whether sidebar is expanded or collapsed.
   - Add a `Typography` element after the IconButton to display the header text as "Stock App."
   - Add a `Box` next to the Typography to display the current user's information.
   - Include an `Avatar` component for the current user inside the Box.
   - Create a dropdown menu for the Box containing the Avatar.
   - Implement the logic for opening and closing the dropdown menu.
   - The dropdown menu should contain items like Stack, Change Password, and Logout.
   - Stack should contain Avatar, Username, and status of the current user as User or Admin
   - Handle the logout process when the Logout option is clicked.
4. Develop SideBar:
   - Use `MuiDrawer` as the sidebar and customize it with MUI styled function to add features like below:
     - Apply transitions to the Sidebar to make it expand and collapse smoothly.
     - Adjust the width of the Sidebar based on the state of `sidebarOpen`.
   - Populate the Sidebar with links to different pages such as 'Dashboard,' 'Products,' 'Sales,' 'Purchases,' 'Firms,' 'Brands,' and 'Categories' using `ListItemButtons`.
   - Ensure that Sidebar items start below the height of the AppBar.
   - If the current user is an admin, add a link to the Backend Admin Dashboard inside the Sidebar.
   - Update your app's routers to serve all the menu items in the Sidebar.
   - Implement private routes to ensure that certain routes are only accessible when a user is logged in.

### Task 4: Design Profile Page

1. Develop the UI for the Profile page.
   - Display user information, including avatar, username, email, first_name, and last_name.
   - Create a Formik form to update the password.
   - Implement password confirmation input and validation to ensure both passwords match.
   - Use an input adornment to toggle between showing and hiding the password.
2. Develop functionality to change the user's password within the Redux store.

### Task 5: Design Categories Page

1. Design the UI for the Categories page.
   - List all categories and display the product counts in each category.
   - Add Edit and Delete icons and functionalities to update or delete any category.
   - Use a Modal and a Formik Form for adding or updating categories. (Reminder when you update a category, you modal form inputfield should come up current value of the category. Figure out a way to pass the data to the modal.)
2. Implement CRUD functionalities for categories using a Redux slice, including async actions for API connections.

### Task 6: Design Brands Page

1. Develop the UI for the Brands page.
   - Create a customizable styled card for displaying brand details. You will also use this cards for firms and products.
   - List all brands using the styled card.
   - Add Edit and Delete icons and functionalities for updating or deleting brands.
   - Use a Modal and a Formik Form for adding or updating brands.
2. Implement CRUD functionalities for brands using a Redux slice, including async actions for API connections.

### Task 7: Design Firms Page

1. Design the UI for the Firms page.
   - List all firms using the same customizable styled card.
   - Add Edit and Delete icons and functionalities for updating or deleting firms.
   - Use a Modal and a Formik Form for adding or updating firms.
2. Implement CRUD functionalities for firms using a Redux slice, including async actions for API connections.

### Task 8: Design Products Page

1. Develop the UI for the Products page.
   - List all products using the MUI DataGrid component.
   - Add Edit and Delete icons with functionalities for updating or deleting products. (Hint: use renderCell method in DataGrid)
   - Use a Modal and a Formik Form for adding or updating products, including select inputs for categories and brands (which should contain all existing categories and brands)
2. Implement CRUD functionalities for products using a Redux slice, including async actions for API connections.

### Task 9: Design Sales Page

1. Create the UI for the Sales page.
   - List all sales data using the MUI DataGrid component.
   - Add Edit and Delete icons with functionalities for updating or deleting sales.
   - Use a Modal and a Formik Form for adding or updating sales, including select inputs for categories, products, and brands.
2. Implement CRUD functionalities for sales using a Redux slice, including async actions for API connections.

### Task 10: Design Purchases Page

1. Create the UI for the Purchases page.
   - List all purchase data using the MUI DataGrid component.
   - Add Edit and Delete icons with functionalities for updating or deleting purchases.
   - Use a Modal and a Formik Form for adding or updating purchases, including select inputs for categories, products, and brands.
2. Implement CRUD functionalities for sales using a Redux slice, including async actions for API connections.

### Task 11: Design Dashboard Page

1. **Add PieChart to display total sales and purchases:**
   - Utilize the `PieChart` component from the `@mui/x-charts` library to visually represent the total sales and purchases data.
   - Configure the PieChart to display these statistics in an easily understandable format.
2. **Design a Card to display numerical data:**
   - Create a card component to display key numeric information related to your stock management, such as total sales, total purchases, and total income.
   - Ensure that this card provides clear and concise information to users.
3. **Develop a Chart component for LineChart:**
   - Create a reusable `Chart` component that utilizes the `LineChart` component from the `recharts` library.
   - You will use this `Chart` component to display sales or purchase data.
   - Customize the Chart component as needed, including labels, colors, and tooltips.
4. **Use the Chart component to display sales data:**
   - Integrate the `Chart` component into the Dashboard to display sales data in a visually appealing LineChart.
   - Ensure that the data is fetched and displayed accurately.
5. **Design a Table for sales data:**
   - Create a table component to display detailed information about the last 3 sales transactions.
   - Include relevant columns such as date, product, quantity, and amount.
6. **Use the Chart component to display purchase data:**
   - Reuse the `Chart` component to display purchase data in a LineChart format.
   - Fetch and display purchase data accurately within the Dashboard.
7. **Design a Table for purchase data:**
   - Create another table component to display detailed information about the last 3 purchase transactions.
   - Include relevant columns similar to the sales table, such as date, product, quantity, and amount.

### Task 12: Update Firms Page for Map Functionalities

1. Make a leaflet design with react-leaflet library to toggle between firm cards and mapview
2. Design a mapview component to display map location.
3. Use react-geocode library to get latitude and longitude information out of an address.

# Item List Manager

Item List Manager is a simple React application that allows users to manage a list of items. Users can add new items to the list, and all interactions are reflected dynamically in the UI.

## Features

- **Add Items**: Users can type text into the input field and add it to the list by clicking the "Add Item" button.
- **Dynamic Updates**: The list updates immediately as items are added.
- **Error Prevention**: Prevents adding empty items to the list.
- **HackerRank-Inspired Theme**: Features a dark theme with yellow highlights.

## Technologies Used

- **React.js**: For building the user interface.
- **CSS**: For styling the application with a HackerRank-inspired theme.

## Deployment

The application is deployed using **GitHub Pages** and can be accessed [here](https://your-username.github.io/item-list-manager).

## Installation and Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/item-list-manager.git
   ```

2. Navigate to the project directory:
   ```bash
   cd item-list-manager
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm start
   ```

   Open your browser and navigate to `http://localhost:3000` to view the app.

## Deployment Instructions

1. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Add the following to your `package.json`:
   ```json
   "homepage": "https://your-username.github.io/item-list-manager",
   "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
   }
   ```

3. Deploy the app:
   ```bash
   npm run deploy
   ```

4. Access your deployed app at:
   ```
   https://your-username.github.io/item-list-manager
   ```

## Screenshots

### Initial State
![Initial State](https://via.placeholder.com/800x400?text=Initial+State)

### Adding Items
![Adding Items](https://via.placeholder.com/800x400?text=Adding+Items)

## License

This project is open-source and available under the [MIT License](LICENSE).


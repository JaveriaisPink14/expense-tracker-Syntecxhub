# Expense Tracker

A modern, responsive expense tracking web application built with React. Track your expenses, set budgets, view summaries with charts, and manage your finances effectively.

## 🚀 Features

- **Add Expenses**: Easily add new expenses with title, amount, category, and date
- **Edit & Delete**: Modify or remove existing expenses
- **Budget Management**: Set and track your monthly budget
- **Visual Summaries**: View expense summaries with interactive charts
- **Data Persistence**: All data is saved locally in your browser
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Toast Notifications**: Get instant feedback for all actions
- **Real-time Updates**: See changes reflected immediately in summaries

## 📊 Dashboard Overview

- **Total Expenses**: Sum of all recorded expenses
- **Monthly Expenses**: Expenses for the current month
- **Highest Expense**: The largest single expense recorded
- **Remaining Budget**: Budget minus total expenses
- **Expense Categories**: Visual breakdown by category
- **Monthly Trends**: Chart showing expense patterns over time

## 🛠️ Technologies Used

- **React 19**: Modern React with hooks and functional components
- **Chart.js**: Powerful charting library for data visualization
- **React Chart.js 2**: React wrapper for Chart.js
- **CSS3**: Custom styling with responsive design
- **Local Storage**: Client-side data persistence
- **Create React App**: Build setup and development server

## 📁 Project Structure

```
expense-tracker/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.js/css
│   │   ├── ExpenseForm.js/css
│   │   ├── ExpenseList.js/css
│   │   ├── Summary.js/css
│   │   ├── Toast.js/css
│   │   └── Modal.js/css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🧩 Components

### Header
- Application title and branding
- Clean, modern design

### ExpenseForm
- Form to add new expenses
- Input validation
- Category selection
- Date picker

### ExpenseList
- Displays all expenses in a table format
- Edit and delete functionality
- Sortable columns

### Summary
- Financial overview dashboard
- Interactive charts (pie chart for categories, bar chart for monthly trends)
- Budget vs. expenses comparison

### Toast
- Notification system for user feedback
- Success and error message types
- Auto-dismiss functionality

### Modal
- Reusable modal component for confirmations and forms
- Overlay and close functionality

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JaveriaisPink14/expense-tracker-Syntecxhub.git
cd expense-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## 🎯 Usage

1. **Set Your Budget**: Enter your monthly budget in the summary section
2. **Add Expenses**: Use the form on the left to add new expenses
3. **View Summary**: Check the right panel for expense summaries and charts
4. **Manage Expenses**: Edit or delete expenses from the expense list
5. **Track Progress**: Monitor your spending against your budget

## 💾 Data Persistence

All expense data and budget settings are automatically saved to your browser's local storage. Your data will persist between sessions.

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Create React App](https://github.com/facebook/create-react-app)
- Charts powered by [Chart.js](https://www.chartjs.org/)
- Icons and styling inspired by modern web design principles

## 📞 Support

If you have any questions or issues, please open an issue on GitHub or contact the maintainers.

---

**Happy expense tracking! 💰**

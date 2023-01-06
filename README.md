# Translation_Application
Full-stack web application for translating English to Spanish.

The frontend of the application is developed with Angular, and the backend uses Node and Express.

The Angular code uses three components. The first component is a parent component (Frontend/src/app/parent-component). The second component holds the form which allows the user to input text, and also makes API calls to the backend to get translations (Frontend/src/app/form-component). The third component displays the result of the translation (Frontend/src/app/display-result-component). All components interact with each other to pass data and display the appropriate information to the user.

The backend utilizes a RapidAPI API to get translations.
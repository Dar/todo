# Todo MFE

## Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the application: `npm start`
4. Run tests: `npm test`

## Design Overview

This application is a standalone React Microfrontend (MFE) component for a todo list. It includes the following features:

- Task creation
- Task status management (complete/incomplete)
- Task persistence using localStorage
- Filtering options (All, Active, Completed)

### Technical Considerations

- **TypeScript:** Ensures type safety and maintainability.
- **Testing:** Unit tests cover core component logic.
- **State Management:** Uses React’s built-in state management.
- **Microfrontend Principles:** Designed to be seamlessly integrated into various host applications.
- **Edge Cases:** Handles localStorage availability and input validation.

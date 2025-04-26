# ReactCraft

```
 ######                              #####
 #     # ######   ##    ####  ##### #     # #####    ##   ###### #####
 #     # #       #  #  #    #   #   #       #    #  #  #  #        #
 ######  #####  #    # #        #   #       #    # #    # #####    #
 #   #   #      ###### #        #   #       #####  ###### #        #
 #    #  #      #    # #    #   #   #     # #   #  #    # #        #
 #     # ###### #    #  ####    #    #####  #    # #    # #        #

```

## Vite + React + TypeScript + TailwindCSS + DaisyUI + ESLint + Prettier + Vitest + Commitizen + Husky

This project is a custom Vite template that integrates React, TypeScript, ESLint, Prettier, TailwindCSS, DaisyUI, and more. It provides a robust starting point for building modern web applications with best practices.

## Features

- **React 19**: The latest version of React for building user interfaces.
- **TypeScript**: Strongly typed JavaScript for better developer experience.
- **Vite**: Fast and modern build tool with HMR (Hot Module Replacement).
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **DaisyUI**: TailwindCSS components for faster UI building.
- **ESLint**: Linting for consistent and error-free code.
- **Prettier**: Code formatting for clean and readable code.
- **Husky & Lint-Staged**: Pre-commit hooks to ensure code quality.
- **Vitest**: Unit testing framework with JSDOM support.
- **Commitizen & Commitlint**: Standardized commit messages with an interactive prompt.

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd react-ts-custom
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Build for production**:

   ```bash
   npm run build
   ```

5. **Run tests**:

   ```bash
   npm run test
   ```

6. **Lint and format code**:

   ```bash
   npm run lint
   ```

## Development Workflow

- **Pre-commit hooks**: Automatically runs tests and lints staged files before committing.
- **Commit messages**: Use `npm run commit` for an interactive commit message prompt.
- **Editor integration**: ESLint and Prettier are configured to work seamlessly with VS Code.

## Expanding the ESLint Configuration

For production applications, consider enabling type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

## Customizations

This template includes the following customizations:

- **TailwindCSS with DaisyUI**: Pre-configured for rapid UI development.
- **Husky & Lint-Staged**: Ensures code quality before committing.
- **Commitizen & Commitlint**: Enforces conventional commit messages.
- **Vitest**: Pre-configured for unit testing with JSDOM.

## File Structure

```
react-ts-custom/
├── src/                # Application source code
│   ├── components/     # React components
│   ├── main.tsx        # Application entry point
│   ├── main.css        # TailwindCSS styles
├── .husky/             # Git hooks
├── .vscode/            # VS Code settings
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation
```

## Contributing

Feel free to fork this repository and submit pull requests. Contributions are welcome!

## License

This project is licensed under the [MIT License](LICENSE).

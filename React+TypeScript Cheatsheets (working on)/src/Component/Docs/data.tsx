export type DocsType = {
  name: string,
  canOpen: boolean,
  child?: {
    name: string,
    canOpen: boolean,
    child?: {
      name: string,
      canOpen: boolean,
      child?: {
        name: string,
        canOpen: boolean,
      }[],
    }[],
  }[],
}[];

export const docs: DocsType = [
  {
    name: "Basic",
    canOpen: true,
    child: [
      { name: "Setup", canOpen: false },
      {
        name: "Getting Started",
        canOpen: true,
        child: [
          { name: "Typing Component Props", canOpen: false },
          { name: "Function Components", canOpen: false },
          { name: "Hooks", canOpen: false },
          { name: "Class Components", canOpen: false },
          { name: "Typing defaultProps", canOpen: false },
          { name: "Forms and Events", canOpen: false },
          { name: "Context", canOpen: false },
          { name: "forwardRef/createRef", canOpen: false },
          { name: "Portals", canOpen: false },
          { name: "Error Boundaries", canOpen: false },
          { name: "Concurrent React/React Suspense", canOpen: false },
        ],
      },
      {
        name: "Troubleshooting Handbook",
        canOpen: true,
        child: [
          { name: "Types", canOpen: false },
          { name: "Operators", canOpen: false },
          { name: "Utilities", canOpen: false },
          { name: "Globals, Images and other non-TS files", canOpen: false },
          { name: "tsconfig.json", canOpen: false },
          { name: "Fixing bugs in official typings", canOpen: false },
          { name: "Time to Really Learn TypeScript", canOpen: false },
        ],
      },
      {
        name: "Recommendations",
        canOpen: true,
        child: [
          { name: "Codebases", canOpen: false },
          { name: "Talks", canOpen: false },
          { name: "Other resources", canOpen: false },
        ],
      },
      { name: "Editor Tooling and Integration", canOpen: false },
      { name: "Linting", canOpen: false },
      { name: "Examples", canOpen: false },
    ],
  },
  {
    name: "HOC",
    canOpen: true,
    child: [
      { name: "Intro", canOpen: false },
      { name: "Full HOC Example", canOpen: false },
      { name: "React HOC docs in TypeScript", canOpen: false },
      { name: "Excluding Props", canOpen: false },
    ],
  },
  {
    name: "Advanced",
    canOpen: true,
    child: [
      { name: "Intro", canOpen: false },
      { name: "Utility Types", canOpen: false },
      { name: "Useful Patterns by Use Case", canOpen: false },
      { name: "Useful Patterns by TypeScript Version", canOpen: false },
      { name: "Misc. Concerns", canOpen: false },
      { name: "@types/react and @types/react-dom APIs", canOpen: false },
    ],
  },
  {
    name: "Migration",
    canOpen: true,
    child: [
      { name: "Intro", canOpen: false },
      { name: "JSDoc", canOpen: false },
      { name: "From JS", canOpen: false },
      { name: "From Flow", canOpen: false },
    ],
  },
];
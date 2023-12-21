## Marine Creatures

This repository contains the demo project covered in [my article on Medium](https://medium.com/octopus-labs-london/cancelling-xhrs-with-next-js-14-and-rtk-2-9474d98a87c9).

It is an auxiliary tool so that the reader can see the concepts I have described in action.

<img src="https://github.com/fomazov/marine-creatures/blob/main/public/marine-creatures-repo.png?raw=true" width="475">

## Features
- Modern small [SSR](https://nextjs.org/docs/app/building-your-application/rendering) application based on [Next.js 14 App Router](https://nextjs.org/docs/app)
- Retrieving and storing data from the built-in API using a fake content generator
- Skeleton loading
- Cancel [XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) request using [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) via RTK [createAppAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk)
- Cache fetched data with [RTK condition](https://redux-toolkit.js.org/api/createAsyncThunk#options)
- Clean UI with theming support

## Technical Stack
- Language: [TypeScript: 5.3.2](https://www.typescriptlang.org/)
- Framework: [Next.js 14.0.3](https://nextjs.org/)
- State Management: [Redux Toolkit 2.0.1](https://redux-toolkit.js.org/)
- Styling: [Tailwind CSS 3.3.6](https://talwindcss.com/)
- UI Components: 
  - [shadcn/ui](https://ui.shadcn.com/)
  - [Radix UI](https://www.radix-ui.com/)
- Deployment: [Vercel](https://vercel.com/)

## Live Demo

[marine-creatures.vercel.app](https://marine-creatures.vercel.app/)

## Running Locally

> This application requires Node.js v18.18+

1) Clone the repository: `git clone https://github.com/fomazov/marine-creatures.git`
2) Install dependencies: `npm install`
3) Run the development server using the command `npm run dev`

4) Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
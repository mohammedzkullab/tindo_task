
Hi , Im Mohammmed kullab , Frontend developer .

This Repo is a task assigned to me by Tindo.

I selected to make a modal from scratch using compound components pattern.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## General details

A modal component built with React compound components pattern consists of some components compound in one general component , that makes it easy to import and deal with.

## How to use

To use Modal Component , you have these components inside modal `Wrapper` , `Head` , `Body` and `Footer`.

You can access them through dot annotation , "eg. `Modal.component`"

##### To start You need wrapper `Modal.Wrapper` to wrap all other components

- this component creates a portal , handles the backdrop and handles the close when clicking on the backdrop.

##### Then you need to use  `Modal.Head` to make head of modal with close button and title

##### Then you need to use  `Modal.Body` to wrap all the children of the body of modal

##### Then you can to use  `Modal.Footer` optionally to have a footer with CTA's

## Components props

| Component      | props    | Type          | Description          |
| :---        |    :----:   |          :---: |          :---|
| wrapper  | children | React Node | -    |
|          | open | boolean | determine modal is open or not   |
|          | onClose | void function | make action when close button is clicked   |
|          | closeOnEsc | boolean | determine if you need to close modal using ESC from keyboard   |
|          | closeOnClickOutside | boolean | determine if you need to close modal when clicking outside |
| Head  | children | React Node | -    |
|          | className | string | classes   |
| Body  | children | React Node | -    |
|          | className | string | classes   |
| Footer  | children | React Node | -    |
|          | className | string | classes   |

## Deployment details

| resource  | link  |
|---|---|
|  Live preview  | [https://tindo-task-five.vercel.app](https://tindo-task-five.vercel.app)   |
|  Storybook  | [https://mohammedzkullab.github.io/tindo_task/?path=/story/components-button--primary](https://mohammedzkullab.github.io/tindo_task/?path=/story/components-button--primary)   |

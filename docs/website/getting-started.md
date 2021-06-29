---
sidebar_position: 1
---

# Setting up the Environment

In order to develop for this project, you'll need to get set up for web development. This first part will go over how to get set up with node and npm. This project makes use of npm **we do not use yarn**.

## Installing Node / NPM

You'll want to be sure to have **Node 14.x.x** and **NPM 6.x.x**

### Using NVM (recommended)

#### Windows

Do things...

#### Mac / Linux

Do things...


### Using the installer

Visit the [Node JS Website](https://nodejs.org/) and download the **LTS Release**. At the time of writing this, it is **14.17.1**.

Run the installer that it downloads and go through the setup. After setup finishes open your terminal and type:

```bash
node -v
# AND
npm -v
```

if the install was successful, each command will output a response with a version number.

On unix based operating systems, you may run into permission issues when trying to globally install packages. To fix this, follow [this guide](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) which explains how to change the npm global location.

## Getting **GLOBAL** packages

You may find that you need to install the `typescript` package globally, in fact it is generally recommended.

```bash
npm i -g typescript
```

To check if the installations worked, you can run:

```bash
tsc -v
```

Typescript is the codebase of the website, and the installation includes a compiler. In case your IDE can not be configured to use the one in `node_modules/typescript/lib` you will need an installation to fall back on.

And that is all you'll need to get set up, the project itself contains the rest of the npm modules needed to run.

**More info coming soon...**

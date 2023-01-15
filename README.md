# Github Assessment (Backend)

## Github Repositories Listing

This repo is for the successful completion of the task for the position of Full Stack Intern by Fyle.

It is a SPA build on MEAN Stack, which lists all the github repository of a user on application.

## Tech Stack

**Frontend:** Angular15, Bootstrap CSS

**Server:** NodeJS, ExpressJS

### Clone

Clone with git-bash or terminal

```bash
  git clone https://github.com/Kamal040102/github_assessment_server.git
  cd github_assessment_server
```

### Installation

```bash
  npm install
```

### Running on Dev Environment

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`SERVER_URI`

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

There are total 6 tests:

1. Should return user.
2. Should return user repos.
3. Should return error if no user query given for repos route.
4. Should return error if no user query given for user account route.
5. Should return error if user is not found for user account route.
6. Should return error if user is not found for repos route.

### API Reference

#### Get User Information

```http
  GET /api/v1/github?user={username}
```

| Query  | Type     | Description                   |
| :----- | :------- | :---------------------------- |
| `user` | `string` | **Required**. Github Username |

#### Get User repositiories

```http
  GET /api/v1/github/repos?user={username}
```

| Query  | Type     | Description                   |
| :----- | :------- | :---------------------------- |
| `user` | `string` | **Required**. Github Username |

### Appendix

#### Frontend is deployed using vercel. [https://github-assessment.vercel.app]

#### Backend is deployed using render. [https://github-server.onrender.com]

#### Frontend Repository. [https://github.com/Kamal040102/github_assessment_client]

## Feedback

If you have any feedback, please reach out to me at kamal5201ks@gmail.com

## 🔗 Links

[![My Website](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://kamalsharma.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kamalsharma05/)

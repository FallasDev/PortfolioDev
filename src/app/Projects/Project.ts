interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    github: string;
    url: string;
    date: string;
    tecnologies: Array<tecnologies>;
    disabledGithub?: boolean;
    disabledUrl?: boolean;
}

export type tecnologies = "React" | "TypeScript" | "TailwindCSS" | "Flask" | "Python" | "SpringBoot" | "Boostrap" | "JavaScript" | "Java" | "MySQL" | "Angular" | "NodeJS" | "ExpressJS" | "MongoDB" | "Django" | "Ruby on Rails" | "PHP" | "Laravel" | "VueJS" | "Svelte" | "NextJS" | "GatsbyJS" | "GraphQL" | "Apollo Client" | "Redux" | "MobX" | "RxJS" | "Webpack" | "Babel" | "ESLint" | "Prettier" | "Jest" | "Mocha" | "Chai" | "Cypress" | "Selenium" | "Docker" | "Kubernetes" | "AWS" | "Azure" | "Google Cloud Platform" | 
"Firebase" | "Heroku" | "Netlify" | "Vercel" | "Git" | "GitHub" | "GitLab" | "Bitbucket" | "Jira" | "Trello" | "Asana" | "Slack" | "Microsoft Teams" | "Zoom" | "Google Meet" | "FastAPI" | "Python";

export default Project;



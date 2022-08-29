# Exercise 11.1

## Discuss the following points about CI/CD

- Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by google.

In python, the current most popular linters are pylint and flake8, testing has unittest, pytest and doctest, build tools have pybuilder.

- What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask google!

CircleCI, Gitlab CI, Azure pipelines, Buildkit

- Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?

This setup, like many others, is better suited to having a cloud-based environment. Having a simpler workflow means it is less prone to error, especially when those who are in this course are just learning. The most obvious drawback is cost, but most cloud services provide free tiers for smaller projects, and github actions is completely free for public repositories at this time.

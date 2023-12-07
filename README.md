# Game Project

My project is to create a game using HTML, CSS and Typescript. I decided to create a quiz game to use as revision tool for students.

## Table of Contents

1. HTML Structure
2. SCSS Structure
3. TypeScript

## HTML Structure

The HTML Structure is made of head tag with links to the scss as well as the different font I added.

The script link is in the body before the main tag.

The main tag contains different divs to represent four key pages: start of quiz page, category page, questions page and end of quiz page.

## SCSS structure

I have a different SCSS pages that feed into my main: variables (for colours and font), start(for start of quiz page), categories, questions page and end of quiz. The scss in these is focused on styling the layout so it is uniform and look good on different devices.

## Typescript

I created a seperate Typescript file for the quiz questions. They have a type alias and different objects depending on the category : Grammar and Maths. These are they imported into my main.ts file.

The main functions for the quiz game to work are:

** The Choose Category function
** The Timer Function = countDown()
** The startQuiz function 
** The Checking Answers function
** The Next Button function
** The Home Button function = restartQuiz()

The global variables are important for the game to run smoothly.

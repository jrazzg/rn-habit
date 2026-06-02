# Habit Tracker App (Local)

A beginner-friendly React Native app that lets users create daily habits, mark them as completed, and track their progress over time. It’s local only → habit data is stored in memory or optionally in AsyncStorage, with no backend required.

## Features

* Create and manage daily habits
* Mark habits as completed for the current day
* Track current and longest streaks
* View habit details and completion history
* Save habit data locally using AsyncStorage (optional)
* Navigate between Home → Habit Details → Statistics

## Learning Goals

* Practice React Navigation with Stack and optional Tab navigation
* Manage shared state using useState and Context API
* Work with dates and streak calculations
* Implement CRUD operations (Create, Read, Update, Delete)
* Persist data locally using AsyncStorage
* Display progress and statistics using React Native components

## Screens

### Home Screen

* View all active habits
* See today's completion progress
* Add a new habit
* Navigate to habit details

### Add Habit Screen

* Create a new habit
* Enter habit name and optional category
* Save habit and return to Home

### Habit Details Screen

* View habit information
* Mark habit as completed for today
* View current and longest streak
* Edit or delete a habit

### Statistics Screen

* View total habits
* View completion rate
* View best streaks
* Track overall progress

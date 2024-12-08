# TODO-App
This Todo App allows users to efficiently manage their tasks. The app offers functionalities such as adding, editing, marking as complete, and deleting tasks, all while maintaining an organized and intuitive interface. Here's a breakdown of the app:

# Key Features:
# Add New Tasks:
  Users can add new tasks through an input field. The task text is entered, and upon submission, the task gets added to the list.
  If the input is empty, a notification alerts the user to enter a valid task.
  
# Task List:
  Tasks are displayed in a list format with each item containing the task text and options to mark as complete, edit, or delete.
  Each task can be marked as complete by checking a checkbox next to it. When completed, the task text is crossed out, indicating its completion status.

# Task Completion Toggle:
  Users can toggle the completion of a task by clicking a checkbox next to it. This action visually strikes through the task text and changes its appearance to indicate its     status.
  The completion status is saved, so when the page is reloaded, the status persists.
  
# Edit Tasks:
  Each task can be edited by clicking the edit button, which loads the task's text into the input field. The task is then removed from the list and can be updated with new      text.
  After editing, the updated task is saved to the list.
  
# Delete Tasks:
  Tasks can be deleted using the delete button next to each task. Upon deletion, the task is removed from the list, and a notification is shown to inform the user of the        deleted task.
  
# Progress Tracker:
  A progress bar displays the percentage of completed tasks. The progress bar is dynamically updated as tasks are marked as complete or incomplete.
  The number of completed tasks and total tasks are displayed, giving users a clear overview of their progress.
  
# Notifications:
  The app shows notifications for actions like adding, editing, or deleting tasks. These notifications are temporary, disappearing after a few seconds.
  Notifications provide feedback to the user, such as "Todo added successfully" or "Todo deleted."
  
# Persistent Data:
  The app uses localStorage to persist tasks across page reloads, so tasks remain stored even after the page is refreshed or closed and reopened.
  The app retrieves tasks from localStorage on load and updates the list accordingly.
  Technologies Used:
  HTML/CSS for structuring and styling the app's user interface.
  JavaScript for managing task functionality such as adding, deleting, editing, and updating tasks, as well as managing progress and storing data.
  localStorage for saving tasks between page reloads, ensuring users' tasks are not lost.
  User Interface (UI):
  The design uses a minimalistic and modern look with accent colors for interaction elements like buttons and checkboxes.
  The layout is responsive, ensuring the app works on different screen sizes, including mobile devices and desktops.
  The app is user-friendly, with intuitive icons (edit, delete, check) and clear feedback messages for actions.

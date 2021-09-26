## Commands to run for testing on dev environment

### Setup Commands

If you don't have yarn installed -- run `npm install yarn -g`

Use `yarn install` to download all of the dependencies needed to run the web app

Use `yarn start` to start the application

## List of Goals

If you aren't sure where to look for to find the task, run

### Task 0:

The Navigation Bar should be up and running but it's having a weird bug... for some reason when you click the button it isn't doing anything. Can you look into how to make sure the list opens properly?
This might be useful: https://material-ui.com/components/menus/
For the above link, you can look at direct code examples by clicking the `<>` icon under each example

### Task 1:

Hmm, I'm not a big fan of the color on the menu. Could you pick another color to change it to?
_note_ this is a pure css task

### Task 2:

Users should be able to navigate back to the main page but right now they can't. Could you add a button to the Navigation bar that directs them back to the home page?

### Task 3:

Right now employees can add menu items correctly but the menu will only close when they add an item... can you add a button for them to close out of the popup?

### Task 4:

Right now when users are selecting items with the checkboxes, they aren't actually being selected properly... We want the users to be able to select specific menu items. The items should be added to the state so customers will be able to place an order after! This will also allow employees to delete certain items off the menu!

### Task 5:

It seems like our delete button for employees isn't working! When items are selected, the delete button shows up but it isn't doing anything. Can you look into how that can be fixed?

### Task 6:

We want users to be able to place orders after selecting items and for it to be stored in redux. Can you add a button for placing orders for placing orders? Make sure to include a popup/modal for adding their name!

### Task 7:

OH NO! TECH DEBT! Some idiot (it was me :( ) wrote some unpolished code and we should fix it up!
Someone left some of the components to be rendered in line or through a normal function. Let's change those both into functional components to it's easier to read/understand!

### Task 8:

Can you create a page for the customers to view the orders they've placed

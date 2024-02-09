const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul'); // Assuming your unordered list has the tag <ul>

button.addEventListener('click', () => {
  if (input.value !== '') {
    // Create li element
    const li = document.createElement('li');

    // Create delete button
    const deleteButton = document.createElement('button');

    // Populate li element with input value
    li.textContent = input.value;

    // Populate delete button with ❌
    deleteButton.textContent = '❌';

    // Append li element with delete button
    li.append(deleteButton);

    // Append li element to the unordered list in HTML
    list.append(li);

    // Add event listener to the delete button
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    // Send focus to the input element
    input.focus();

    // Clear the input value
    input.value = '';
  } else {
    // Handle the case where the input is blank
    // You could provide a message or do nothing
    // For now, just focusing on the input field
    input.focus();
  }
});
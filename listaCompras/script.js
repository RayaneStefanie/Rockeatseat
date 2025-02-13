document.addEventListener('DOMContentLoaded', () => {
  const itemInput = document.getElementById('new-item'); // ID do seu input
  const addButton = document.getElementById('add-button'); // ID do seu botão
  const itemList = document.getElementById('item-list'); // ID da sua lista
  const notification = document.getElementById('notification');
  const closeNotification = document.getElementById('close-notification');

  addButton.addEventListener('click', addItem);
  closeNotification.addEventListener('click', () => {
    notification.style.display = 'none';
  });

  function addItem() {
    const itemText = itemInput.value.trim();

    if (itemText !== '') {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
                <input type="checkbox">
                <span>${itemText}</span>
                <button class="delete-button">
                <img id="trash-icon" src="assets/trash.svg" alt="Imagem lixeira">
                </button>
            `;

      itemList.appendChild(listItem);
      itemInput.value = '';

      listItem.querySelector('.delete-button').addEventListener('click', () => {
        listItem.remove();
        showNotification();
      });
    }
  }

  function showNotification() {
    notification.style.display = 'flex';
  }
});
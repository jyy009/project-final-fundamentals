import "./styles.css";

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const template = document.getElementById('my-template').content;
  
    const data = [
      { name: 'WebFontFre', description: 'Description for John' },
      { name: 'Jane Smith', description: 'Description for Jane' },
      { name: 'Alice Johnson', description: 'Description for Alice' },
      { name: 'Bob Brown', description: 'Description for Bob'},
    ];
  
    data.forEach(item => {
      const clone = document.importNode(template, true);
      clone.querySelector('.item-title').textContent = item.name;
      clone.querySelector('.item-description').textContent = item.description;
      container.appendChild(clone);
    });
  });
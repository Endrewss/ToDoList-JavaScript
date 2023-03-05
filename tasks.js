export class TaskList {
  list = [];
  ul;

  constructor(zawarudo) {
    this.ul = zawarudo;
    this.read();
    this.render();
  }

  save() {
    localStorage.setItem('tasks-js', JSON.stringify(this.list));
  }

  read() {
    var saved = localStorage.getItem('tasks-js');
    if (saved) {
      this.list = JSON.parse(saved);
    }
  }

  render() {
    this.ul.innerHTML = '';
    this.list.forEach((task) => {
      const li = document.createElement('li');
      li.className = 'mt-2';
      const button = document.createElement('button');
      button.className = 'ms-2 btn btn-danger btn-sm';
      button.innerText = '-';
      button.addEventListener('click', () => {
        this.remove(task);
      });
      li.innerText = task;
      li.appendChild(button);
      this.ul.appendChild(li);
    });
  }

  add(task) {
    this.list.push(task);
    this.save();
    this.render();
  }

  remove(task) {
    var rm = this.list.indexOf(task);
    if (rm >= 0) {
      this.list.splice(rm, 1);
      this.save();
      this.render();
    }
  }
}

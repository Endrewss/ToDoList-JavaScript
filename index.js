import { TaskList } from './tasks';

const ul = document.getElementById('task__list');
const button = document.getElementById('task__input__button');
const input = document.getElementById('task__input');

var tarefa = new TaskList(ul);
button.addEventListener('click', () => {
  var task = input.value;
  input.value = '';
  tarefa.add(task);
});

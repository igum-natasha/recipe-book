import {Component} from "@angular/core";
// import {TodoService} from '../todo.service';

@Component({
  selector: 'tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})

export class Tab1Component {
  public todos = ["2 packets Milk Chocolate",
                  "¾ cup all-purpose flour",
                  "½ teaspoon baking soda",
                  "½ teaspoon baking powder",
                  "¼ teaspoon salt",
                  "½ cup applesauce",
                  "½ cup plain low-fat Greek yogurt",
                  "⅓ cup white sugar",
                  "1 egg",
                  "¾ teaspoon vanilla extract",
                  "½ cup dark chocolate chips"];
  public count = 0;

  get items() {
    return this.todos;
  }

  addTodo(todo: string) {
    this.count += 1;
    var keys = Object.keys(localStorage), i = 0, key, flag = false;

    for (; key = keys[i]; i++) {
        if (todo === localStorage.getItem(key)) {
        flag = true;
        break;
        }
    }
    if (!flag) {
      localStorage.setItem(this.count+"", todo);
      console.log(this.count, todo);
    }
  }
}

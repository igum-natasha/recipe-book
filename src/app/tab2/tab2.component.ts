import {Component} from "@angular/core";

@Component({
  selector: 'tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css']
})
export class Tab2Component {
  public todos = ["1 cup rolled oats",
                  "1 cup all-purpose flour",
                  "1 tablespoon rolled oats",
                  "½ cup chopped walnuts",
                  "1 teaspoon baking soda",
                  "1 teaspoon baking powder",
                  "¼ teaspoon ground cinnamon",
                  "½ teaspoon salt",
                  "½ cup butter, softened",
                  "1 cup white sugar",
                  "2 eggs",
                  "1 cup mashed ripe banana",
                  "1 teaspoon vanilla extract",
                  "½ cup sour cream",
                  "⅓ cup rolled oats",
                  "4 tablespoons brown sugar",
                  "¼ teaspoon ground cinnamon",
                  "2 tablespoons butter, chilled",
                  "¼ cup chopped walnuts"];
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

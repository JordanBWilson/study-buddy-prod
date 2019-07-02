import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Skill Trade';

  IsLogin = false;
  isLogoVisible = true;

  componentAdded(event) {

    if (event.page === 'Landing') {

      this.isLogoVisible = false;
    }
    else {
      this.isLogoVisible = true;
    }
  }
}

  //git commands
  //git init <-- starts looking for new changes. used before you work
  //git add . <-- grabs all the new stuff
  //git commit -m "first commit"
  //git push -u origin master

  //ng generate component _Name_<-- make a new component

  //git publish commands
  //ng build --prod --base-href "/skill-trade/"
  //npx ngh --name="JordanBWilson" --email=jordanblairwilson@gmail.com --no-silent --dir=dist/skill-trade

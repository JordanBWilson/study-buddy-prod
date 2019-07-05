import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Study Buddy';
  isLogoVisible = false;

  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetGlobalNavigation);
  }

  componentAdded(event) {

    if (event.page === 'Landing') {

      this.isLogoVisible = false;
    }
    else {
      this.isLogoVisible = true;
    }
  }

}

@Component({
  selector: 'bottom-sheet-navi',
  templateUrl: 'app-global-navigation.html',
})
export class BottomSheetGlobalNavigation {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetGlobalNavigation>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

  //git commands
  //git init <-- starts looking for new changes. used before you work
  //git add . <-- grabs all the new stuff
  //git commit -m "first commit"
  //git push -u origin master

  //ng generate component _Name_<-- make a new component

  //git publish commands
  // update the git config file. the path... '<project_root>/.git/config'
  // add something to the effect of url = https://JordanBWilson:Hungary69@github.com/JordanBWilson/study-buddy.git
  //ng build --prod --base-href "/study-buddy/"
  //npx ngh --name="JordanBWilson" --email=jordanblairwilson@gmail.com --no-silent --dir=dist/study-buddy

import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-bottom-sheet-navi',
  templateUrl: 'app-global-navigation.html',
})
export class BottomSheetGlobalNavigationComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetGlobalNavigationComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Study Buddy';
  isLogoVisible = false;
  isNavVisible = false;
  // routerMarginTop = 0;

  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetGlobalNavigationComponent);
  }

  componentAdded(event) {

    if (event.page === 'Landing') {

      this.isLogoVisible = false;
    } else {
      this.isLogoVisible = true;
    }

    this.isNavVisible = true;

    // this.routerMarginTop = 0;

    // setTimeout(() => {
    //   this.routerMarginTop = document.getElementById('router-wrapper').clientHeight;
    //   console.log(this.routerMarginTop);
    // }, 0);
  }

}



  // git commands
  // git init <-- starts looking for new changes. used before you work
  // git add . <-- grabs all the new stuff
  // git commit -m "first commit"
  // git push -u origin master

  // ng generate component _Name_<-- make a new component

  // git publish commands
  // update the git config file. the path... '<project_root>/.git/config'
  // add something to the effect of url = https://JordanBWilson:Hungary69@github.com/JordanBWilson/study-buddy.git
  // ng build --prod --base-href "/study-buddy-prod/"
  // npx ngh --name="JordanBWilson" --email=jordanblairwilson@gmail.com --no-silent --dir=dist/study-buddy-prod

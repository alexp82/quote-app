import {Component} from "@angular/core";
import {FavoritesPage} from "../favorites/favorites";
import {LibraryPage} from "../library/library";
import {SettingsPage} from "../settings/settings";

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
        <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
        <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
        <ion-tab [root]="settingsPage" tabTitle="Settings" tabIcon="settings"></ion-tab>
    </ion-tabs>  
  `
})
export class TabsPage {
  favoritesPage = FavoritesPage;
  libraryPage = LibraryPage;
  settingsPage = SettingsPage;
}

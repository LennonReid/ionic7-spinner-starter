import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule, LoadingController } from "@ionic/angular";
import * as moment from "moment";

@Component({
  selector: "app-home",
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button [defaultHref]="'/home'"></ion-back-button>
        </ion-buttons>
        <ion-title>
          Ionic Spinner Starter
        </ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="toggleMenu()">
            <ion-icon name="menu-outline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-list>
        <ion-item>
          <ion-input label="Message" [(ngModel)]="message"></ion-input>
        </ion-item>
        <ion-item>
          <ion-input label="Duration" [(ngModel)]="duration"></ion-input>
        </ion-item>

        <ion-item>
          <ion-select
            label="Spinner"
            [(ngModel)]="selectedSpinner"
            (ionChange)="onSpinnerChanged()"
          >
            <ion-select-option
              *ngFor="let spinner of spinners"
              [value]="spinner"
              >{{ spinner }}</ion-select-option
            >
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-select
            label="Color"
            [color]="selectedColor"
            [(ngModel)]="selectedColor"
            (ionChange)="onColorChanged()"
          >
            <ion-select-option
              [ngClass]="'ion-text-color-' + color"
              *ngFor="let color of colors"
              [value]="color"
              >{{ color }}</ion-select-option
            >
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-toggle label="ShowBackdrop" [(ngModel)]="showBackdrop"
            >{{
              showBackdrop ? "Enabled" : "Disabled"
            }}
            ShowBackdrop</ion-toggle
          >
        </ion-item>
        <ion-item>
          <ion-toggle label="BackdropDismiss" [(ngModel)]="backdropDismiss"
            >{{
              backdropDismiss ? "Enabled" : "Disabled"
            }}
            backdropDismiss</ion-toggle
          >
        </ion-item>

        <ion-item>
          <ion-toggle label="Translucent" [(ngModel)]="translucent"
            >{{ translucent ? "Enabled" : "Disabled" }} Translucent</ion-toggle
          >
        </ion-item>
        <ion-item>
          <ion-toggle label="Animated" [(ngModel)]="animated"
            >{{ animated ? "Enabled" : "Disabled" }} Animated</ion-toggle
          >
        </ion-item>
      </ion-list>

      <ion-button expand="full" (click)="testSpinner()" color="primary">
        Test Spinner
      </ion-button>

      <div class="spinner-container" *ngIf="loading">
        <ion-spinner
          [name]="selectedSpinner"
          [color]="selectedColor"
        ></ion-spinner>
      </div>
    </ion-content>

    <ion-footer [translucent]="true">
      <ion-toolbar>
        <ion-title>
          {{ today }}
        </ion-title>
      </ion-toolbar>
    </ion-footer>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class HomePage {
  message = void 0;
  // ms
  duration = void 0;
  selectedSpinner: any = "lines-small";
  selectedColor = "success";
  spinners = [
    "lines-small",
    "lines-sharp",
    "lines-sharp-small",
    "bubbles",
    "circles",
    "crescent",
    "dots",
    "lines",
  ];
  colors = [
    "primary",
    "secondary",
    "tertiary",
    "success",
    "warning",
    "danger",
    "light",
    "medium",
    "dark",
  ];
  today = moment().format("MMM Do YYYY");
  loading = false;
  translucent = false;
  animated = false;
  backdropDismiss = true;
  showBackdrop = true;
  constructor(private loadingController: LoadingController) { }

  onSpinnerChanged() {
    // Handle spinner change
  }

  onColorChanged() {
    // Handle color change
  }

  testSpinner() {
    this.loading = true;
    this.presentLoading();
  }

  async presentLoading() {
    const {
      message,
      duration,
      showBackdrop,
      backdropDismiss,
      animated,
      translucent,
    } = this;
    const loading = await this.loadingController.create({
      spinner: this.selectedSpinner,
      message,
      duration,
      showBackdrop,
      backdropDismiss,
      animated,
      translucent,
      cssClass: `ion-loading-color-${this.selectedColor}`,
    });
    await loading.present();
    loading.onDidDismiss().then(() => {
      this.loading = false;
    });
  }

  toggleMenu() {
    // Implement menu toggle logic here
  }
}

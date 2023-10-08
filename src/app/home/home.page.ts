import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule, LoadingController, NavController } from "@ionic/angular";
import * as moment from "moment";
import { IonicSelectableModalComponent } from "../components/ionic-selectable/ionic-selectable-modal.component";
import { IonicSelectableComponent } from "../components/ionic-selectable/ionic-selectable.component";
// import { IonicSelectableModalComponent, IonicSelectableComponent } from "../aa/components/ionic-selectable/ionic-selectable.module";

import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';
import { RouterModule } from "@angular/router";
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
                <ion-label>请选择设备</ion-label>
                <ionic-selectable
                #selectable
                  [isMultiple]="true"
                  [items]="equipmentOptions"
                  itemValueField="equipmentId"
                  itemTextField="equipmentName"
                  [canSearch]="true"
                  (click)="openModal(selectable)"
                  (onOpen)="openModal()"
                >
                dfasfas
                </ionic-selectable>
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
      <ion-button expand="full" (click)="goChild()" color="primary">
        Go Child
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
  imports: [CommonModule, FormsModule, RouterModule, IonicModule, IonicSelectableModalComponent, IonicSelectableComponent],
})
export class HomePage {
  equipmentOptions = [
    {
      "searchValue": null,
      "createBy": null,
      "createTime": "2022-05-29 16:08:14",
      "updateBy": null,
      "updateTime": "2023-03-26 20:45:23",
      "remark": null,
      "params": {},
      "parentName": null,
      "parentId": null,
      "orderNum": null,
      "ancestors": null,
      "children": [],
      "equipmentId": 3,
      "equipmentCode": "CNC-1",
      "equipmentName": "13号线OP10",
      "model": "640",
      "brand": "Mazak",
      "maintenanceDate": null,
      "maintenacePeriod": null,
      "equipmentType": "cnc",
      "costCenterId": null,
      "tag": "机加工,13号线,4车间,关键工位",
      "measuringToolConfig": "{\"Volt\": 15, \"Carbon\": 15, \"Energy\": 15, \"Status\": 35, \"ToolNo\": 35, \"BatchNo\": 35, \"Current\": 15, \"FeedLoad\": 35, \"FeedRate\": 35, \"FeedSpeed\": 35, \"PartCount\": 44, \"PartPattern\": 35, \"ProgramName\": 35, \"SpindleLoad\": 35, \"SpindleRate\": 35, \"SpindleSpeed\": 35}"
    },
    {
      "searchValue": null,
      "createBy": null,
      "createTime": "2022-05-29 16:08:54",
      "updateBy": null,
      "updateTime": "2022-12-21 14:35:11",
      "remark": null,
      "params": {},
      "parentName": null,
      "parentId": null,
      "orderNum": null,
      "ancestors": null,
      "children": [],
      "equipmentId": 4,
      "equipmentCode": "CNC-2",
      "equipmentName": "13号线OP20-1",
      "model": "Matrix",
      "brand": "Mazak",
      "maintenanceDate": null,
      "maintenacePeriod": null,
      "equipmentType": "cnc",
      "costCenterId": null,
      "tag": "机加工,13号线,4车间",
      "measuringToolConfig": "{\"Volt\": 16, \"Carbon\": 16, \"Energy\": 16, \"Status\": 36, \"ToolNo\": 36, \"BatchNo\": 36, \"Current\": 16, \"FeedLoad\": 36, \"FeedRate\": 36, \"FeedSpeed\": 36, \"PartCount\": 45, \"PartPattern\": 36, \"ProgramName\": 36, \"SpindleLoad\": 36, \"SpindleRate\": 36, \"SpindleSpeed\": 36}"
    }]
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
  constructor(
    private loadingController: LoadingController,
    private navController: NavController
  ) { }

  openModal(selectable?: any) {
    alert(selectable)
  }
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
  goChild() {
    this.navController.navigateForward(['home/child'], { replaceUrl: true });

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
  ngOnInit(): void {
    if (Capacitor.getPlatform() === 'android') {
      this.registerAndroidListener();
    }
  }
  registerAndroidListener() {
    App.addListener('backButton', (data) => {
      console.log(data.canGoBack);
      alert(data.canGoBack);
      if (data.canGoBack) window.history.back();
      else App.exitApp();
    });
  }
}

import { Injectable } from '@angular/core';

import {
  AdMobFree,
  AdMobFreeBannerConfig,
  AdMobFreeInterstitialConfig
} from '@ionic-native/admob-free/ngx';
import { Platform } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AddmobfreeService {
  interstitialConfig: AdMobFreeInterstitialConfig = {
    isTesting: true, // Remove in production
    autoShow: false,
    id: "ca-app-pub-9091655087790369/5320379980"
};
  constructor(private admobFree: AdMobFree,
    public platform: Platform) {




     }

}

package com.ninetime;

import static com.ninetime.headless.ScreenStatusChangReceiver.SCREEN_STATUS_KEY;
// import org.pgsqlite.SQLitePluginPackage;

import android.app.Application;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.common.LongArray;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactNativeHost;
import com.facebook.soloader.SoLoader;
import com.ninetime.headless.NineTimeTaskService;
import com.ninetime.headless.ScreenStatusChangReceiver;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new DefaultReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
            // Add Alarm Native Module
           packages.add(new AlarmPackage());
          //  packages.add(new SQLitePluginPackage());
          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }

        @Override
        protected boolean isNewArchEnabled() {
          return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
        }

        @Override
        protected Boolean isHermesEnabled() {
          return BuildConfig.IS_HERMES_ENABLED;
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for this app.
      DefaultNewArchitectureEntryPoint.load();
    }
    ReactNativeFlipper.initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
    // Start NineTime Task Service
    initializeNineTimeService();

    initializeNotification();
  }

  private void initializeNineTimeService() {
      Intent service = new Intent(this, NineTimeTaskService.class);
      Bundle bundle = new Bundle();

      bundle.putBoolean(SCREEN_STATUS_KEY, true);
      service.putExtras(bundle);

      IntentFilter intentFilter = new IntentFilter(Intent.ACTION_SCREEN_ON);
      intentFilter.addAction(Intent.ACTION_SCREEN_OFF);

      registerReceiver(new ScreenStatusChangReceiver(), intentFilter);

      this.startService(service);
  }

  private void initializeNotification() {
      NotificationManager manager = (NotificationManager) getSystemService(NOTIFICATION_SERVICE);

      if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
          NotificationChannel channel = new NotificationChannel("NINE_TIME_NOTIFICATION_CHANNEL", "9Time", NotificationManager.IMPORTANCE_DEFAULT);
          // 채널에 대한 각종 설정(불빛, 진동 등)
          channel.enableLights(true);
          channel.setLightColor(Color.BLUE);
          channel.enableVibration(true);
          channel.setVibrationPattern(new long[] {100L, 200L, 300L});
          // 시스템에 notificationChannel 등록
          manager.createNotificationChannel(channel);
      }
  }
}

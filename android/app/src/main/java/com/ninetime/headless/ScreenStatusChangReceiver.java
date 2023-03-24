package com.ninetime.headless;

import android.app.ActivityManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.hardware.display.DisplayManager;
import android.os.Build;
import android.os.PowerManager;
import android.util.Log;
import android.view.Display;

import com.facebook.react.HeadlessJsTaskService;

import java.util.List;

public class ScreenStatusChangReceiver extends BroadcastReceiver {

    public static String SCREEN_STATUS_KEY = "screenWaked";

    @Override
    public void onReceive(final Context context, final Intent intent) {
        // Background Service 인 경우만 실행함
        if(!isAppOnForeground(context)) {
            boolean screenWaked = isScreenWaked(context);
            Intent serviceIntent = new Intent(context, NineTimeTaskService.class);
            serviceIntent.putExtra(SCREEN_STATUS_KEY, screenWaked);
            context.startService(serviceIntent);
            HeadlessJsTaskService.acquireWakeLockNow(context);
        }
    }

    private boolean isAppOnForeground(final Context context) {
        ActivityManager activityManager = (ActivityManager) context.getSystemService(Context.ACTIVITY_SERVICE);
        List<ActivityManager.RunningAppProcessInfo> appProcesses =
                activityManager.getRunningAppProcesses();
        if (appProcesses == null) {
            return false;
        }
        final String packageName = context.getPackageName();
        for (ActivityManager.RunningAppProcessInfo appProcess : appProcesses) {
            if (appProcess.importance ==
                    ActivityManager.RunningAppProcessInfo.IMPORTANCE_FOREGROUND &&
                    appProcess.processName.equals(packageName)) {
                return true;
            }
        }
        return false;
    }

    private boolean isScreenWaked(final Context context) {
        if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT_WATCH) {
            DisplayManager dm = (DisplayManager) context.getSystemService(Context.DISPLAY_SERVICE);
            boolean screenWaked = false;
            for(Display display: dm.getDisplays()) {
                if(display.getState() != Display.STATE_OFF){
                    screenWaked = true;
                }
            }
            return screenWaked;
        }else {
            PowerManager pm = (PowerManager) context.getSystemService(Context.POWER_SERVICE);
            return pm.isInteractive();
        }
    }
}

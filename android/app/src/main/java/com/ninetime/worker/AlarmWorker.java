package com.ninetime.worker;

import android.app.Activity;
import android.app.Notification;
import android.app.NotificationManager;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;

import androidx.annotation.NonNull;
import androidx.core.app.NotificationCompat;
import androidx.work.Worker;
import androidx.work.WorkerParameters;

import com.ninetime.MainActivity;
import com.ninetime.R;

public class AlarmWorker extends Worker {

    public static String WORKER_UNIQUE_ID = "ALARM_WORKER_KEY";

    public AlarmWorker(@NonNull Context context, @NonNull WorkerParameters workerParams) {
        super(context, workerParams);
    }

    @NonNull
    @Override
    public Result doWork() {

//        NotificationCompat.Builder notificationCompatBuilder;
//
//        if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
//            notificationCompatBuilder = new NotificationCompat.Builder(getApplicationContext(), "NINE_TIME_NOTIFICATION_CHANNEL");
//        }else{
//            notificationCompatBuilder = new NotificationCompat.Builder(getApplicationContext());
//        }
//
//        Notification notification = notificationCompatBuilder
//                .setWhen(System.currentTimeMillis())
//                .setSmallIcon(R.drawable.autofill_inline_suggestion_chip_background)
//                .setContentTitle("hello")
//                .setContentText("just message")
//                .setAutoCancel(true)
//                .build();
//
//        ((NotificationManager) getApplicationContext().getSystemService(Context.NOTIFICATION_SERVICE)).notify(0, notification);

        // Intent intent = new Intent(getApplicationContext(), MainActivity.class);
        Intent intent = new Intent(Intent.ACTION_VIEW);
        intent
                .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY)
//                .setAction(Intent.ACTION_SCREEN_ON)
//                .addCategory(Intent.CATEGORY_LAUNCHER)
                .setData(Uri.parse("nine-time://alert"));
        getApplicationContext().startActivity(intent);

//        Handler handler = new Handler(Looper.getMainLooper());
//        handler.postDelayed(new Runnable() {
//            @Override
//            public void run() {
//                Intent intent = new Intent(getApplicationContext(), MainActivity.class);
//                Intent intent = new Intent(Intent.ACTION_VIEW);
//                intent
//                        .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY)
//                        .addCategory(Intent.CATEGORY_LAUNCHER)
//                        .setData(Uri.parse("nine-time://alert"));
//                getApplicationContext().startActivity(intent);
//            }
//        }, 0);
        return Result.success();
    }
}
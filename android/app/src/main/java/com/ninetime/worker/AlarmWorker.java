package com.ninetime.worker;

import android.app.Notification;
import android.app.NotificationManager;
import android.content.Context;
import android.os.Build;

import androidx.annotation.NonNull;
import androidx.core.app.NotificationCompat;
import androidx.work.Worker;
import androidx.work.WorkerParameters;

import com.ninetime.R;

public class AlarmWorker extends Worker {

    public static String WORKER_UNIQUE_ID = "ALARM_WORKER_KEY";

    public AlarmWorker(@NonNull Context context, @NonNull WorkerParameters workerParams) {
        super(context, workerParams);
    }

    @NonNull
    @Override
    public Result doWork() {

        NotificationCompat.Builder notificationCompatBuilder;

        if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            notificationCompatBuilder = new NotificationCompat.Builder(getApplicationContext(), "NINE_TIME_NOTIFICATION_CHANNEL");
        }else{
            notificationCompatBuilder = new NotificationCompat.Builder(getApplicationContext());
        }

        Notification notification = notificationCompatBuilder
                .setWhen(System.currentTimeMillis())
                .setSmallIcon(R.drawable.autofill_inline_suggestion_chip_background)
                .setContentTitle("hello")
                .setContentText("just message")
                .setAutoCancel(true)
                .build();

        ((NotificationManager) getApplicationContext().getSystemService(Context.NOTIFICATION_SERVICE)).notify(0, notification);

        return null;
    }
}
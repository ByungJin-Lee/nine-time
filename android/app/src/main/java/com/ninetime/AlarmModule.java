package com.ninetime;

import androidx.annotation.NonNull;
import androidx.work.ExistingWorkPolicy;
import androidx.work.OneTimeWorkRequest;
import androidx.work.PeriodicWorkRequest;
import androidx.work.WorkManager;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.ninetime.worker.AlarmWorker;

import java.util.concurrent.TimeUnit;

public class AlarmModule extends ReactContextBaseJavaModule {

    public AlarmModule(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "Alarm";
    }

    @ReactMethod
    public void removeReservedAlarm() {
        WorkManager.getInstance(getReactApplicationContext()).cancelUniqueWork(AlarmWorker.WORKER_UNIQUE_ID);
    }

    @ReactMethod
    public void reserveAlarm(int afterSeconds) {
        // 먼저 예약된 알림을 삭제 한다.
        removeReservedAlarm();

        // 입력 받은 seconds 이후에 알림을 실행하는 요청을 생성.
        OneTimeWorkRequest request = new OneTimeWorkRequest.Builder(AlarmWorker.class)
                .setInitialDelay(afterSeconds, TimeUnit.SECONDS)
                .build();

        // 등록함.
        WorkManager.getInstance(getReactApplicationContext())
                .enqueueUniqueWork(AlarmWorker.WORKER_UNIQUE_ID, ExistingWorkPolicy.REPLACE, request);
    }

}

package com.ninetime.headless;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import androidx.annotation.Nullable;

import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;
import com.facebook.react.jstasks.HeadlessJsTaskRetryPolicy;
import com.facebook.react.jstasks.LinearCountingRetryPolicy;

public class NineTimeTaskService extends HeadlessJsTaskService {

    static private String TASK_SERVICE_NAME = "NINE_TIME_TASK_SERVICE";

    @Override
    protected @Nullable HeadlessJsTaskConfig getTaskConfig(Intent intent) {
        Bundle extras = intent.getExtras();

        if(extras != null) {
            HeadlessJsTaskRetryPolicy retryPolicy = new LinearCountingRetryPolicy(3, 1000);

            return new HeadlessJsTaskConfig(
                    TASK_SERVICE_NAME,
                    Arguments.fromBundle(extras),
                    5000,
                    true,
                    retryPolicy
            );
        }
        return null;
    }
}

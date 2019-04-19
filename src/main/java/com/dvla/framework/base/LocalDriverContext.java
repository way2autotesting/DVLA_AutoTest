package com.dvla.framework.base;

import org.openqa.selenium.remote.RemoteWebDriver;

/**
 * Created by Ibi Awesu-PC on 18/04/2019.
 */

public class LocalDriverContext {

    private static ThreadLocal<RemoteWebDriver> remoteWebDriverThreadLocal = new ThreadLocal<>();

    public static RemoteWebDriver getRemoteWebDriver() {

        return remoteWebDriverThreadLocal.get();
    }

    static void setRemoteWebDriverThreadLocal(RemoteWebDriver driverThreadLocal) {

        remoteWebDriverThreadLocal.set(driverThreadLocal);
    }
}

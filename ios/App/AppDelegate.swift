//
//  AppDelegate.swift
//  App
//
//  Created by M on 26/09/22.
//

import UIKit

var UNIVERSAL_LINK = "MUST CHANGE WHEN TAP UNIVERSAL LINK"

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
    
    var window: UIWindow?
    
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        return true
    }
    
    func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {
        guard userActivity.activityType == NSUserActivityTypeBrowsingWeb,
              let incomingURL = userActivity.webpageURL,
              let components = NSURLComponents(url: incomingURL, resolvingAgainstBaseURL: true) else {
          return false
        }
        
        UNIVERSAL_LINK = components.path ?? "NO_LINK"
        
        window?.rootViewController?.viewWillAppear(true)
        
        return false
    }
}

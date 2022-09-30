//
//  ViewController.swift
//  App
//
//  Created by M on 26/09/22.
//

import UIKit
import CoreLocation

class ViewController: UIViewController {
    @IBOutlet weak var label: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .red
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        label.text = UNIVERSAL_LINK
    }
}

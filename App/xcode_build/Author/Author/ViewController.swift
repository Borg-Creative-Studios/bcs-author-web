//
//  ViewController.swift
//  Author
//
//  Created by Jacob Borg on 3/16/22.
//
import Cocoa
import WebKit
import Foundation


class ViewController: NSViewController, NSApplicationDelegate, WKNavigationDelegate, WKUIDelegate, NSTextFieldDelegate {

    
    @IBOutlet var window: NSView!
    @IBOutlet weak var webView: WKWebView!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        webView.load(URLRequest(url: URL(string: "https://author.borgcreative.com/?utm_term=app")!))
    }

    override var representedObject: Any? {
        didSet {
        // Update the view, if already loaded.
        }
    }


}


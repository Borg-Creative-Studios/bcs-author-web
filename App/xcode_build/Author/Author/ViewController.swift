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
        webView.load(URLRequest(url: URL(string: "https://borg-creative-studios.github.io/fruity-website/2-0-1.html")!))
    }

    override var representedObject: Any? {
        didSet {
        // Update the view, if already loaded.
        }
    }


}


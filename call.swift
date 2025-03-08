import Foundation
import linphonesw

@objc
class LinphoneManager: NSObject {
override init() {
mCoreDelegate = CoreDelegateStub(
      onCallStateChanged: { (core: Core, call: Call, state: Call.State, message: String) in
        let callLog = call.callLog
        let callId = callLog?.callId
        self.callQualityMonitor.onCallStateChanged(state: state)
        print("\(state) : \(callId!)")
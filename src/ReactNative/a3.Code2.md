https://github.com/react-native-community/hooks#usekeyboard

import { useKeyboard } from '@react-native-community/hooks'

const keyboard = useKeyboard()

console.log('keyboard isKeyboardShow: ', keyboard.keyboardShown)
console.log('keyboard keyboardHeight: ', keyboard.keyboardHeight)

import { FlatList, Keyboard } from "react-native";

 const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      _keyboard.current = true;
      logInfo("count open keyboard no call remove() keyboard");
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      _keyboard.current = false;
    });
    return () => {
      logInfo("return () => {");
      showSubscription.remove();
      hideSubscription.remove();
    };
    
     <FlatList
          ...
          onScroll={() => {
            if (_keyboard.current) Keyboard.dismiss();
          }}
        />

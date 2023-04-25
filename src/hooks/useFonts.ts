import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();

const useFonts = () => {
  
    const [appIsReady, setAppIsReady] = useState(false);

    async function loadFonts() {
        try {
          await Font.loadAsync({
            'Actor-Regular': require('../../assets/fonts/Actor-Regular.ttf'),
          });
        } catch (e) {
          console.warn(e);
        } finally {
          setAppIsReady(true);
        }
      }
  
    useEffect(() => {
        loadFonts();
      }, []);
  
    useEffect(() => {
      hideSplashScreen();
    }, [appIsReady]);
  
    const hideSplashScreen = async() => {
      await SplashScreen.hideAsync();
    }
  
    if (!appIsReady) {
      return null;
    }

}

export default useFonts;


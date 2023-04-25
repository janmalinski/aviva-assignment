import RootNavigator from './src/navigation/RootNavigator';
import useFonts from './src/hooks/useFonts';

export default function App() {

  useFonts();

  return (
    <RootNavigator />
  );
};



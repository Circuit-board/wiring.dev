import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Information from './screens/Information';
import ad from './screens/ad';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Ad" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Information" component={Information} />
        <Stack.Screen name="Ad" component={ad} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
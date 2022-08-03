import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons'; 

import Intro from './src/screens/Intro/'
import Login from './src/screens/Auth/Login/'
import Recovery from './src/screens/Auth/Recovery/'
import SignUp from './src/screens/Auth/SignUp'
import HomeScreen from './src/screens/HomeScreen/'
import Settings from './src/screens/Settings/'
import Profile from './src/screens/Profile/'
import About from './src/screens/Profile/About/'
import History from './src/screens/Profile/History/'
import Quiz from './src/screens/Quiz/'
import Search from './src/screens/Search/'
import QuizQuestion from './src/screens/Quiz/QuizQuestion/'
import QuizResult from './src/screens/Quiz/QuizResult/'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()




function HomeTabs() {

  return (
    // <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case 'HomeScreen':
                iconName = 'book'
                break;
              case 'Profile':
                iconName = 'user'
                break;
              case 'Settings':
                iconName = 'cog'
                break;
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#82327E",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            height: 98,
            width: "99%",
            marginLeft: "0.5%",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderTopWidth: 1,
            borderTopColor: "gray",
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderColor: "gray",
            paddingTop: 25,
            paddingBottom: 25,
          }
        })}
        
      >
          <Tab.Screen name="HomeScreen" component={HomeScreen} options={{title: 'Quizzes', headerTitle: 'Hello,'}}/>
          <Tab.Screen name="Profile" component={Profile} options={{title: "Perfil"}}/>
          <Tab.Screen name="Settings" component={Settings} options={{title: 'Configs', headerTitle: "Configurações"}}/>
      </Tab.Navigator>
      // </NavigationContainer>
  )
}
export default function App(){
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Intro'>
        <Stack.Screen name="Intro" component={Intro} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerTitle: ""}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerTitle: "", headerBackImage: () => <AntDesign name="leftcircleo" size={32} color="lightgray" style={{left: 10}}/>, headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Recovery" component={Recovery} options={{headerTitle: "", headerBackImage: () => <AntDesign name="leftcircleo" size={32} color="lightgray" style={{left: 10}}/>, headerTitleAlign: 'center'}}/>
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{headerShown: false}}/>
        <Stack.Screen name="About" component={About} options={{title: "Sobre o app", headerBackImage: () => <AntDesign name="leftcircleo" size={32} color="lightgray" style={{left: 10}}/>, headerTitleAlign: 'center'}}/>
        <Stack.Screen name="History" component={History} options={{title: "Seu histórico", headerBackImage: () => <AntDesign name="leftcircleo" size={32} color="lightgray" style={{left: 10}}/>, headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Search" component={Search} options={{headerShown: false}} />
        <Stack.Screen name="Quiz" component={Quiz} options={{headerBackImage: () => <AntDesign name="leftcircleo" size={32} color="lightgray" style={{left: 10}}/>, headerTitleAlign: 'center'}}/>
        <Stack.Screen name="QuizQuestion" component={QuizQuestion} options={{headerBackImage: () => <AntDesign name="leftcircleo" size={32} color="lightgray" style={{left: 10}}/>, headerTitleAlign: 'center'}}/>
        <Stack.Screen name="QuizResult" component={QuizResult} options={{headerBackImage: () => <AntDesign name="leftcircleo" size={32} color="lightgray" style={{left: 10}}/>, headerTitleAlign: 'center', headerTitle: "Resultados"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

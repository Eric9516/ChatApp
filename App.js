import React, { createContext, useContext, useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { auth, onAuthStateChanged } from "firebase/auth";

import { Chat } from "./screens/Chat";
import { Login } from "./screens/Login";
import { SignUp } from "./screens/SignUp";
import { Home } from "./screens/Home";

const Stack = createStackNavigator();
const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return <AuthenticatedUserContext.Provider value={[user, setUser]}>{children}</AuthenticatedUserContext.Provider>;
};

const ChatStack = () => {
    return (
        <Stack.Navigator defaultScreenOptions={Home}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Chat de Paulina" component={Chat} />
        </Stack.Navigator>
    );
};

// const AuthStack = () => {
//     <Stack.Navigator defaultScreenOptions={Login}>
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Sign In" component={SignUp} />
//     </Stack.Navigator>;
// };

const RootNavigator = () => {
    // const { user, setUser } = useContext(AuthenticatedUserContext);
    // const [loading, setLoading] = useState(true);
	// useEffect(()=> {
	// 	const unsuscribe = onAuthStateChanged(auth => {
	// 		async au
	// 	})
	// })
    return (
        <NavigationContainer>
            <ChatStack />
        </NavigationContainer>
    );
};

export default function App() {
    return <RootNavigator />;
}

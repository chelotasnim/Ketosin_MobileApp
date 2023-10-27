import View from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Transit({ navigation }) {
    useEffect(() => {
        async function checkAuth() {
            const token = await AsyncStorage.getItem('auth_token');
            if (token == null) {
                navigation.replace('index');
            } else {
                navigation.replace('home');
            };
        };
        checkAuth();
    });

    return (
        <>
        </>
    )
}
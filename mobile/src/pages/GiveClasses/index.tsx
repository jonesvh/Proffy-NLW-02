import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

import giveClassesBgImage from '../../assets/images/give-classes-background.png'

function GiveClasses() {

    const { goBack } = useNavigation();

    function hadleNavigateBack() {
        goBack()
    }

    return (
            <View style={styles.container}>
                <ImageBackground resizeMode="contain" style={styles.content} source={giveClassesBgImage}>
                    <Text style={styles.title}>
                        Quer ser um Proffy?
                    </Text>
                    <Text style={styles.description}>
                        Para começar, você precisa se cadastrar com professor na nossa plataforma web.
                    </Text>
                </ImageBackground>

                <RectButton style={styles.okButton} onPress={hadleNavigateBack}>
                    <Text style={styles.okButtonText} >
                        Tudo bem
                    </Text>
                </RectButton>
            </View>
    )
}

export default GiveClasses;
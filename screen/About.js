import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import Icon from "react-native-vector-icons/Ionicons";

export default function About({ navigation }) {
    const [box_i, setDetail] = useState(0);

    return (
        <View>
            <TouchableWithoutFeedback onPressIn={() => { navigation.navigate("home") }}>
                <View style={styles.header}>
                    <Icon
                        name="chevron-back-outline"
                        size={20}
                    />
                    <Text style={styles.headerContent}>Tentang Ketosin</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={[styles.box, styles.boxDesc]}>
                <Text style={{ lineHeight: 20, fontSize: 13 }}>
                    Ketosin merupakan aplikasi mobile berplatform android yang dikembangkan untuk mencapai efisiensi waktu, biaya dan tenaga dalam proses pemilihan ketua osis masa jabatan baru.
                </Text>
            </View>
            <ScrollView style={styles.versionList}>
                <TouchableWithoutFeedback onPressIn={() => { setDetail(0) }}>
                    <View style={[styles.box, box_i === 0 && styles.activeBox]}>
                        <View style={styles.boxHeader}>
                            <Icon
                                name="radio-button-on-outline"
                            />
                            <Text style={styles.boxTitle}>Ketosin Versi 3.2.0</Text>
                        </View>
                        <View style={styles.boxContent}>
                            <Text style={styles.versionDesc}>Re-Build Web Service with Laravel 9 and Mobile App to Android 13</Text>
                            <View style={styles.versionCreds}>
                                <Icon
                                    name="settings-outline"
                                    color="rgb(150, 150, 150)"
                                    size={14}
                                />
                                <Text style={{ fontSize: 12, color: "rgb(150, 150, 150)" }}>RPL 14th Generation</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPressIn={() => { setDetail(1) }}>
                    <View style={[styles.box, box_i === 1 && styles.activeBox]}>
                        <View style={styles.boxHeader}>
                            <Icon
                                name="radio-button-off-outline"
                            />
                            <Text style={styles.boxTitle}>Ketosin Versi 3.0.2</Text>
                        </View>
                        <View style={styles.boxContent}>
                            <Text style={styles.versionDesc}>Re-Build to android 12 and using React Native</Text>
                            <View style={styles.versionCreds}>
                                <Icon
                                    name="settings-outline"
                                    color="rgb(150, 150, 150)"
                                    size={14}
                                />
                                <Text style={{ fontSize: 12, color: "rgb(150, 150, 150)" }}>RPL 13th Generation</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPressIn={() => { setDetail(2) }}>
                    <View style={[styles.box, box_i === 2 && styles.activeBox]}>
                        <View style={styles.boxHeader}>
                            <Icon
                                name="radio-button-off-outline"
                            />
                            <Text style={styles.boxTitle}>Ketosin Versi - - - - -</Text>
                        </View>
                        <View style={styles.boxContent}>
                            <Text style={styles.versionDesc}>Re-Build</Text>
                            <View style={styles.versionCreds}>
                                <Icon
                                    name="settings-outline"
                                    color="rgb(150, 150, 150)"
                                    size={14}
                                />
                                <Text style={{ fontSize: 12, color: "rgb(150, 150, 150)" }}>RPL 12th Generation</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPressIn={() => { setDetail(3) }}>
                    <View style={[styles.box, box_i === 3 && styles.activeBox]}>
                        <View style={styles.boxHeader}>
                            <Icon
                                name="radio-button-off-outline"
                            />
                            <Text style={styles.boxTitle}>Ketosin Versi - - - - -</Text>
                        </View>
                        <View style={styles.boxContent}>
                            <Text style={styles.versionDesc}>Re-Build to Android 10 and 11</Text>
                            <View style={styles.versionCreds}>
                                <Icon
                                    name="settings-outline"
                                    color="rgb(150, 150, 150)"
                                    size={14}
                                />
                                <Text style={{ fontSize: 12, color: "rgb(150, 150, 150)" }}>RPL 11th Generation</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPressIn={() => { setDetail(4) }}>
                    <View style={[styles.box, box_i === 4 && styles.activeBox]}>
                        <View style={styles.boxHeader}>
                            <Icon
                                name="radio-button-off-outline"
                            />
                            <Text style={styles.boxTitle}>Ketosin Versi - - - - -</Text>
                        </View>
                        <View style={styles.boxContent}>
                            <Text style={styles.versionDesc}>Re-Developed</Text>
                            <View style={styles.versionCreds}>
                                <Icon
                                    name="settings-outline"
                                    color="rgb(150, 150, 150)"
                                    size={14}
                                />
                                <Text style={{ fontSize: 12, color: "rgb(150, 150, 150)" }}>RPL 8th, 9th, 10th Generation</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPressIn={() => { setDetail(5) }}>
                    <View style={[styles.box, box_i === 5 && styles.activeBox]}>
                        <View style={styles.boxHeader}>
                            <Icon
                                name="radio-button-off-outline"
                            />
                            <Text style={styles.boxTitle}>Ketosin Versi - - - - -</Text>
                        </View>
                        <View style={styles.boxContent}>
                            <Text style={styles.versionDesc}>Developed</Text>
                            <View style={styles.versionCreds}>
                                <Icon
                                    name="settings-outline"
                                    color="rgb(150, 150, 150)"
                                    size={14}
                                />
                                <Text style={{ fontSize: 12, color: "rgb(150, 150, 150)" }}>RPL 7th Generation</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPressIn={() => { setDetail(6) }}>
                    <View style={[styles.box, box_i === 6 && styles.activeBox]}>
                        <View style={styles.boxHeader}>
                            <Icon
                                name="radio-button-off-outline"
                            />
                            <Text style={styles.boxTitle}>Ketosin Versi 1.0.0</Text>
                        </View>
                        <View style={styles.boxContent}>
                            <Text style={styles.versionDesc}>ORIGINAL Idea</Text>
                            <View style={styles.versionCreds}>
                                <Icon
                                    name="settings-outline"
                                    color="rgb(150, 150, 150)"
                                    size={14}
                                />
                                <Text style={{ fontSize: 12, color: "rgb(150, 150, 150)" }}>RPL 6th Generation</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgb(255, 255, 255)",
        gap: 8
    },
    headerContent: {
        fontSize: 16
    },
    versionList: {
        height: "100%",
        backgroundColor: "rgb(255, 255, 255)"
    },
    box: {
        padding: 16,
        maxHeight: 50,
        borderTopWidth: 1,
        borderTopColor: "rgb(245, 245, 245)",
        overflow: "hidden"
    },
    activeBox: {
        maxHeight: "100%",
        borderTopWidth: 0,
        backgroundColor: "rgb(245, 245, 250)"
    },
    boxDesc: {
        padding: 24,
        maxHeight: "100%",
        backgroundColor: "rgb(255, 255, 255)"
    },
    boxHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },
    boxContent: {
        padding: 12,
        paddingStart: 22,
    },
    versionDesc: {
        marginBottom: 24,
        lineHeight: 22
    },
    versionCreds: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    }
})
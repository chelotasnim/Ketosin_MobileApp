import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Box({ list, datas }) {
    return (
        <View style={styles.card}>
            <Text style={styles.label}>{datas.label}</Text>
            {
                list ?
                    <View>
                        {
                            datas.content.map((data) => {
                                return (
                                    <Text style={styles.content_text} key={data}>{data}</Text>
                                );
                            })
                        }
                    </View>
                    :
                    <Text style={styles.content_text}>{datas.content}</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        paddingHorizontal: 16,
        paddingBottom: 24,
        paddingTop: 12,
        marginBottom: 12,
        backgroundColor: "rgb(255, 255, 255)",
        borderRadius: 5,
        elevation: 1
    },
    label: {
        color: "rgb(150, 150, 150)"
    },
    content_text: {
        marginTop: 5,
        lineHeight: 20,
    }
})
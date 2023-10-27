import { StyleSheet, Dimensions } from "react-native";
import { React, Component } from "react";
import QRCodeScanner from "react-native-qrcode-scanner";

const SCREEN_HEIGHT = Dimensions.get("window").height;

class Token extends Component {
    constructor(props) {
        super(props);
    };

    readQr = e => {
        e != null ? this.props.navigation.navigate("vote") : Alert('Gagal');
    };

    render() {
        return (
            <QRCodeScanner
                onRead={this.readQr}
                reactivate={false}
                showMarker={true}
                markerStyle={{
                    borderColor: "white",
                    backgroundColor: "transparent",
                    borderRadius: 15,
                }}
                cameraStyle={{ height: SCREEN_HEIGHT }}
                cameraContainerStyle={{ backgroundColor: "black" }}
            />
        );
    };
};

export default Token;

const styles = StyleSheet.create({});

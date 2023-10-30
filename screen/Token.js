import { StyleSheet, Dimensions } from "react-native";
import { React, Component } from "react";
import QRCodeScanner from "react-native-qrcode-scanner";
import axios from "axios";
import { BASE_URL } from "../Config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SCREEN_HEIGHT = Dimensions.get("window").height;

class Token extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choose: null,
            token: ''
        };
    };

    componentDidMount() {
        this.getToken();
    };

    async getToken() {
        const token = await AsyncStorage.getItem('auth_token');
        this.setState({ token });

        const { route } = this.props;
        const choose = route.params.choose;
        this.setState({ choose });
    };

    readQr = async (e) => {
        axios.post(`${BASE_URL}kandidat/vote`, {
            id_kandidat: this.state.choose,
            qr_tps: e.data
        }, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.state.token}`
            }
        }).then(result => {
            this.props.navigation.replace('notif', { status: result.data.status, message: result.data.message });
        }).catch(err => console.log('err : ', err));
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

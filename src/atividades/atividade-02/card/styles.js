import {  StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'deepskyblue',
        borderWidth: RFPercentage(0.6),
        width: '90%',
        height: '30%',
        padding: 8,
        alignItems: 'center',
        borderRadius: 20,
    },
    titulo: {
        fontSize: RFPercentage(3),
        color: '#121212',
        fontWeight: 'bold',
        marginBottom: RFPercentage(1),

    },
    texto: {
        fontSize: RFPercentage(2.2),
        color: '#fafafa',
    },
    imagem: {
        height: RFPercentage(10),
        width: RFPercentage(28),

        resizeMode: 'center',
    },

});

export default styles;

import { StyleSheet } from "react-native";
import { RFPercentage } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF00',
    padding: 8,
    flex: 1,
    alignItems: 'center',
    borderRadius: 20,
  },
  titulo: {
      fontSize: RFPercentage(3),
      fontWeight: 'bold',
      borderWidth: 2,
      borderColor: '#FF0000',
      marginTop: 10,
      marginBottom: 10,
      padding: 8,
      width: '100%',
      height: 80,
      textAlign: 'center',
      textAlignVertical: 'center',
      borderRadius: 20,
  },
  texto: {
    fontSize: RFPercentage(2.2),
    color: '#000',
    borderRadius: 50,
    borderColor: '#FF0000',
    borderWidth: 10,
    marginTop: 100,
    marginBottom: 20,
    padding: 5,
    width: '100%',
    textAlign: 'center',
  }
});

export default styles;

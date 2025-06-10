import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    align
  },
  titulo: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    color: 'deepskyblue',
    marginVertical: RFValue(10),
    marginBottom: RFValue(20),
  },
  botao: {
    borderWidth: RFValue(1),
    borderColor: 'deepskyblue',
    borderRadius : RFValue(2),
    padding: RFValue(1),
    width: '80%',
    alignItems: 'center',
    padding: RFValue(5),

  },
 });

 export default styles;

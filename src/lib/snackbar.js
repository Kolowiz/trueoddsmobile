import Snackbar from 'react-native-snackbar';
import {Colors} from '../themes';

export default function ({message, title}) {
  Snackbar.show({
    title: message,
    duration: Snackbar.LENGTH_SHORT,
    textColor: '#EEEEEE',
    backgroundColor: Colors.screenColor,
    action: {
      title: title || 'CLOSE',
      textColor: Colors.secondaryColor,

      onPress: () => {
        /* Do Nothing. */
      },
    },
  });
}

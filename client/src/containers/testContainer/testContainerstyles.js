//sample container styles
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';


export default makeStyles((theme) => ({
    conTainer: {
      borderRadius: 15,
      backgroundColor: deepPurple[500],
      padding: '10px 50px',
    },
  }));
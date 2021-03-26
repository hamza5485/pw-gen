import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

export const cardRoot = {
    maxWidth: 1080,
    textAlign: '-webkit-center',
    margin: '1em',
    [theme.breakpoints.down('sm')]: {
        minWidth: 250
    },
    [theme.breakpoints.up('sm')]: {
        minWidth: 500
    },
    [theme.breakpoints.up('md')]: {
        minWidth: 800
    }
};

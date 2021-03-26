import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

export const cardRoot = {
    maxWidth: 1080,
    minWidth: 800,
    textAlign: '-webkit-center',
    margin: '1em',
    [theme.breakpoints.down('xs')]: {
        minWidth: 280
    }
};

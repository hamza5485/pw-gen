import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

export const cardRoot = {
    maxWidth: 1080,
    minWidth: 600,
    textAlign: '-webkit-center',
    margin: '1em',
    [theme.breakpoints.between('xs', 'sm')]: {
        minWidth: 280
    }
};

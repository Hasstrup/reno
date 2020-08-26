import {createUseStyles} from 'react-jss';

export const CompanyListItemStyles = createUseStyles({
    CardContainer: {
        padding: 0,
        '& .ant-card-body': {
            padding: '0 !important'
        },
        '& .ant-card-head': {
            height: '100px'
        }
    },
    HeaderImage: {
        height: '50px',
        borderRadius: '50%',
        width: '50px'
    },
    Divider: {
        margin: 0
    },
    Text: {
        textAlign: 'center',
        fontSize: '12px'
    },
    ImageContainer: {
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    IconContainer: {
        height: '20px',
        position: 'absolute',
        right: '5px'
    }
})
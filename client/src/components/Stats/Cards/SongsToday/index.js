import React from 'react';
import s from './index.module.css';
import API from '../../../../services/API';
import { Paper, Typography } from '@material-ui/core';
import cl from 'classnames';

class SongsToday extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stats: null,
        };
    }

    async componentDidMount() {
        const start = new Date();
        start.setHours(0, 0, 0);
        const end = new Date();

        const { data } = await API.listened_to(start, end);
        this.setState({
            stats: data,
        });
    }

    render() {
        const { user, className } = this.props;
        const { stats } = this.state;

        if (!stats) return null;

        return (
            <Paper className={cl(s.root, className)}>
                <Typography>You listened to </Typography>
                <Typography variant="h1">{stats.count}</Typography>
                <Typography>songs today</Typography>
            </Paper>
        )
    }
}

export default SongsToday;
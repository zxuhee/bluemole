import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
    state = {
        error: null,
        loading: true
    };

    async componentDidMount() {
        try {
            
        } catch {
            this.setState({
                error: "Can't find movies information"
            });
        } finally {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        const { error, loading} = this.state;
        console.log(this.state);
        return (
            <HomePresenter
                error={error}
                loading={loading}
            />
        );
    }
}
import React from "react";
import CareerPresenter from "./CareerPresenter";

export default class extends React.Component {
    state = {
        error: null,
        loading: true
    };

    async componentDidMount() {
        try {
        } catch {
            this.setState({error: "Can't find TV information"});
        } finally {
            this.setState({loading: false});
        }
    }
    
    render() {
        const { error, loading } = this.state;
        console.log(this.state);
        return (
            <CareerPresenter
                error={error}
                loading={loading}
            />
        );
    }
}
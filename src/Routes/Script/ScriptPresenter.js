import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
    padding: 0px 20px;
`;

const ScriptPresenter = ({nowPlaying, popular, upcoming, loading, error}) => loading ? <Loader /> :
    <Container>
        스크립트 페이지
        {error && <Message text={error} color="#e74c3c" />}
    </Container>;

ScriptPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default ScriptPresenter;
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
    padding: 0px 20px;
`;

const CareerPresenter = ({loading, error}) =>
    loading ? <Loader/> : 
    <Container>
        <Section title="커리어">
            내용~~
        </Section>
        {error && <Message text={error} color="#e74c3c" />}
    </Container>;

CareerPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default CareerPresenter;
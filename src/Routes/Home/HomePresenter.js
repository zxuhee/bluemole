import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import companyLogo from "resources/images/bluemole.png";
import companyVideo from "resources/video/video.mp4";

const Container = styled.div`
    padding: 0px 20px;
    text-align: center;
`;
const MainLogo = styled.img`
    width: 200px;
    height: 200px;
`;

const HomePresenter = ({nowPlaying, popular, upcoming, loading, error}) => loading ? <Loader /> :
    <Container>
        <div>
            <MainLogo src={companyLogo}/>
        </div>
        <div>
            <video muted autoPlay loop width="500px" height="500px">
                <source src={companyVideo} type="video/mp4" />
            </video>
        </div>
        {error && <Message text={error} color="#e74c3c" />}
    </Container>;

HomePresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter;
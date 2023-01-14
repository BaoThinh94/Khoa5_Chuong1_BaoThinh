import { Fragment } from "react";
import { render } from "react-dom";
import { Route } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import HomCarousel from "./Layout/HomeCarousel/HomCarousel";




export const HomeTemplates = (props) => {
    const { Component, ...restProp } = props;

    return <Route {...restProp} render={(propsRoute) => {
        return <Fragment>
            <Header {...propsRoute} />
            <Component {...propsRoute} />
            <Footer {...propsRoute} />
        </Fragment>
    }} />




}
import React, { Component } from 'react';
import axios from 'axios';
import TopBar from '../Components/TopBar/TopBar';
import ShopList from '../Components/ShopList/ShopList';
import Footer from '../Components/Footer/Footer';
import SideBar from '../Components/TopBar/SideBar';


export default class ToysPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            fetched: false
        }
    }

    componentDidMount = () => {
        axios.get('/Toys')
            .then(res => {
                const data = res.data;
                this.setState({
                    data,
                    fetched: true
                })
            })
    }

    render() {
        return ( 
            <div className="App">
                <SideBar pageWrapId={"mainpage"} outerContainerId={"MainPage"} />
                <div id="mainpage">
                    <TopBar />
                    <ShopList data={this.state.data} fetched={this.state.fetched}/>
                    <Footer />            
                </div>
            </div>

        )
    }
}
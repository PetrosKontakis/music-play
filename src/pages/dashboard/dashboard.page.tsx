import React from 'react';
import ListContainerComponent from '../../components/ListContainer/listContainer.component';
import HeaderComponet from '../../components/HeaderComponent/header.component';
import './dashboard.page.style.scss';
import backgroundImage from "../../images/main_bg.png"
/**
 * Name: DashboardPage 
 * Description: This component represent the main page and combines 
 *              all the apropriete components
 */
const DashbordPage: React.FC = () => {

    return (
        <div className="dashboard-page" style={{backgroundImage: `url(${backgroundImage})`}}>
            <HeaderComponet />
            <ListContainerComponent />
        </div>
    )
}


export default DashbordPage;

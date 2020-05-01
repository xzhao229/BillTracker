import React from "react";
import Layout from "./layout.component";
import BudgetCard from "../parts/budgetCard"
import ReminderCard from "../parts/reminderCard"
import SummaryCard from "../parts/summaryCard"
import StickyFooter from "./stickyfooter.component"


const currDate = (new Date().getMonth()+1)+'-'+new Date().getDate()

const Home = () => (
    <div>
        <Layout title = "Home Page"  date = {currDate} description="Use bill tracker to see bills and money in one place" />


        <div class="row d-flex justify-content-between">
            <div class="col d-flex justify-content-center" >
                <BudgetCard/>
            </div>
            <div class="col d-flex justify-content-center">
                <ReminderCard/>
            </div>
            <div class="col d-flex justify-content-center" >
                 <SummaryCard/>
            </div>

        </div>
        <StickyFooter/>

    </div>


        );


export default Home;

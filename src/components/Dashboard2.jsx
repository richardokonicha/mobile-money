import React from 'react';

const Dashboard = (props) => {
    return (
      
        <section>
        <nav>
            <h2>Welcome</h2>
            <button onClick={props.handleLogOut}>Logout</button>
        </nav>
        <div>
            this
            <h1>{props.user.email}</h1>
        </div>

        </section>
    );

};

export default Dashboard;
import React from 'react';

const InfoApp = () => {
    return (
        <div className="info-app">
            <p> This app retrieves some information about inhabitans of Brastlewark. You can look for a individual gnome
            if you know its name or you can try any name you think is in the list, and then cliking on the eye
            you will see its personal information.</p>

            <p> This app is built using React, Redux and Webpack tools. For more information about coding see
           <a href="https://github.com/ventoji/gnome-app" target="_blank" > GitHub repository </a> </p>
        </div>
    );
};

export default InfoApp;
import React, { useEffect } from "react";

const TitleChanger = () => {
    const skillNames = ['Graphic Designer', 'Front-End Developer'];
    // const text = document.querySelector('.text');

    const generator = function* () {
        var i = 0;
        while (true) {
            yield i++;
    
            if (i > 1) {
                i = 0;
            }
        }
    }
}
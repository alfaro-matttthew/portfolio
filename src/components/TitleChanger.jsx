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

    const textRef = React.useRef(null);

    const writeSkillName = (skill) => {
        let i = 0;
        textRef.current.innerHTML = "";
    
        let id = setInterval(() => {
            if (i >= skill.length) {
                deleteSkillName();
                clearInterval(id);
            } else {
                textRef.current.innerHTML += skill[i];
                i++;
            }
        }, 250);
    };

    const deleteSkillName = () => {
        let skill = textRef.current.innerHTML;
        let i = word.length - 1;

        let id = setInterval(() => {
            if (i >= 0) {
                textRef.current.innerHTML = textRef.current.innerHTML.substring(0, textRef.current.innerHTML.length - 1);
                i--;
            } else {
                writeSkillNames(skillNames[gen.next().value]);
                clearInterval(id);
            }
        }, 100);
    };

    useEffect(() => {
        const gen = generator();
        writeSkillNames(skillNames[gen.next().value]);
    }, []);

    return (
        <h1 ref={textRef} className="text stroke font-san-serif title lh-1 text-uppercase"></h1>
    )
};
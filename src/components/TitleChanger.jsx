import React, { useEffect } from "react";

export default function TitleChanger() {
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

    const writeSkillNames = (skill) => {
        let i = 0;
        textRef.current.innerHTML = "";
    
        let id = setInterval(() => {
            if (i >= skill.length) {
                let pause = setInterval(() => {
                    deleteSkillName();
                    clearInterval(pause);
                }, 3000);
                clearInterval(id);
            } else {
                textRef.current.innerHTML += skill[i];
                i++;
            }
        }, 100);
    };

    const deleteSkillName = () => {
        let skill = textRef.current.innerHTML;
        let i = skill.length - 1;  // Fix: use skill.length instead of word.length
    
        let id = setInterval(() => {
            if (i >= 0) {
                textRef.current.innerHTML = textRef.current.innerHTML.substring(0, textRef.current.innerHTML.length - 1);
                i--;
            } else {
                writeSkillNames(skillNames[gen.next().value]);
                clearInterval(id);
            }
        }, 40);
    };

    const gen = generator();

    useEffect(() => {
        writeSkillNames(skillNames[gen.next().value]);
    }, []);

    return (
        // <h1 ref={textRef} className="text"></h1>

        <h1 ref={textRef} className="text stroke font-san-serif title lh-1 text-uppercase"></h1>
    )
};


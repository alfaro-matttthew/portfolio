const skillNames = ['Graphic Designer', 'Front-End Developer'];
const text = document.querySelector('.text');

function* generator() {
    var i = 0;
    while (true) {
        yield i++;

        if (i > 1) {
            i = 0;
        }
    }
}

function writeSkillNames(skill) {
    let i = 0;
    text.innerHTML = "";

    let id = setInterval(() => {
        if (i >= skill.length) {
            deleteSkillName();
            clearInterval(id);
        } else {
            text.innerHTML += skill[i];
            i++;
        }
    }, 250)
};

function deleteSkillName() {
    let skill = text.innerHTML;
    let i = word.length - 1;
    let id = setInterval(() => {
        if (i >= 0) {
            text.innerHTML = text.innerHTML.substring(0, text.innerHTML.length - 1);
            i--;
        } else {
            writeSkillNames(skillNames[gen.next().value]);
            clearInterval(id);
        }
    }, 100)
};

let gen = generator();

writeSkillNames(skillNames[gen.next().value]);


// No link on skills click
const skills = document.getElementsByClassName('skills');
for (let skill of skills) {
    skill.addEventListener('click', (callback) => {
        callback.preventDefault();
    });
}

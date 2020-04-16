const green = '#0CD2A3';

const skillsList = {
    linkuxuimobile: ['linkbetclic', 'linkpoleemploi', 'linkjobijoba', 'linkerdf', 'linkdroitsfemmes', 'linkexplicite', 'linksunday', 'linkcultura', 'linkdronisos'],
    linkuxuiweb: ['linkbetclic', 'linkbordeaux', 'link33', 'linkgrenelle', 'linksuez', 'linkexplicite', 'linksunday', 'linkpmu', 'linkatos', 'linkdronisos', 'linkgeeksters'],
    linkuxuitv: ['linksunday'],
    linkproto: ['linkbetclic', 'linkpoleemploi', 'linkdroitsfemmes', 'linksunday'],
    linkinte: ['linkpoleemploi', 'link33'],
    linkprint: ['linkaquieucom', 'linkbordeaux', 'linkgrenelle', 'linksuez', 'linkjestocke', 'linkfidme', 'linkcetelem'],
    // linklogo: [],
    linkagile: ['linkbetclic', 'linkpoleemploi', 'linkerdf', 'linkdroitsfemmes', 'linkexplicite', 'linksunday', 'linkpmu', 'linkatos', 'linkcultura', 'linkdronisos'],
    linksys: ['linkbetclic'],
    linkdataviz: ['linkaquieucom', 'linkbordeaux', 'linkerdf', 'linkgrenelle', 'linksuez', 'linkatos', 'linkfidme', 'linkcetelem']
};

const companyList = {
    linkbetclic: ['linkuxuimobile', 'linkuxuiweb', 'linkproto', 'linksys', 'linkagile'],
    linkpoleemploi: ['linkuxuimobile', 'linkproto', 'linkinte', 'linkagile'],
    linkaquieucom: ['linkprint', 'linkdataviz'],
    linkbordeaux: ['linkuxuiweb', 'linkprint', 'linkdataviz'],
    link33: ['linkuxuiweb', 'linkinte'],
    linkjobijoba: ['linkuxuimobile'],
    linkerdf: ['linkuxuimobile', 'linkdataviz', 'linkagile'],
    linkgrenelle: ['linkuxuiweb', 'linkprint', 'linkdataviz'],
    linksuez: ['linkuxuiweb', 'linkprint', 'linkdataviz'],
    linkdroitsfemmes: ['linkuxuimobile', 'linkproto', 'linkagile'],
    linkexplicite: ['linkuxuimobile', 'linkuxuiweb', 'linkagile'],
    linksunday: ['linkuxuiweb', 'linkuxuimobile', 'linkuxuitv', 'linkproto', 'linkagile'],
    linkjestocke: ['linkprint'],
    linkpmu: ['linkuxuiweb', 'linkagile'],
    linkatos: ['linkuxuiweb', 'linkagile', 'linkdataviz'],
    linkcultura: ['linkuxuimobile', 'linkagile'],
    linkdronisos: ['linkuxuiweb', 'linkuxuimobile', 'linkagile'],
    linkgeeksters: ['linkuxuiweb'],
    linkfidme: ['linkprint', 'linkdataviz'],
    linkcetelem: ['linkprint', 'linkdataviz']
};

let linkCategorie;

const skillCorrespondence = (category, id) => {
    const changeLinksClass = (correspondences) => {
        for (let correspondence of correspondences) {
            let element = document.getElementById(correspondence);
            element.style.color = green;
        }
    };

    let correspondences;
    if (category === 'skill') {
        changeLinksClass(skillsList[id]);
    } else { // category === 'company'
        changeLinksClass(companyList[id]);
    }
};


const skills = document.getElementsByClassName('skills');
for (let skill of skills) {
    // No link on skills click
    skill.addEventListener('click', (callback) => {
        callback.preventDefault();
    });
    // skills correspondence
    skill.addEventListener('mouseover', (callback) => {
        linkCategorie = callback.target.className.split(' ')[1];
        skillCorrespondence(linkCategorie, callback.target.id);
    });
    //reset links style
    skill.addEventListener('mouseout', () => {
        for (let skillsStyleToErase of skills) {
            skillsStyleToErase.style.color = null;
        }
    });
}

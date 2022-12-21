//* DOMS ELEMENT
const teamMembers = document.getElementById('team-members');


//*ARRAY WITH EVERY TEAM MEMBER INFO
const infoTeamArray = [
    {
        name : 'Wayne Barnet',
        role : 'Founder & CEO',
        image:'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        image:'img/angela-caroll-chief-editor.jpg',
    },
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        image:'img/walter-gordon-office-manager.jpg',
    },
    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        image:'img/angela-lopez-social-media-manager.jpg',
    },
    {
        name : 'Scott Estrada',
        role : 'Developer',
        image : 'img/scott-estrada-developer.jpg',
    },
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        image:'img/barbara-ramos-graphic-designer.jpg',
    }
];

let memberCard='';
for (let i = 0; i < infoTeamArray.length; i++){
    const infoTeam = infoTeamArray[i];
    memberCard +=
    `<div class="col">
    <div class="card">
    <img src="${infoTeam.image}" alt="${infoTeam.image}">
    <h3>${infoTeam.name}</h3>
    <address>${infoTeam.role}</address>
    </div>
    </div> `;
}

teamMembers.innerHTML += memberCard;
const skills = [
  {id: 125223, name: 'name1', skill: 'Skill1'},
  {id: 127904, name: 'name2', skill: 'Skill2'},
  {id: 139608, name: 'name3', skill: 'Skill3'},
  {id: 231321, name: 'name4', skill: 'Skill4'}
];

  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, updatedSkill) {
  id = parseInt(id);
  const skill = skills.find(skill => skill.id === id);
  Object.assign(skill, updatedSkill);

}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}
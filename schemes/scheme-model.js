const db = require(`../data/db-config`);

const find = () => {
  return db(`schemes`);
};

const findById = id => {
  return db(`schemes`).where({ id });
};

const findSteps = id => {
  return db(`steps`)
    .orderBy(`step_number`, `desc`)
    .where({ scheme_id: id });
};

const findStepById = id => {
  return db(`steps`)
    .orderBy(`step_number`, `desc`)
    .where({ id });
};

const add = data => {
  return db(`schemes`)
    .insert(data)
    .then(([id]) => findById(id));
};

const addStep = (data, schemeId) => {
  return db(`steps`)
    .insert({ ...data, scheme_id: schemeId })
    .then(([id]) => findStepById(id));
};

const update = (data, id) => {
  return db(`schemes`)
    .update(data)
    .where({ id })
    .then(count => {
      if (count > 0) {
        return findById(id);
      } else {
        return count;
      }
    });
};

const remove = async id => {
  return db(`schemes`)
    .del()
    .where({ id })
    .then(count => {
      if (count > 0) {
        removeSteps(id);
        return count;
      } else {
        return count;
      }
    });
};

const removeSteps = schemeId => {
  return db(`steps`)
    .del()
    .where({ scheme_id: schemeId });
};
module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
};

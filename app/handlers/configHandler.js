const Resources = require('../data/resources');
const Templates = require('../data/form_templates');
const ValueSets = require('../data/valueSets');

module.exports = {
  getResources : getResources,
  getTemplates : getTemplates,
  getValueSets : getValueSets,
  getOneValueSet : getOneValueSet
}

// Returns all ValueSets saved
function getResources(request, result) {
  result.json(Resources);
}

// Returns all ValueSets saved
function getTemplates(request, result) {
  result.json(Templates);
}

// Returns all ValueSets saved
function getValueSets(request, result) {
  result.json(ValueSets);
}

// Returns the nested ValueSet specified by the remaining path of the route
function getOneValueSet(request, result) {
  // Gets the ValueSet category specified
  let selectedObject = ValueSets[request.params.valueset];
  if (selectedObject === undefined ) {
    result.status(404).send("This level of ValueSet does not exists");
  }

  // Gets the nested ValueSet as deep as specified
  let path = request.params['0'].split('/');
  for (let i=0; i<path.length; i++) {
    let variable = path[i];
    if(variable !== '') {
      selectedObject = selectedObject[variable];
      if (selectedObject === undefined) {
        result.status(404).send("This level of ValueSet does not exist");
        break;
      }
    }
  }
  result.json(selectedObject);
}
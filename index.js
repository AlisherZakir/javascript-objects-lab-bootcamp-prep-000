var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var new_obj = {};
  return Object.assign (new_obj, object, {[key]: value})
}
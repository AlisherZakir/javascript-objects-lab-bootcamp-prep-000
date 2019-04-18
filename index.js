var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var new_obj = {};
  return Object.assign (new_obj, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var new_obj = Object.assign()
}
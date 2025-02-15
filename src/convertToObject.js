'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((property) => property.trim().length > 0)
    .map((property) => getObjectField(property))
    .reduce((prev, next) => ({ ...prev, ...next }), {});
}

function getObjectField(property) {
  return property
    .split(':')
    .reduce((prev, next) => ({ [prev.trim()]: next.trim() }));
}

module.exports = convertToObject;

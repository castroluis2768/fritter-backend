/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function getAllGroups(fields) {
    fetch('/api/groups/all')
        .then(showResponse)
        .catch(showResponse);
}

function getGroupsByAuthor(fields) {
    fetch(`/api/groups?author=${fields.author}`)
        .then(showResponse)
        .catch(showResponse);
}

function createGroup(fields) {
    fetch('/api/groups', { method: 'POST', body: JSON.stringify(fields), headers: { 'Content-Type': 'application/json' } })
        .then(showResponse)
        .catch(showResponse);
}

function deleteGroup(fields) {
    fetch(`/api/groups/${fields.id}`, { method: 'DELETE' })
        .then(showResponse)
        .catch(showResponse);
}

function addMemberToGroup(fields) {
    fetch(`/api/groups/add/${fields.id}`, { method: 'PUT', body: JSON.stringify(fields), headers: { 'Content-Type': 'application/json' } })
        .then(showResponse)
        .catch(showResponse);
}

function removeMemberFromGroup(fields) {
    fetch(`/api/groups/remove/${fields.id}`, { method: 'PUT', body: JSON.stringify(fields), headers: { 'Content-Type': 'application/json' } })
        .then(showResponse)
        .catch(showResponse);
}

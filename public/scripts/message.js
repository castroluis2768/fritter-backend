/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

 function getMessagesInGroup(fields) {
    fetch('/api/messages/groupID=${fields.groupID}')
      .then(showResponse)
      .catch(showResponse);
  }
  function createMessage(fields) {
    fetch('/api/messages', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
  }
  
  function deleteMessage(fields) {
    fetch(`/api/messages/${fields.id}`, {method: 'DELETE'})
      .then(showResponse)
      .catch(showResponse);
  }

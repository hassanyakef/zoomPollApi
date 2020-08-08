// End point to create a Zoom poll:
// https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingpollcreate

const zoomAuthToken = '';

const createPoll = async (e, token) => {
  e.preventDefault();

  const meetingId = document.getElementById('meetingId').value;
  console.log({meetingId});


  const newPoll = {
    title: 'Zoom Lecture Poll',
    questions: [
      {
        name: 'Should the professor go faster or slower?',
        type: 'single',
        answers: ['faster', 'slower', 'current pace is fine']
      }
    ]
  };

  const url = `https://api.zoom.us/v2/meetings/${meetingId}/polls`;
  const params = {
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(newPoll),
    method: 'POST'
  };

  try {
    const res = await fetch(url, params);
    const data = await res.json();

    console.log({ data });

  } catch (err) {
    console.log({ err });
  }

};

const pollForm = document.getElementById('pollForm');

pollForm.addEventListener('submit', (e) => createPoll(e, zoomAuthToken))

/*
Prerequisites:

Host user type must be Pro.
Polling feature should be enabled in the host’s account.
Meeting must be a scheduled meeting. Instant meetings do not have polling features enabled.
 */
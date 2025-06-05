document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('callForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {
            to: formData.get('to'),
            url: formData.get('url')
        };

        try {
            const response = await fetch('/api/call', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            if (response.ok) {
                responseMessage.innerHTML = `<div class="alert alert-success">Call initiated successfully! Call SID: ${result.call.sid}</div>`;
            } else {
                responseMessage.innerHTML = `<div class="alert alert-danger">Error: ${result.error}</div>`;
            }
        } catch (error) {
            responseMessage.innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
        }
    });
});

const stickyNav = document.getElementById('stickyNav');
const TRIGGER_ZONE = 50;

document.addEventListener('mousemove', (e) => {
    if (e.clientY <= TRIGGER_ZONE) {
        stickyNav.classList.add('visible');
    } else {
        stickyNav.classList.remove('visible');
    }
});

fetch('../data/resume.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('name').textContent = data.header.name;
        document.getElementById('location').innerHTML = 
            `${data.header.contact.location} • ` +
            `<a href="${data.header.contact.linkedin}">linkedin.com/in/pedraza-martindiego</a> • ` +
            `<a href="${data.header.contact.github}">github.com/pedraza-martindiego</a>`;
        document.getElementById('contact-info').innerHTML = 
            `${data.header.contact.phone} • ${data.header.contact.email}`;
        document.getElementById('summary').textContent = data.header.summary;

        const experienceDiv = document.getElementById('experience');
        data.experience.forEach(job => {
            const jobHTML = `
                <div class="job">
                    <div class="job-header">
                        <div class="job-left">
                            <div class="job-title">${job.company}</div>
                            <div class="job-position">${job.position}</div>
                        </div>
                        <div class="job-right">
                            <div class="job-location">${job.location}</div>
                            <div class="job-date">${job.startDate} – ${job.endDate}</div>
                        </div>
                    </div>
                    <div class="job-description">${job.description}</div>
                    <div class="stack">Stack: ${job.stack.join(', ')}</div>
                </div>
            `;
            experienceDiv.innerHTML += jobHTML;
        });

        const educationDiv = document.getElementById('education');
        data.education.forEach(edu => {
            const eduHTML = `
                <div class="job">
                    <div class="job-header">
                        <div class="job-left">
                            <div class="job-title">${edu.institution}</div>
                            <div class="job-position">${edu.degree}</div>
                        </div>
                        <div class="job-right">
                            <div class="job-location">${edu.location}</div>
                            <div class="job-date">${edu.graduationDate}</div>
                        </div>
                    </div>
                </div>
            `;
            educationDiv.innerHTML += eduHTML;
        });

        const skillsList = document.getElementById('skills');
        data.skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });
    })
    .catch(error => console.error('Error cargando datos:', error));
